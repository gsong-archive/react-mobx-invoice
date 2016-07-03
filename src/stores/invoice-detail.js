import { action, computed, observable } from 'mobx';

import moment from 'moment';

import { STATUSES } from '../api/invoice';


export default class InvoiceDetail {
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
