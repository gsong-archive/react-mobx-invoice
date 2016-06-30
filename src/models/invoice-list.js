import { action, observable } from 'mobx';

import * as apiInvoice from '../api/invoice';


export default class InvoiceList {
  @observable list;

  constructor() {
    this.get();
  }

  get() {
    this.list = apiInvoice.getList();
  }

  @action add = () => {
    apiInvoice.create({ name: 'blah.co' });
    this.get();
  }
}
