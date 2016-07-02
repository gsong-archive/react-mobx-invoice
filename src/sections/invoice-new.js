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
  static propTypes = {
    router: routerShape,
  }

  componentWillMount() {
    store.viewState.setTitle('New Invoice');
  }

  createInvoice = () => {
    const invoice = store.invoice.add(store.inProgressInvoice.invoice);
    this.props.router.push(`/invoice/${invoice.id}`);
    store.inProgressInvoice.reset();
  };

  update = (e) => {
    store.inProgressInvoice.invoice.update({ [e.target.id]: e.target.value });
  }

  updateDueDate = (value) => {
    store.inProgressInvoice.invoice.update({ dueDate: value });
  }

  reset = () => {
    store.inProgressInvoice.reset();
  }

  render = () => {
    const invoice = store.inProgressInvoice.invoice;

    return (
      <div>
        <InvoiceForm
          invoice={invoice}
          addItem={invoice.addItem}
          update={this.update}
          updateDueDate={this.updateDueDate}
        />

        <section>
          <h2>Preview</h2>
          <InvoiceDisplay invoice={invoice} />
        </section>

        <ButtonToolbar>
          <Button bsStyle="primary" onClick={this.createInvoice}>
            Create invoice
          </Button>
          <Button bsStyle="danger" onClick={this.reset}>Start Over</Button>
          <LinkContainer to="/">
            <Button bsStyle="link">Return to Invoices</Button>
          </LinkContainer>
        </ButtonToolbar>
      </div>
    );
  };
}

export default withRouter(NewInvoice);
