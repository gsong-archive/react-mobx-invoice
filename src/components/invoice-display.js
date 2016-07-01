import React from 'react';
import { observer } from 'mobx-react';

import { Panel } from 'react-bootstrap';


const InvoiceDisplay = ({ invoice }) => {
  const invoiceNumber = (
    invoice.number ? `Invoice #${invoice.number}` : 'New Invoice'
  );

  return (
    <div>
      <Panel
        header={`${invoice.client} ${invoiceNumber}`}
        bsStyle="primary"
      >
        <dl>
          <dt>Due Date</dt>
          <dd>{invoice.displayDueDate}</dd>
          <dt>Status</dt>
          <dd>{invoice.status}</dd>
          <dt>Description</dt>
          <dd>{invoice.description}</dd>
          <dt>Notes</dt>
          <dd>{invoice.notes}</dd>
        </dl>
      </Panel>
    </div>
  );
};

InvoiceDisplay.propTypes = {
  invoice: React.PropTypes.object.isRequired,
};

export default observer(InvoiceDisplay);
