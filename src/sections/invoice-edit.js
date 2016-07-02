import React from 'react';
import { observer } from 'mobx-react';
import { routerShape, withRouter } from 'react-router';

import Alert from 'react-s-alert';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import * as utils from './utils';
import InvoiceDisplay from '../components/invoice-display';
import InvoiceForm from '../components/invoice-form';
import store from '../stores';
import { STATUSES } from '../api/invoice';


@observer
class EditInvoice extends React.Component {
  static propTypes = {
    params: React.PropTypes.object.isRequired,
    router: routerShape,
  }

  componentWillMount() {
    store.viewState.setTitle('Edit Invoice');
    this.invoice = store.invoice.find(this.props.params.id);
    if (this.invoice.status !== STATUSES.DRAFT) {
      this.props.router.push(`/invoice/${this.invoice.id}`);
    }
  }

  update = (e) => {
    this.invoice.update({ [e.target.id]: e.target.value });
  }

  updateDueDate = (value) => {
    this.invoice.update({ dueDate: value });
  }

  updateInvoice = () => {
    this.invoice = store.invoice.update(this.invoice);
    this.props.router.push(`/invoice/${this.invoice.id}`);
    Alert.success('Invoice updated.');
  }

  sendInvoice = () => {
    store.invoice.send(this.invoice);
    this.props.router.push(`/invoice/${this.invoice.id}`);
    Alert.success('Invoice sent.');
  }

  render = () => {
    const invoice = this.invoice;

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
          <Button bsStyle="primary" onClick={this.updateInvoice}>
            Update invoice
          </Button>
          <Button bsStyle="success" onClick={this.sendInvoice}>
            Send invoice
          </Button>
          <Button
            bsStyle="warning"
            onClick={() => utils.markInvoicePaid(this.invoice)}
          >
            Mark invoice as paid
          </Button>
          <LinkContainer to="/">
            <Button bsStyle="link">Cancel</Button>
          </LinkContainer>
        </ButtonToolbar>
      </div>
    );
  };
}

export default withRouter(EditInvoice);
