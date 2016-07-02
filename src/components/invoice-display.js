import React from 'react';
import { observer } from 'mobx-react';

import { Col, Grid, Panel, Row, Table } from 'react-bootstrap';

import InvoiceStatusLabel from './invoice-status-label';


const InvoiceDisplay = ({ invoice }) => {
  const invoiceNumber = (
    invoice.number ? `Invoice #${invoice.number}` : 'New Invoice'
  );

  // TODO: Refactor into smaller components
  // TODO: Need to be able to delete each invoice item
  return (
    <div>
      <Panel
        header={
          <span>
            <InvoiceStatusLabel invoice={invoice} />
            {' '}
            {invoice.client} {invoiceNumber}
          </span>
        }
        bsStyle="primary"
      >
        <Grid>
          <Row>
            <Col xs={3}>
              <dl>
                <dt>Due Date</dt>
                <dd>{invoice.displayDueDate}</dd>
                <dt>Email</dt>
                <dd>{invoice.email}</dd>
                <dt>Description</dt>
                <dd>{invoice.description}</dd>
                <dt>Notes</dt>
                <dd>{invoice.notes}</dd>
              </dl>
            </Col>

            <Col xs={8}>
              <Table>
                <thead>
                  <tr>
                    <th style={{ width: '50%' }}>Item</th>
                    <th style={{ textAlign: 'right' }}>Rate/Unit Cost</th>
                    <th style={{ textAlign: 'right' }}>Hours/Quantity</th>
                    <th style={{ textAlign: 'right' }}>Total</th>
                  </tr>
                </thead>

                <tfoot>
                  <tr style={{ textAlign: 'right' }}>
                    <td colSpan="3">
                      Balance Due:
                    </td>
                    <td>
                      ${invoice.total}
                    </td>
                  </tr>
                </tfoot>

                <tbody>
                  {invoice.items.map((item, i) => (
                    <tr key={`${invoice.id}-${i}`}>
                      <td>{item.description}</td>
                      <td style={{ textAlign: 'right' }}>
                        ${item.unitCost.toFixed(2)}
                      </td>
                      <td style={{ textAlign: 'right' }}>{item.quantity}</td>
                      <td style={{ textAlign: 'right' }}>
                        ${(item.unitCost * item.quantity).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Grid>
      </Panel>
    </div>
  );
};

InvoiceDisplay.propTypes = {
  invoice: React.PropTypes.object.isRequired,
};

export default observer(InvoiceDisplay);
