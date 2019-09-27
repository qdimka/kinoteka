import React, { useState } from 'react';
import filters from './data';
import { Button, Navbar } from 'reactstrap';
import DropdownItem from 'reactstrap/lib/DropdownItem';
import DropdownMenu from 'reactstrap/lib/DropdownMenu';
import DropdownToggle from 'reactstrap/lib/DropdownToggle';
import UncontrolledDropdown from 'reactstrap/lib/UncontrolledDropdown';
import NavItem from 'reactstrap/es/NavItem';
import Nav from 'reactstrap/lib/Nav';
import Collapse from 'reactstrap/lib/Collapse';
import NavbarToggler from 'reactstrap/lib/NavbarToggler';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft, faFilter } from '@fortawesome/free-solid-svg-icons';
import NavLink from 'reactstrap/es/NavLink';
import NavbarBrand from 'reactstrap/es/NavbarBrand';
import RangeFilter from './RangeFilter';
import Form from 'reactstrap/es/Form';
import FormGroup from 'reactstrap/es/FormGroup';
import Label from 'reactstrap/es/Label';

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
            <RangeFilter/>
          </Form>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Filters;