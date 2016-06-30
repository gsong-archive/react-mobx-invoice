import React from 'react';
import { Link, routerShape, withRouter } from 'react-router';
import { action } from 'mobx';
import { observer } from 'mobx-react';

import store from '../stores';


@observer
class NewInvoice extends React.Component {
  @action componentWillMount() {
    store.viewState.title = 'New Invoice';
  }

  createInvoice = () => {
    const invoice = store.invoice.add();
    this.props.router.push(`/invoice/${invoice.id}`);
  }

  render() {
    return (
      <div>
        <button onClick={this.createInvoice}>Create invoice</button>
        <Link to="/">Cancel</Link>
      </div>
    );
  }
}

NewInvoice.propTypes = {
  router: routerShape,
};

export default withRouter(NewInvoice);
