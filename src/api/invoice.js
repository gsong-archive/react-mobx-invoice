import { v4 } from 'node-uuid';


// status can be: draft, sent, partial, paid, overdue
const invoices = [
  {
    id: v4(),
    name: 'Acme Co.',
    email: 'acme@acme.co',
    invoiceDate: '2016-06-26',
    dueDate: '2016-06-27',
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


export const getInvoices = () => invoices;


export const getInvoice = (id) => (
  invoices.filter((invoice) => invoice.id === id)[0]
);


export const addInvoice = (invoice) => invoices.push({ ...invoice, id: v4() });


export const emailInvoice = (id) => {
  const invoice = getInvoices(id);
  invoice.status = 'sent';
  console.log(`Email invoice ${id} to ${invoice.name}`);
};
