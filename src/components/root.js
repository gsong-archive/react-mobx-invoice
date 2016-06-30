import React from 'react';
import { Redirect, Route, Router, browserHistory } from 'react-router';
import { Provider } from 'mobx-react';

import invoice from '../stores/invoice';

import InvoiceDetail from '../sections/invoice-detail';
import InvoiceList from '../sections/invoice-list';
import NewInvoice from '../sections/invoice-new';


const store = { invoice };


const Root = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Redirect from="/" to="/invoice" />
      <Route path="/invoice" component={InvoiceList} />
      <Route path="/invoice/new" component={NewInvoice} />
      <Route path="/invoice/:id" component={InvoiceDetail} />
    </Router>
  </Provider>
);

export default Root;
