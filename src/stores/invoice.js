import moment from 'moment';
import { action, computed, observable } from 'mobx';

import * as apiInvoice from '../api/invoice';


class InvoiceDetail {
  @observable client = '';
  @observable dueDate = moment().toISOString();
  @observable description = '';
  @observable notes = '';
  @observable status = 'draft';
  @observable items = [];

  constructor(invoice) {
    Object.assign(this, invoice);
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
  @observable inProgress = new InvoiceDetail({});

  constructor() {
    this.list = apiInvoice.getList()
      .map((invoice) => new InvoiceDetail(invoice));
  }

  @action add = (invoice) => {
    const newInvoice = new InvoiceDetail(apiInvoice.create(invoice));
    this.list.push(newInvoice);
    return newInvoice;
  }

  find = (id) => new InvoiceDetail(apiInvoice.find(id))


  @action updateInProgress(update) {
    Object.assign(this.inProgress, update);
  }


  @action resetInProgress = () => {
    this.inProgress = new InvoiceDetail({});
  }
}

export default new Invoice();
