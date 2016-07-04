import test from 'tape';
import moment from 'moment';

import { STATUSES, statusFor } from './invoice';


const invoice = {
  status: STATUSES.DRAFT,
  dueDate: moment().add(2, 'days').toISOString(),
};


test('api/invoice', (t) => {
  t.equal(
    statusFor(invoice), STATUSES.DRAFT, 'Draft status shouldn’t be altered.'
  );

  invoice.status = STATUSES.PAID;
  t.equal(
    statusFor(invoice), STATUSES.PAID, 'Paid status shouldn’t be altered.'
  );

  invoice.status = STATUSES.SENT;
  t.equal(
    statusFor(invoice), STATUSES.SENT,
    'Invoice not yet due with sent status shouldn’t be altered.'
  );

  invoice.status = STATUSES.OVERDUE;
  t.equal(
    statusFor(invoice), STATUSES.SENT,
    'Overdue invoice with future dueDate should change to SENT.'
  );

  invoice.dueDate = moment().subtract(1, 'day').toISOString();
  t.equal(
    statusFor(invoice), STATUSES.OVERDUE,
    'Overdue invoice with past dueDate should remain overdue.'
  );

  invoice.status = STATUSES.SENT;
  t.equal(
    statusFor(invoice), STATUSES.OVERDUE,
    'Sent inovice with paset dueDate should change to overdue.'
  );

  t.end();
});
