import React from 'react';
import { Redirect, Route, Router, browserHistory } from 'react-router';
import { Provider } from 'mobx-react';

import Invoice from '../models/invoice';
import InvoiceDetail from '../sections/invoice-detail';
import InvoiceList from '../sections/invoice-list';
import NewInvoice from '../sections/invoice-new';


const state = {
  invoice: new Invoice(),
};


const Root = () => (
  <Provider state={state}>
    <Router history={browserHistory}>
      <Redirect from="/" to="/invoice" />
      <Route path="/invoice" component={InvoiceList} />
      <Route path="/invoice/detail" component={InvoiceDetail} />
      <Route path="/invoice/new" component={NewInvoice} />
    </Router>
  </Provider>
);

export default Root;
