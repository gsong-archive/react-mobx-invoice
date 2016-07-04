import test from 'tape';

import InvoiceDetail from './invoice-detail';


test('stores/invoice-detail', (t) => {
  const item = new InvoiceDetail({ items: [
    { unitCost: 25, quantity: 10 },
    { unitCost: 15.43, quantity: 12.54 },
  ] });

  t.equal(item.total, '443.49', 'InvoiceDetail totals items properly.');
  t.end();
});
