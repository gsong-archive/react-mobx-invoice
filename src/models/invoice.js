import { action, observable } from 'mobx';

import * as apiInvoice from '../api/invoice';


export default class Invoice {
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
