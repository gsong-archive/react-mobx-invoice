import React from 'react';
import { observer } from 'mobx-react';

import { Col, Grid, Panel, Row, Table } from 'react-bootstrap';


const InvoiceDisplay = ({ invoice }) => {
  const invoiceNumber = (
    invoice.number ? `Invoice #${invoice.number}` : 'New Invoice'
  );

  return (
    <div>
      <Panel
        header={`${invoice.client} ${invoiceNumber}`}
        bsStyle="primary"
      >
        <Grid>
          <Row>
            <Col xs={3}>
              <dl>
                <dt>Due Date</dt>
                <dd>{invoice.displayDueDate}</dd>
                <dt>Status</dt>
                <dd>{invoice.status}</dd>
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
                    <th>Item</th>
                    <th>Rate/Unit Cost</th>
                    <th>Hours/Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>

                <tfoot>
                  <tr>
                    <td colSpan="3" style={{ textAlign: 'right' }}>
                      Balance Due:
                    </td>
                    <td>${invoice.total}</td>
                  </tr>
                </tfoot>

                <tbody>
                  {invoice.items.map((item, i) => (
                    <tr key={`${invoice.id}-${i}`}>
                      <td>{item.description}</td>
                      <td>${item.unitCost.toFixed(2)}</td>
                      <td>{item.quantity}</td>
                      <td>${(item.unitCost * item.quantity).toFixed(2)}</td>
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
