import React from 'react';
import Label from 'reactstrap/es/Label';
import Input from 'reactstrap/es/Input';
import FormGroup from 'reactstrap/es/FormGroup';
import Col from 'reactstrap/lib/Col';
import Row from 'reactstrap/lib/Row';

const RangeFilter = ({ title, placeHolderFrom, placeHolderTo, from, to }) => (
  <>
    <Label size="sm">{title}</Label>
    <Row form>
      <Col md={6}>
        <FormGroup>
          <Label for="from" size="sm" hidden>From</Label>
          <Input type="select" name="select" id="from" bsSize="sm">
            <option value="-1">{placeHolderFrom}</option>
            {from.map(el => (
              <option value={el.value}>{el.label}</option>
            ))}
          </Input>
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <Label for="to" size="sm" hidden>To</Label>
          <Input type="select" name="select" id="to" bsSize="sm">
            <option value="-1">{placeHolderTo}</option>
            {to.map(el => (
              <option value={el.value}>{el.label}</option>
            ))}
          </Input>
        </FormGroup>
      </Col>
    </Row>
  </>
);

export default RangeFilter;