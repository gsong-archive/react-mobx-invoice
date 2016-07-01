import React from 'react';
import { Redirect, Route, Router, browserHistory } from 'react-router';

import AppBar from './partials/app-bar';
import InvoiceDetail from './invoice-detail';
import InvoiceList from './invoice-list';
import NewInvoice from './invoice-new';


const Root = () => (
  <div className="container">
    <AppBar />
    <Router history={browserHistory}>
      <Redirect from="/" to="/invoice" />
      <Route path="/invoice" component={InvoiceList} />
      <Route path="/invoice/new" component={NewInvoice} />
      <Route path="/invoice/:id" component={InvoiceDetail} />
    </Router>
  </div>
);

export default Root;
