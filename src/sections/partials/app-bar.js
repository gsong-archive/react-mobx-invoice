import React from 'react';
import { observer } from 'mobx-react';

import { PageHeader } from 'react-bootstrap';

import store from '../../stores';


const AppBar = () => (
  <PageHeader>{store.viewState.title}</PageHeader>
);

export default observer(AppBar);
