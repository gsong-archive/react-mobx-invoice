import React from 'react';
import { Link } from 'react-router';
import { observer } from 'mobx-react';


const InvoiceList = observer(['store'])(
  ({ store }) => (
    <div>
      <h1>Invoice List</h1>
      <ul>
        {
          store.invoice.list.map((invoice) => (
            <li key={invoice.id}>
              <Link to={`/invoice/${invoice.id}`}>
                {invoice.name}
              </Link>
            </li>
          ))
        }
      </ul>
      <Link to="/invoice/new">Add invoice</Link>
    </div>
  )
);

export default InvoiceList;
