import { action, observable } from 'mobx';

import { InvoiceDetail } from './invoice';


class InProgressInvoice {
  @observable invoice = new InvoiceDetail({});

  @action reset = () => {
    this.invoice = new InvoiceDetail({});
  }
}

export default new InProgressInvoice();
