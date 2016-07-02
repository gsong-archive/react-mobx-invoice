import { v4 } from 'node-uuid';


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


export const getList = () => list;


export const find = (id) => list.filter((invoice) => invoice.id === id)[0];


export const create = (invoice) => {
  const newInvoice = {
    ...invoice,
    id: v4(),
    number: ++invoiceNumber,
  };
  list.push(newInvoice);
  return newInvoice;
};


export const update = (invoice) => {
  const index = list.findIndex((el) => invoice.id === el.id);
  list = [
    ...list.slice(0, index),
    invoice,
    ...list.slice(index + 1),
  ];
  return invoice;
};


export const email = (invoice) => {
  // TODO: Actually send email
  const newInvoice = invoice;
  newInvoice.status = 'sent';
  return update(newInvoice);
};


export const markPaid = (invoice) => {
  const newInvoice = invoice;
  newInvoice.status = 'paid';
  return update(newInvoice);
};
