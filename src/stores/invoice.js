import { action, computed, observable } from 'mobx';

import * as apiInvoice from '../api/invoice';


class InvoiceDetail {
  items = [];
  tasks = [];

  constructor(invoice) {
    Object.assign(this, invoice);
  }

  @computed get total() {
    const sum = this.tasks
      .reduce((acc, curr) => acc + curr.unitCost * curr.quantity, 0);
    return this.items
      .reduce((acc, curr) => acc + curr.unitCost * curr.quantity, sum)
      .toFixed(2);
  }
}


class Invoice {
  @observable list;

  constructor() {
    this.list = apiInvoice.getList()
      .map((invoice) => new InvoiceDetail(invoice));
  }

  @action add = () => {
    const invoice = new InvoiceDetail(apiInvoice.create({ name: 'blah.co' }));
    this.list.push(invoice);
    return invoice;
  }

  find = (id) => new InvoiceDetail(apiInvoice.find(id))
}

export default new Invoice();
