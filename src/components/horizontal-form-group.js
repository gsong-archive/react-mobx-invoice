import React from 'react';

import { Col, ControlLabel, FormGroup } from 'react-bootstrap';


const HorizontalFormGroup = ({
  id, label, formControl, labelCols, inputCols,
}) => (
  <FormGroup controlId={id}>
    <Col componentClass={ControlLabel} sm={labelCols}>
      {label}
    </Col>
    <Col sm={inputCols}>
      {formControl}
    </Col>
  </FormGroup>
);

HorizontalFormGroup.propTypes = {
  id: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  formControl: React.PropTypes.element.isRequired,
  labelCols: React.PropTypes.number.isRequired,
  inputCols: React.PropTypes.number.isRequired,
};

HorizontalFormGroup.defaultProps = {
  labelCols: 2,
  inputCols: 10,
};

export default HorizontalFormGroup;
