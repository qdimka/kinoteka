import React from 'react';
import Label from 'reactstrap/es/Label';
import FormGroup from 'reactstrap/es/FormGroup';
import Input from 'reactstrap/es/Input';

const SearchFilter = ({title }) => (
  <>
    <FormGroup>
      <Label for="query" size="sm">{title}</Label>
      <Input type="text" name="select" id="query" bsSize="sm"/>
    </FormGroup>
  </>
);

export default SearchFilter;