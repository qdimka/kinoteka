import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAlignLeft} from '@fortawesome/free-solid-svg-icons';
import {Navbar, Button} from 'reactstrap';

const NavBar = ({toggle}) => (
  <Navbar color="light" light className="navbar shadow-sm p-2 mb-3 bg-white rounded" expand="md">
    <Button outline size="sm" color="info" onClick={toggle}>
      <FontAwesomeIcon icon={faAlignLeft}/>
    </Button>
  </Navbar>
);

export default NavBar;
