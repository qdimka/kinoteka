import React from 'react';
import Label from 'reactstrap/es/Label';
import FormGroup from 'reactstrap/es/FormGroup';
import Input from 'reactstrap/es/Input';

const DropDownFilter = ({ title, options }) => (
  <>
    <Label>{title}</Label>
    <FormGroup>
      <Label for="selected" size="sm">Select</Label>
      <Input type="select" name="select" id="selected" bsSize="sm">
        {options.map(el => (
          <option value={el.value}>{el.label}</option>
        ))}
      </Input>
    </FormGroup>
  </>
);

export default DropDownFilter;