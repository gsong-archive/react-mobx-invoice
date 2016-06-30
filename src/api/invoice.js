import { v4 } from 'node-uuid';


let invoiceNumber = 1;

const list = [
  {
    id: v4(),
    number: invoiceNumber,
    name: 'Acme Co.',
    email: 'acme@acme.co',
    invoiceDate: '2016-06-26',
    dueDate: '2016-06-27',
    description: 'Super duper website development',
    notes: 'Hi I’m a note!',
    status: 'draft',
    tasks: [
      {
        description: 'Development',
        unitCost: 100.00,
        quantity: 1.6,
      },
    ],
    items: [
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
  const newInvoice = { ...invoice, id: v4(), number: ++invoiceNumber };
  list.push(newInvoice);
  return newInvoice;
};


export const email = (id) => {
  const invoice = find(id);
  invoice.status = 'sent';
  // Send email
};
