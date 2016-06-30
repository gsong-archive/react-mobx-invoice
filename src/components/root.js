import React from 'react';
import { Redirect, Route, Router, browserHistory } from 'react-router';

import AppBar from './app-bar';
import InvoiceDetail from '../sections/invoice-detail';
import InvoiceList from '../sections/invoice-list';
import NewInvoice from '../sections/invoice-new';


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
