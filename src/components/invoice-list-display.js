import React from 'react';
import { Link } from 'react-router';
import { observer } from 'mobx-react';

import { Table } from 'react-bootstrap';

import InvoiceStatusLabel from './invoice-status-label';
import { STATUSES } from '../api/invoice';


const InvoiceListDisplay = ({ list, totalOutstanding }) => (
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

    <tfoot>
      <tr>
        <td colSpan="3" />
        <td>Total outstanding:</td>
        <td>{totalOutstanding}</td>
        <td />
      </tr>
    </tfoot>

    <tbody displayRowCheckbox={false}>
      {list.map((invoice) => (
        <tr
          key={invoice.id}
          className={invoice.status === STATUSES.OVERDUE ? 'danger' : ''}
        >
          <td>
            <Link to={`/invoice/${invoice.id}`}>{invoice.number}</Link>
          </td>
          <td>{invoice.client}</td>
          <td>
            <Link to={`/invoice/${invoice.id}`}>{invoice.description}</Link>
          </td>
          <td>{invoice.displayDueDate}</td>
          <td>{invoice.total}</td>
          <td><InvoiceStatusLabel invoice={invoice} /></td>
        </tr>
      ))}
    </tbody>
  </Table>
);

InvoiceListDisplay.propTypes = {
  list: React.PropTypes.object.isRequired,
  totalOutstanding: React.PropTypes.string.isRequired,
};

export default observer(InvoiceListDisplay);
