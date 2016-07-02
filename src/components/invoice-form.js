import React from 'react';

import DatePicker from 'react-bootstrap-date-picker';
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap';

import InvoiceItemForm from './invoice-item-form';


export default class InvoiceForm extends React.Component {
  static propTypes = {
    addItem: React.PropTypes.func.isRequired,
    invoice: React.PropTypes.object.isRequired,
    update: React.PropTypes.func.isRequired,
    updateDueDate: React.PropTypes.func.isRequired,
  }

  componentDidMount() {
    document.querySelector('#client').focus();
  }

  update = (e) => {
    this.props.update(e);
    this.forceUpdate();
  }

  render = () => {
    const { addItem, invoice, updateDueDate } = this.props;

    return (
      <section>
        <FormGroup controlId="client">
          <ControlLabel>Client</ControlLabel>
          <FormControl
            type="text"
            placeholder="Client name"
            value={invoice.client}
            onChange={this.update}
          />
        </FormGroup>

        <FormGroup controlId="dueDate">
          <ControlLabel>Due Date</ControlLabel>
          <DatePicker
            value={invoice.dueDate}
            onChange={updateDueDate}
          />
        </FormGroup>

        <FormGroup controlId="description">
          <ControlLabel>Description</ControlLabel>
          <FormControl
            type="text"
            placeholder="Short Description"
            value={invoice.description}
            onChange={this.update}
          />
        </FormGroup>

        <FormGroup controlId="notes">
          <ControlLabel>Notes</ControlLabel>
          <FormControl
            componentClass="textarea"
            placeholder="Notes"
            value={invoice.notes}
            onChange={this.update}
          />
        </FormGroup>

        <InvoiceItemForm addItem={addItem} />
      </section>
    );
  };
}
