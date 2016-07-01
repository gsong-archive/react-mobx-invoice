import React from 'react';
import { observer } from 'mobx-react';
import { routerShape, withRouter } from 'react-router';

import { Button, ButtonToolbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import InvoiceDisplay from '../components/invoice-display';
import InvoiceForm from '../components/invoice-form';
import store from '../stores';


@observer
class NewInvoice extends React.Component {
  componentWillMount() {
    store.viewState.setTitle('New Invoice');
    this.invoice = store.inProgressInvoice.invoice;
  }

  createInvoice = () => {
    const invoice = store.invoice.add(this.invoice);
    this.props.router.push(`/invoice/${invoice.id}`);
    store.inProgressInvoice.reset();
  };

  update = (e) => {
    this.invoice.update({ [e.target.id]: e.target.value });
  }

  updateDueDate = (value) => {
    this.invoice.update({ dueDate: value });
  }

  render = () => (
    <div>
      <InvoiceForm
        invoice={this.invoice}
        addItem={this.invoice.addItem}
        update={this.update}
        updateDueDate={this.updateDueDate}
      />

      <section>
        <h2>Preview</h2>
        <InvoiceDisplay invoice={this.invoice} />
      </section>

      <ButtonToolbar>
        <Button
          bsStyle="primary"
          onClick={this.createInvoice}
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
