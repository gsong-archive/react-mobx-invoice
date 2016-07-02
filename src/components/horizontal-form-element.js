import React from 'react';

import { FormControl } from 'react-bootstrap';

import HorizontalFormGroup from './horizontal-form-group';


const HorizontalFormElement = ({
  id, label, type, componentClass, placeholder, value, onChange, labelCols,
  inputCols,
}) => (
  <HorizontalFormGroup
    id={id}
    label={label}
    labelCols={labelCols}
    inputCols={inputCols}
    formControl={
      <FormControl
        type={type}
        componentClass={componentClass}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    }
  />
);

HorizontalFormElement.propTypes = {
  id: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  type: React.PropTypes.string,
  componentClass: React.PropTypes.string,
  placeholder: React.PropTypes.string.isRequired,
  value: React.PropTypes.any.isRequired,
  onChange: React.PropTypes.func.isRequired,
  labelCols: React.PropTypes.number.isRequired,
  inputCols: React.PropTypes.number.isRequired,
};

HorizontalFormElement.defaultProps = {
  type: 'text',
  labelCols: 2,
  inputCols: 10,
};

export default HorizontalFormElement;
