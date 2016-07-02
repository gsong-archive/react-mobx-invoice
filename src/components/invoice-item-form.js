import React from 'react';
import { observer } from 'mobx-react';

import {
  Button, ControlLabel, Form, FormControl, FormGroup,
} from 'react-bootstrap';


const defaultState = {
  description: '',
  unitCost: '',
  quantity: '',
};


@observer
export default class InvoiceItemForm extends React.Component {
  static propTypes = {
    addItem: React.PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = { ...defaultState };
  }

  handleChange = (e) => {
    this.setState({ [e.target.id.slice(4)]: e.target.value });
  }

  addItem = (addItemFunc) => (e) => {
    e.preventDefault();

    const { description } = this.state;
    let { unitCost, quantity } = this.state;
    unitCost = Number(unitCost || 0);
    quantity = Number(quantity || 0);

    addItemFunc({ description, unitCost, quantity });
    this.setState({ ...defaultState });
    document.querySelector('#iif_description').focus();
  }

  render = () => (
    <Form inline onSubmit={this.addItem(this.props.addItem)}>
      <FormGroup controlId="iif_description">
        <ControlLabel>Item</ControlLabel>
        {' '}
        <FormControl
          type="text"
          placeholder="Task or Item"
          value={this.state.description}
          onChange={this.handleChange}
        />
      </FormGroup>
      {' '}
      <FormGroup controlId="iif_unitCost">
        <ControlLabel>Unit Cost</ControlLabel>
        {' '}
        <FormControl
          type="number"
          step="0.01"
          placeholder="Rate or unit cost"
          value={this.state.unitCost}
          onChange={this.handleChange}
        />
      </FormGroup>
      {' '}
      <FormGroup controlId="iif_quantity">
        <ControlLabel>Quantity</ControlLabel>
        {' '}
        <FormControl
          type="number"
          step="0.01"
          placeholder="Hours or quantity"
          value={this.state.quantity}
          onChange={this.handleChange}
        />
      </FormGroup>
      {' '}
      <Button type="submit" bsStyle="info">
        Add Item
      </Button>
    </Form>
  )
}
