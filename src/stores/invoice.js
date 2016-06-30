import { action, observable } from 'mobx';

import * as apiInvoice from '../api/invoice';


class Invoice {
  @observable list;

  constructor() {
    this.list = apiInvoice.getList();
  }

  @action add = () => {
    const invoice = apiInvoice.create({ name: 'blah.co' });
    this.list.push(invoice);
    return invoice;
  }

  get = (id) => apiInvoice.get(id)
}

export default new Invoice();
