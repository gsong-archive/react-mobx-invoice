import React from 'react';

import DatePicker from 'react-bootstrap-date-picker';
import { Form } from 'react-bootstrap';

import HorizontalFormElement from './horizontal-form-element';
import HorizontalFormGroup from './horizontal-form-group';
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
        <Form horizontal>
          <HorizontalFormElement
            key="client"
            id="client"
            label="Client"
            placeholder="Client name"
            value={invoice.client}
            onChange={this.update}
          />

          <HorizontalFormElement
            key="email"
            id="email"
            label="Email"
            type="email"
            placeholder="Client email"
            value={invoice.email}
            onChange={this.update}
          />

          <HorizontalFormGroup
            id="dueDate"
            label="Due Date"
            formControl={
              <DatePicker
                value={invoice.dueDate}
                onChange={updateDueDate}
              />
            }
          />

          <HorizontalFormElement
            id="description"
            label="Description"
            placeholder="Short description"
            value={invoice.description}
            onChange={this.update}
          />

          <HorizontalFormElement
            id="notes"
            label="Notes"
            placeholder="Notes"
            componentClass="textarea"
            value={invoice.notes}
            onChange={this.update}
          />
        </Form>

        <hr />

        <InvoiceItemForm addItem={addItem} />
      </section>
    );
  };
}
