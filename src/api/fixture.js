import { v4 } from 'node-uuid';


let invoiceNumber = 1;

export const list = [
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

  {
    id: v4(),
    number: ++invoiceNumber,
    client: 'Microsoft',
    email: 'bill@microsoft.com',
    dueDate: '2016-06-01T19:00:00.000Z',
    description: 'Windows 95 Retirement Party',
    notes: 'Must be extravagant!',
    status: 'sent',
    items: [
      {
        description: 'Planning',
        unitCost: 80,
        quantity: 200.55,
      },
      {
        description: 'Food',
        unitCost: 10000,
        quantity: 1,
      },
    ],
  },

  {
    id: v4(),
    number: ++invoiceNumber,
    client: 'Facebook',
    email: 'mark@facebook.com',
    dueDate: '2016-07-12T19:00:00.000Z',
    description: 'Facebook Clone Your Life Site',
    notes: 'This will change your life. Forever.',
    status: 'sent',
    items: [
      {
        description: 'Brand strategy',
        unitCost: 150,
        quantity: 145.32,
      },
      {
        description: 'Content writing',
        unitCost: 80,
        quantity: 324.55,
      },
    ],
  },

  {
    id: v4(),
    number: ++invoiceNumber,
    client: 'Amazon',
    email: 'jeff@amazon.com',
    dueDate: '2016-06-12T19:00:00.000Z',
    description: 'Alexa Robot Unveiling',
    notes: 'Your life partner. Forever.',
    status: 'paid',
    items: [
      {
        description: 'Design',
        unitCost: 120,
        quantity: 55.32,
      },
      {
        description: 'Development',
        unitCost: 150,
        quantity: 92.55,
      },
    ],
  },
];

export const invoiceNumberFixture = invoiceNumber;
