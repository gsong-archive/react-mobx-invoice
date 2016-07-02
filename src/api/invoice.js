import { v4 } from 'node-uuid';
import moment from 'moment';


let invoiceNumber = 1;

// status can be: draft, sent, partial, paid, overdue
let list = [
  {
    id: v4(),
    number: invoiceNumber,
    client: 'Acme Co.',
    email: 'acme@acme.co',
    dueDate: '2016-07-01T19:00:00.000Z',
    description: 'Super duper website development',
    notes: 'Hi I’m a note!',
    status: 'draft',
    items: [
      {
        description: 'Development',
        unitCost: 100.00,
        quantity: 1.6,
      },
      {
        description: 'SSL certificates',
        unitCost: 15.95,
        quantity: 2,
      },
    ],
  },
];


export const STATUSES = {
  DRAFT: 'draft',
  SENT: 'sent',
  PAID: 'paid',
  OVERDUE: 'overdue',
};


function statusFor(invoice) {
  switch (invoice.status) {
    case STATUSES.SENT: {
      const due = moment(invoice.dueDate);
      if (due.isBefore(moment())) {
        invoice.status = STATUSES.OVERDUE;
      }
      return invoice.status;
    }

    case STATUSES.OVERDUE: {
      const due = moment(invoice.dueDate);
      if (due.isSameOrAfter(moment())) {
        invoice.status = STATUSES.SENT;
      }
      return invoice.status;
    }

    default:
      return invoice.status;
  }
}


export function update(invoice) {
  const index = list.findIndex((el) => invoice.id === el.id);

  invoice.status = statusFor(invoice);
  list = [
    ...list.slice(0, index),
    invoice,
    ...list.slice(index + 1),
  ];
  return invoice;
}


export function getList() {
  return list.map((invoice) => update(invoice));
}


export function find(id) {
  return getList().filter((invoice) => invoice.id === id)[0];
}


export function create(invoice) {
  const newInvoice = {
    ...invoice,
    id: v4(),
    number: ++invoiceNumber,
  };
  list.push(newInvoice);
  return newInvoice;
}


export function email(invoice) {
  // TODO: Actually send email
  invoice.status = 'sent';
  return update(invoice);
}


export function markPaid(invoice) {
  invoice.status = 'paid';
  return update(invoice);
}
