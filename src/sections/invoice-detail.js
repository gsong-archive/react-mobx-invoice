import React from 'react';
import { Link } from 'react-router';
import { action } from 'mobx';
import { observer } from 'mobx-react';

import InvoiceDisplay from '../components/invoice-detail';
import store from '../stores';


@observer
class InvoiceDetail extends React.Component {
  @action componentWillMount() {
    store.viewState.title = 'Invoice Detail';
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

InvoiceDetail.propTypes = {
  params: React.PropTypes.object.isRequired,
};

export default InvoiceDetail;
