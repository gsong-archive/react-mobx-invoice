import React from 'react';
import { observer } from 'mobx-react';


const InvoiceList = observer(['state'])(
  ({ state }) => (
    <div>
      <h1>Invoice List</h1>
      <ul>
        {
          state.invoiceList.list.map((invoice) => (
            <li key={invoice.id}>{invoice.name}</li>
          ))
        }
      </ul>
      <button onClick={state.invoiceList.add}>Push me!</button>
    </div>
  )
);

export default InvoiceList;
