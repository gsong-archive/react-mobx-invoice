import React from 'react';
import { Link, routerShape, withRouter } from 'react-router';
import { action } from 'mobx';
import { observer } from 'mobx-react';

import { Table } from 'react-bootstrap';

import store from '../stores';


@observer
class InvoiceList extends React.Component {
  @action componentWillMount() {
    store.viewState.title = 'Invoice List';
  }

  render = () => (
    <section>
      <Table>
        <thead displaySelectAll={false}>
          <tr>
            <th>Invoice</th>
            <th>Client Name</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody displayRowCheckbox={false}>
          {store.invoice.list.map((invoice) => (
            <tr key={invoice.id}>
              <td>
                <Link to={`/invoice/${invoice.id}`}>{invoice.number}</Link>
              </td>
              <td>{invoice.name}</td>
              <td>{invoice.description}</td>
              <td>{invoice.dueDate}</td>
              <td>{invoice.total}</td>
              <td>{invoice.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Link to="/invoice/new">Add invoice</Link>
    </section>
  )
}

InvoiceList.propTypes = {
  router: routerShape,
};

export default withRouter(InvoiceList);
