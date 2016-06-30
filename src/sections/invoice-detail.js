import React from 'react';
import { Link } from 'react-router';
import { observer } from 'mobx-react';


const InvoiceDetail = observer(['store'])(
  ({ store, params: { id } }) => {
    const invoice = store.invoice.get(id);
    return (
      <div>
        <h1>Invoice Detail</h1>
        <section>
          <p>name: {invoice.name}</p>
          <p>id: {invoice.id}</p>
        </section>
        <Link to="/">See all invoices</Link>
      </div>
    );
  }
);

export default InvoiceDetail;
