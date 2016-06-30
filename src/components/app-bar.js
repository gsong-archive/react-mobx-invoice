import React from 'react';
import { observer } from 'mobx-react';

import { PageHeader } from 'react-bootstrap';

import store from '../stores';


export default observer(() => (
  <PageHeader>{store.viewState.title}</PageHeader>
));
