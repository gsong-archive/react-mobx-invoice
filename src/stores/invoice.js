import moment from 'moment';
import { action, computed, observable } from 'mobx';

import * as apiInvoice from '../api/invoice';


class InvoiceNotFound {
  name='InvoiceNotFound'

  constructor(invoice) {
    this.invoice = invoice;
    this.message = `Invoice ${invoice.number} not found`;
  }
}


export const STATUSES = {
  DRAFT: 'draft',
  SENT: 'sent',
  PAID: 'paid',
  OVERDUE: 'overdue',
};


export class InvoiceDetail {
  @observable client = '';
  @observable email = '';
  @observable dueDate = moment().toISOString();
  @observable description = '';
  @observable notes = '';
  @observable status = STATUSES.DRAFT;
  @observable items = [];

  constructor(invoice) {
    Object.assign(this, invoice);
  }

  @action update = (newInfo) => {
    Object.assign(this, newInfo);
  }

  @action addItem = (item) => {
    this.items.push(item);
  }

  @computed get displayDueDate() {
    return moment(this.dueDate).local().format('MM/DD/YYYY');
  }

  @computed get total() {
    return this.items
      .reduce((acc, curr) => acc + curr.unitCost * curr.quantity, 0)
      .toFixed(2);
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
    const newInvoice = invoice;
    newInvoice.status = STATUSES.SENT;
    apiInvoice.email(newInvoice);
    return this.update(newInvoice);
  }

  find = (id) => new InvoiceDetail(apiInvoice.find(id))
}

export default new Invoice();
