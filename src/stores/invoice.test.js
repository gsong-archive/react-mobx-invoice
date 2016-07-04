import test from 'tape';

import invoice from './invoice';


// TODO: We need to stub out the invoice.list
test('stores/invoice-detail', (t) => {
  t.equal(
    invoice.totalOutstanding, '73806.00',
    'Total outstanding should calculate properly.'
  );
  t.end();
});
