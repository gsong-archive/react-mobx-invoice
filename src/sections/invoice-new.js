import React from 'react';
import { Link, routerShape, withRouter } from 'react-router';
import { action } from 'mobx';
import { observer } from 'mobx-react';

import {
  Button, ControlLabel, FormControl, FormGroup,
} from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';

import InvoiceDetail from '../components/invoice-detail';
import store from '../stores';


@observer
class NewInvoice extends React.Component {
  @action componentWillMount() {
    store.viewState.title = 'New Invoice';
  }

  createInvoice = (invoice) => () => {
    const newInvoice = store.invoice.add(invoice);
    this.props.router.push(`/invoice/${newInvoice.id}`);
    store.invoice.inProgress = {};
  }

  updateInProgress = (e) => {
    store.invoice.inProgress[e.target.id] = e.target.value;
  }

  render = () => (
    <div>
      <section>
        <FormGroup controlId="client">
          <ControlLabel>Client</ControlLabel>
          <FormControl
            type="text"
            placeholder="Client name"
            defaultValue={store.invoice.inProgress.client}
            onChange={this.updateInProgress}
          />
        </FormGroup>

        <FormGroup controlId="dueDate">
          <ControlLabel>Due Date</ControlLabel>
          <DatePicker
            onChange={(value) => {
              store.invoice.inProgress.dueDate = value.slice(0, 10);
            }}
          />
        </FormGroup>

        <FormGroup controlId="description">
          <ControlLabel>Description</ControlLabel>
          <FormControl
            type="text"
            placeholder="Short Description"
            defaultValue={store.invoice.inProgress.client}
            onChange={this.updateInProgress}
          />
        </FormGroup>

        <Button
          bsStyle="primary"
          onClick={this.createInvoice(store.invoice.inProgress)}
        >
          Create invoice
        </Button>
        <Link to="/">Cancel</Link>
      </section>

      <section>
        <h2>Preview</h2>
        <InvoiceDetail invoice={store.invoice.inProgress} />
      </section>
    </div>
  )
}

NewInvoice.propTypes = {
  router: routerShape,
};

export default withRouter(NewInvoice);
