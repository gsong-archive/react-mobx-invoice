import React from 'react';
import { routerShape, withRouter } from 'react-router';
import { observer } from 'mobx-react';

import Alert from 'react-s-alert';
import { Button, ButtonToolbar, Label } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import * as utils from './utils';
import InvoiceDisplay from '../components/invoice-display';
import store from '../stores';
import { STATUSES } from '../api/invoice';


@observer
class InvoiceDetail extends React.Component {
  static propTypes = {
    params: React.PropTypes.object.isRequired,
    router: routerShape,
  }

  componentWillMount() {
    this.invoice = store.invoice.find(this.props.params.id);
    if (this.invoice.status === STATUSES.DRAFT) {
      this.props.router.push(`invoice/${this.invoice.id}/edit`);
    }
    this.setTitle();
  }

  componentWillUpdate() {
    this.setTitle();
  }

  setTitle = () => {
    let title = 'Invoice Detail';
    if (this.invoice.status === STATUSES.OVERDUE) {
      title = (
        <span>
          <Label bsStyle="danger">OVERDUE</Label>
          {' '}
          {title}
        </span>
      );
      Alert.error('Invoice overdue!', { timeout: 3000 });
    }
    store.viewState.setTitle(title);
  }

  get payButton() {
    if (this.invoice.status === STATUSES.PAID) {
      return '';
    }
    return (
      <Button
        bsStyle="warning"
        onClick={() => utils.markInvoicePaid(this.invoice)}
      >
        Mark invoice as paid
      </Button>
    );
  }

  render = () => (
    <div>
      <section>
        <InvoiceDisplay invoice={this.invoice} />
      </section>

      <ButtonToolbar>
        {this.payButton}
        <LinkContainer to="/">
          <Button bsStyle="link">Return to Invoices</Button>
        </LinkContainer>
      </ButtonToolbar>
    </div>
  )
}

export default withRouter(InvoiceDetail);
