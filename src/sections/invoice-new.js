import React from 'react';
import { action } from 'mobx';
import { observer } from 'mobx-react';
import { routerShape, withRouter } from 'react-router';

import { Button, ButtonToolbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import InvoiceDisplay from '../components/invoice-display';
import InvoiceForm from '../components/invoice-form';
import store from '../stores';


@observer
class NewInvoice extends React.Component {
  @action componentWillMount() {
    store.viewState.title = 'New Invoice';
    this.invoice = store.inProgressInvoice.invoice;
  }

  createInvoice = (invoice) => () => {
    const newInvoice = store.invoice.add(invoice);
    this.props.router.push(`/invoice/${newInvoice.id}`);
    store.inProgressInvoice.reset();
  }

  update = (e) => {
    store.inProgressInvoice.update({ [e.target.id]: e.target.value });
  }

  render = () => (
    <div>
      <InvoiceForm
        invoice={this.invoice}
        addItem={store.inProgressInvoice.addItem}
        update={this.update}
      />

      <section>
        <h2>Preview</h2>
        <InvoiceDisplay invoice={this.invoice} />
      </section>

      <ButtonToolbar>
        <Button
          bsStyle="primary"
          onClick={this.createInvoice(this.invoice)}
        >
          Create invoice
        </Button>
        <LinkContainer to="/">
          <Button bsStyle="link">Cancel</Button>
        </LinkContainer>
      </ButtonToolbar>
    </div>
  )
}

NewInvoice.propTypes = {
  router: routerShape,
};

export default withRouter(NewInvoice);
