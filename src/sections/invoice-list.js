import React from 'react';
import { routerShape, withRouter } from 'react-router';
import { observer } from 'mobx-react';

import { Button } from 'react-bootstrap';

import InvoiceListDisplay from '../components/invoice-list-display';
import store from '../stores';


@observer
class InvoiceList extends React.Component {
  static propTypes = {
    router: routerShape,
  }

  componentWillMount() {
    store.viewState.setTitle('Invoice List');
  }

  showCreateInvoice = () => {
    this.props.router.push('invoice/new');
  }

  // TODO: Also show total outstanding balance for all invoices
  render = () => (
    <section>
      <Button bsStyle="primary" onClick={this.showCreateInvoice}>
        <i className="fa fa-plus fa-fw fa-lg" />
        New Invoice
      </Button>
      <InvoiceListDisplay list={store.invoice.list} />
    </section>
  )
}

export default withRouter(InvoiceList);
