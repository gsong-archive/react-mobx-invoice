import { action, observable } from 'mobx';

import { InvoiceDetail } from './invoice';


class InProgressInvoice {
  @observable invoice = new InvoiceDetail({});

  @action update(newInfo) {
    Object.assign(this.invoice, newInfo);
  }

  @action addItem(item) {
    this.invoice.items.push(item);
  }

  @action reset = () => {
    this.invoice = new InvoiceDetail({});
  }
}

export default new InProgressInvoice();
