import { browserHistory } from 'react-router';

import Alert from 'react-s-alert';

import store from '../stores';


export const markInvoicePaid = (invoice) => {
  store.invoice.markPaid(invoice);
  browserHistory.push(`invoice/${invoice.id}`);
  Alert.success('Invoice marked as paid.');
};
