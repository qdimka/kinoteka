import React, { useState } from 'react';
import filters from './data';
import { Button, Navbar } from 'reactstrap';
import Nav from 'reactstrap/lib/Nav';
import Collapse from 'reactstrap/lib/Collapse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import NavbarBrand from 'reactstrap/es/NavbarBrand';
import RangeFilter from './RangeFilter';
import Form from 'reactstrap/es/Form';

const Filters = ({ data }) => {
  data = filters;

  const [isOpen, setOpen] = useState(false);

  return (
    <Navbar color="light" light fixed={'sticky-top'} className="navbar shadow-sm p-2 mb-3 bg-white rounded">
      <Button outline size="sm" color="info" onClick={() => setOpen(!isOpen)}>
        <FontAwesomeIcon icon={faFilter}/>
      </Button>
      <NavbarBrand>Filters</NavbarBrand>
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <Form>
            <RangeFilter title={"Title"}/>
          </Form>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Filters;