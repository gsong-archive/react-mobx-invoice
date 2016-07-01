import React from 'react';
import { routerShape, withRouter } from 'react-router';
import { action } from 'mobx';
import { observer } from 'mobx-react';

import DatePicker from 'react-bootstrap-date-picker';
import {
  Button, ButtonToolbar, ControlLabel, FormControl, FormGroup,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import InvoiceDisplay from '../components/invoice-display';
import store from '../stores';


@observer
class NewInvoice extends React.Component {
  @action componentWillMount() {
    store.viewState.title = 'New Invoice';
    this.invoice = store.invoice.inProgress;
  }

  createInvoice = (invoice) => () => {
    const newInvoice = store.invoice.add(invoice);
    this.props.router.push(`/invoice/${newInvoice.id}`);
    store.invoice.resetInProgress();
  }

  updateInProgress = (e) => {
    store.invoice.updateInProgress({ [e.target.id]: e.target.value });
  }

  render = () => (
    <div>
      <section>
        <FormGroup controlId="client">
          <ControlLabel>Client</ControlLabel>
          <FormControl
            type="text"
            placeholder="Client name"
            defaultValue={this.invoice.client}
            onChange={this.updateInProgress}
          />
        </FormGroup>

        <FormGroup controlId="dueDate">
          <ControlLabel>Due Date</ControlLabel>
          <DatePicker
            onChange={(value) => {
              this.invoice.dueDate = value.slice(0, 10);
            }}
          />
        </FormGroup>

        <FormGroup controlId="description">
          <ControlLabel>Description</ControlLabel>
          <FormControl
            type="text"
            placeholder="Short Description"
            defaultValue={this.invoice.client}
            onChange={this.updateInProgress}
          />
        </FormGroup>

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
      </section>

      <section>
        <h2>Preview</h2>
        <InvoiceDisplay invoice={this.invoice} />
      </section>
    </div>
  )
}

NewInvoice.propTypes = {
  router: routerShape,
};

export default withRouter(NewInvoice);
