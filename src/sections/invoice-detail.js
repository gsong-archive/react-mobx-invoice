import React from 'react';
import { Link } from 'react-router';
import { observer } from 'mobx-react';

import InvoiceDisplay from '../components/invoice-display';
import store from '../stores';


@observer
class InvoiceDetail extends React.Component {
  static propTypes = {
    params: React.PropTypes.object.isRequired,
  }

  componentWillMount() {
    store.viewState.setTitle('Invoice Detail');
    this.invoice = store.invoice.find(this.props.params.id);
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

export default InvoiceDetail;
