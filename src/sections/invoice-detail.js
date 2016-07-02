import React from 'react';
import { Link, routerShape, withRouter } from 'react-router';
import { observer } from 'mobx-react';

import InvoiceDisplay from '../components/invoice-display';
import store from '../stores';
import { STATUSES } from '../stores/invoice';


@observer
class InvoiceDetail extends React.Component {
  static propTypes = {
    params: React.PropTypes.object.isRequired,
    router: routerShape,
  }

  componentWillMount() {
    store.viewState.setTitle('Invoice Detail');
    this.invoice = store.invoice.find(this.props.params.id);
    if (this.invoice.status === STATUSES.DRAFT) {
      this.props.router.push(`/invoice/${this.invoice.id}/edit`);
    }
  }

  render = () => (
    <div>
      <section>
        <InvoiceDisplay invoice={this.invoice} />
      </section>
      <Link to="/">See all invoices</Link>
    </div>
  )
}

export default withRouter(InvoiceDetail);
