import React from 'react';
import { Link, routerShape, withRouter } from 'react-router';
import { observer } from 'mobx-react';


@observer(['store'])
class NewInvoice extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  createInvoice = () => {
    const invoice = this.store.invoice.add();
    this.props.router.push(`/invoice/${invoice.id}`);
  }

  render() {
    return (
      <div>
        <h1>New Invoice</h1>
        <button onClick={this.createInvoice}>Create invoice</button>
        <Link to="/">Cancel</Link>
      </div>
    );
  }
}

NewInvoice.propTypes = {
  router: routerShape,
  store: React.PropTypes.object,
};

export default withRouter(NewInvoice);
