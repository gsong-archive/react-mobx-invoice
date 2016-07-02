import React from 'react';

import { Label } from 'react-bootstrap';

import { STATUSES } from '../api/invoice';


const InvoiceStatusLabel = ({ invoice }) => {
  let style;

  switch (invoice.status) {
    case STATUSES.SENT: {
      style = 'info';
      break;
    }

    case STATUSES.PAID: {
      style = 'success';
      break;
    }

    case STATUSES.OVERDUE: {
      style = 'danger';
      break;
    }

    default:
      style = 'default';
  }

  return (
    <Label bsStyle={style}>{invoice.status.toUpperCase()}</Label>
  );
};

InvoiceStatusLabel.propTypes = {
  invoice: React.PropTypes.object.isRequired,
};

export default InvoiceStatusLabel;
