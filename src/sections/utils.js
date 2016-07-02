import { browserHistory } from 'react-router';

import store from '../stores';


export const markInvoicePaid = (invoice) => {
  store.invoice.markPaid(invoice);
  browserHistory.push(`/invoice/${invoice.id}`);
};
