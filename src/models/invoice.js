import { action, observable } from 'mobx';

import * as apiInvoice from '../api/invoice';


export class InvoiceList {
  @observable invoices = [];

  constructor() {
    this.getInvoices();
  }

  getInvoices() {
    this.invoices = apiInvoice.getInvoices();
  }

  @action create = () => {
    apiInvoice.addInvoice({ name: 'blah.co' });
    this.getInvoices();
  }
}
