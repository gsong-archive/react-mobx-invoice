import React from 'react';
import moment from 'moment';
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
          <dd>{moment(invoice.dueDate).local().format('MM/DD/YYYY')}</dd>
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
