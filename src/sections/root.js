import React from 'react';
import { Redirect, Route, Router, browserHistory } from 'react-router';

import Alert from 'react-s-alert';

import AppBar from './partials/app-bar';
import EditInvoice from './invoice-edit';
import InvoiceDetail from './invoice-detail';
import InvoiceList from './invoice-list';
import NewInvoice from './invoice-new';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import 'react-s-alert/dist/s-alert-default.css';

const Root = () => (
  <div className="container">
    <AppBar />
    <Router history={browserHistory}>
      <Redirect from="/" to="invoice" />
      <Route path="invoice" component={InvoiceList} />
      <Route path="invoice/new" component={NewInvoice} />
      <Route path="invoice/:id/edit" component={EditInvoice} />
      <Route path="invoice/:id" component={InvoiceDetail} />
    </Router>

    <Alert stack={{ limit: 3 }} effect="slide" timeout={2000} />
  </div>
);

export default Root;
