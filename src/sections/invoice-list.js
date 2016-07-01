import React from 'react';
import { routerShape, withRouter } from 'react-router';
import { action } from 'mobx';
import { observer } from 'mobx-react';

import { Button } from 'react-bootstrap';

import InvoiceListDisplay from '../components/invoice-list-display';
import store from '../stores';


@observer
class InvoiceList extends React.Component {
  @action componentWillMount() {
    store.viewState.title = 'Invoice List';
  }

  showCreateInvoice = () => {
    this.props.router.push('/invoice/new');
  }

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

InvoiceList.propTypes = {
  router: routerShape,
};

export default withRouter(InvoiceList);
