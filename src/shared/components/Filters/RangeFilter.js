import React from 'react';
import NavItem from 'reactstrap/es/NavItem';
import Label from 'reactstrap/es/Label';
import Input from 'reactstrap/es/Input';

const RangeFilter = ({title}) => (
  <NavItem>
    <div className='filter-header'>{title}</div>
    <Label>From</Label>
    <Input type="select" name="select" id="exampleSelect">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Input>
    <Label>To</Label>
    <Input type="select" name="select" id="exampleSelect">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Input>
  </NavItem>
);

export default RangeFilter;