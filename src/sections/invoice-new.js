import React from 'react';
import { action } from 'mobx';
import { observer } from 'mobx-react';
import { routerShape, withRouter } from 'react-router';

import DatePicker from 'react-bootstrap-date-picker';
import {
  Button, ButtonToolbar, ControlLabel, Form, FormControl, FormGroup,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import InvoiceDisplay from '../components/invoice-display';
import store from '../stores';


@observer
class NewInvoice extends React.Component {
  @action componentWillMount() {
    store.viewState.title = 'New Invoice';
    this.invoice = store.inProgressInvoice.invoice;
  }

  componentDidMount() {
    document.querySelector('#client').focus();
  }

  createInvoice = (invoice) => () => {
    const newInvoice = store.invoice.add(invoice);
    this.props.router.push(`/invoice/${newInvoice.id}`);
    store.inProgressInvoice.reset();
  }

  update = (e) => {
    store.inProgressInvoice.update({ [e.target.id]: e.target.value });
  }

  addItem = (e) => {
    e.preventDefault();
    const descriptionElem = document.querySelector('#itemDescription');
    const unitCostElem = document.querySelector('#unitCost');
    const quantityElem = document.querySelector('#quantity');
    const description = descriptionElem.value;
    const unitCost = Number(unitCostElem.value || 0);
    const quantity = Number(quantityElem.value || 0);
    store.inProgressInvoice.addItem({ description, unitCost, quantity });
    descriptionElem.value = '';
    unitCostElem.value = '';
    quantityElem.value = '';
    descriptionElem.focus();
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
            onChange={this.update}
          />
        </FormGroup>

        <FormGroup controlId="dueDate">
          <ControlLabel>Due Date</ControlLabel>
          <DatePicker
            value={this.invoice.dueDate}
            onChange={(value) => {
              this.invoice.dueDate = value;
            }}
          />
        </FormGroup>

        <FormGroup controlId="description">
          <ControlLabel>Description</ControlLabel>
          <FormControl
            type="text"
            placeholder="Short Description"
            defaultValue={this.invoice.description}
            onChange={this.update}
          />
        </FormGroup>

        <FormGroup controlId="notes">
          <ControlLabel>Notes</ControlLabel>
          <FormControl
            componentClass="textarea"
            placeholder="Notes"
            defaultValue={this.invoice.notes}
            onChange={this.update}
          />
        </FormGroup>

        <Form inline onSubmit={this.addItem}>
          <FormGroup controlId="itemDescription">
            <ControlLabel>Item</ControlLabel>
            {' '}
            <FormControl type="text" placeholder="Task or Item" />
          </FormGroup>
          {' '}
          <FormGroup controlId="unitCost">
            <ControlLabel>Unit Cost</ControlLabel>
            {' '}
            <FormControl
              type="number"
              step="0.01"
              placeholder="Rate or unit cost"
            />
          </FormGroup>
          {' '}
          <FormGroup controlId="quantity">
            <ControlLabel>Quantity</ControlLabel>
            {' '}
            <FormControl
              type="number"
              step="0.01"
              placeholder="Hours or quantity"
            />
          </FormGroup>
          {' '}
          <Button type="submit" bsStyle="success">
            Add Item
          </Button>
        </Form>
      </section>

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
