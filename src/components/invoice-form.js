import React from 'react';

import DatePicker from 'react-bootstrap-date-picker';
import {
  Button, ControlLabel, Form, FormControl, FormGroup,
} from 'react-bootstrap';


class InvoiceForm extends React.Component {
  componentWillMount() {
    this.invoice = this.props.invoice;
  }

  componentDidMount() {
    document.querySelector('#client').focus();
  }

  addItem = (addItemFunc) => (e) => {
    e.preventDefault();
    const descriptionElem = document.querySelector('#itemDescription');
    const unitCostElem = document.querySelector('#unitCost');
    const quantityElem = document.querySelector('#quantity');
    const description = descriptionElem.value;
    const unitCost = Number(unitCostElem.value || 0);
    const quantity = Number(quantityElem.value || 0);
    addItemFunc({ description, unitCost, quantity });
    descriptionElem.value = '';
    unitCostElem.value = '';
    quantityElem.value = '';
    descriptionElem.focus();
  }

  render = () => (
    <section>
      <FormGroup controlId="client">
        <ControlLabel>Client</ControlLabel>
        <FormControl
          type="text"
          placeholder="Client name"
          defaultValue={this.invoice.client}
          onChange={this.props.update}
        />
      </FormGroup>

      <FormGroup controlId="dueDate">
        <ControlLabel>Due Date</ControlLabel>
        <DatePicker
          value={this.invoice.dueDate}
          onChange={this.props.updateDueDate}
        />
      </FormGroup>

      <FormGroup controlId="description">
        <ControlLabel>Description</ControlLabel>
        <FormControl
          type="text"
          placeholder="Short Description"
          defaultValue={this.invoice.description}
          onChange={this.props.update}
        />
      </FormGroup>

      <FormGroup controlId="notes">
        <ControlLabel>Notes</ControlLabel>
        <FormControl
          componentClass="textarea"
          placeholder="Notes"
          defaultValue={this.invoice.notes}
          onChange={this.props.update}
        />
      </FormGroup>

      <Form inline onSubmit={this.addItem(this.props.addItem)}>
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
  )
}

InvoiceForm.propTypes = {
  addItem: React.PropTypes.func.isRequired,
  invoice: React.PropTypes.object.isRequired,
  update: React.PropTypes.func.isRequired,
  updateDueDate: React.PropTypes.func.isRequired,
};

export default InvoiceForm;
