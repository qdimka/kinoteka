import React, { useState } from 'react';
import filters from './data';
import { Button, Navbar } from 'reactstrap';
import Nav from 'reactstrap/lib/Nav';
import Collapse from 'reactstrap/lib/Collapse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import NavbarBrand from 'reactstrap/es/NavbarBrand';
import RangeFilter from './RangeFilter/RangeFilter';
import Form from 'reactstrap/es/Form';
import DropDownFilter from './DropDownFilter/DropDownFilter';
import SearchFilter from './SearchFilter/SearchFilter';

const Filters = ({ data, onSubmit }) => {
  data = filters;

  const [isOpen, setOpen] = useState(false);
  let filtersValues = data
    .filters
    .map(mapDataToFilter);

  return (
    <Navbar color="light" light fixed={'sticky-top'} className="navbar shadow-sm p-2 mb-3 bg-white rounded">
      <Button outline size="sm" color="info" onClick={() => setOpen(!isOpen)}>
        <FontAwesomeIcon icon={faFilter}/>
      </Button>
      <NavbarBrand>Filters</NavbarBrand>
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <Form>
            {filtersValues}
            <Button onClick={onSubmit}>Submit</Button>
          </Form>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

const mapDataToFilter = (data) => {
  switch (data.type) {
    case 'select':
      return (<DropDownFilter title={data.title} options={data.values}/>);
    case 'range':
      return (<RangeFilter title={data.title}
                           placeHolderFrom={data.placeHolderFrom}
                           placeHolderTo={data.placeHolderTo}
                           from={data.from}
                           to={data.to}/>);
    case 'search':
      return (<SearchFilter title={data.title}/>);
    default:
      return null;
  }
};

export default Filters;