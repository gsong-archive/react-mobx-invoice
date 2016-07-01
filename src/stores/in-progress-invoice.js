import { action, observable } from 'mobx';

import { InvoiceDetail } from './invoice';


class InProgressInvoice extends InvoiceDetail {
  @observable invoice = new InvoiceDetail({});

  @action update(newInfo) {
    Object.assign(this.invoice, newInfo);
  }

  @action reset = () => {
    this.invoice = new InvoiceDetail({});
  }
}

export default new InProgressInvoice();
