import React from 'react';
import { Link } from 'react-router';
import { observer } from 'mobx-react';

import { Table } from 'react-bootstrap';


const InvoiceListDisplay = ({ list }) => (
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
      {list.map((invoice) => (
        <tr key={invoice.id}>
          <td>
            <Link to={`/invoice/${invoice.id}`}>{invoice.number}</Link>
          </td>
          <td>{invoice.client}</td>
          <td>
            <Link to={`/invoice/${invoice.id}`}>{invoice.description}</Link>
          </td>
          <td>{invoice.displayDueDate}</td>
          <td>{invoice.total}</td>
          <td>{invoice.status}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

InvoiceListDisplay.propTypes = {
  list: React.PropTypes.object.isRequired,
};

export default observer(InvoiceListDisplay);
