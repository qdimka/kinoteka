import React from 'react';
import NavItem from 'reactstrap/es/NavItem';
import Label from 'reactstrap/es/Label';
import Input from 'reactstrap/es/Input';
import FormGroup from 'reactstrap/es/FormGroup';
import FormText from 'reactstrap/es/FormText';

const RangeFilter = ({ title }) => (
  <>
    <FormText>
      {title}
    </FormText>
    <FormGroup>
      <Label for="to">From</Label>
      <Input type="select" name="select" id="to">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Input>
    </FormGroup>
    <FormGroup>
      <Label for="to">To</Label>
      <Input type="select" name="select" id="to">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Input>
    </FormGroup>
  </>
);

export default RangeFilter;