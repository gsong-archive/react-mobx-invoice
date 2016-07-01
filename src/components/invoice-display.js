import React from 'react';
import { observer } from 'mobx-react';


const InvoiceDisplay = ({ invoice }) => (
  <dl>
    <dt>Client Name</dt>
    <dd>{invoice.client}</dd>
    <dt>Invoice Number</dt>
    <dd>{invoice.number || 'Not Assigned'}</dd>
    <dt>Due Date</dt>
    <dd>{invoice.dueDate}</dd>
    <dt>Status</dt>
    <dd>{invoice.status}</dd>
    <dt>Description</dt>
    <dd>{invoice.description}</dd>
    <dt>Notes</dt>
    <dd>{invoice.notes}</dd>
  </dl>
);

InvoiceDisplay.propTypes = {
  invoice: React.PropTypes.object.isRequired,
};

export default observer(InvoiceDisplay);
