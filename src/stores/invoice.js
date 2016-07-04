import { action, computed, observable } from 'mobx';

import * as apiInvoice from '../api/invoice';
import InvoiceDetail from './invoice-detail';


const STATUSES = apiInvoice.STATUSES;


class InvoiceNotFound {
  name='InvoiceNotFound'

  constructor(invoice) {
    this.invoice = invoice;
    this.message = `Invoice ${invoice.number} not found`;
  }
}


class Invoice {
  @observable list;

  constructor() {
    this.list = apiInvoice.getList()
      .map((invoice) => new InvoiceDetail(invoice));
  }

  @action add = (invoice) => {
    const newInvoice = new InvoiceDetail(apiInvoice.create(invoice));
    this.list.push(newInvoice);
    return newInvoice;
  }

  @action update = (invoice) => {
    const index = this.list.findIndex((el) => invoice.id === el.id);

    // TODO: Error checking here should be more sophisticated
    // Such as refetching the list to see if things have changed
    if (index === -1) { throw new InvoiceNotFound(invoice); }

    apiInvoice.update(invoice);
    this.list = [
      ...this.list.slice(0, index),
      invoice,
      ...this.list.slice(index + 1),
    ];
    return invoice;
  }

  @action send = (invoice) => {
    invoice.status = STATUSES.SENT;
    apiInvoice.email(invoice);
    return this.update(invoice);
  }

  @action markPaid = (invoice) => {
    const newInvoice = apiInvoice.markPaid(invoice);
    return this.update(newInvoice);
  }

  @computed get totalOutstanding() {
    return this.list
      .filter((el) => [STATUSES.SENT, STATUSES.OVERDUE].indexOf(el.status) > -1)
      .reduce((acc, el) => acc + Number(el.total), 0)
      .toFixed(2);
  }

  find = (id) => new InvoiceDetail(apiInvoice.find(id))
}

export default new Invoice();
