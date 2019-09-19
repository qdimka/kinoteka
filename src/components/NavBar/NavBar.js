import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAlignLeft} from '@fortawesome/free-solid-svg-icons';
import {Navbar, Button} from 'reactstrap';

const NavBar = props => {
    return (
        <Navbar color="light" light className="navbar shadow-sm p-3 mb-5 bg-white rounded" expand="md">
            <Button outline color="info" onClick={props.toggle}>
                <FontAwesomeIcon icon={faAlignLeft}/>
            </Button>
        </Navbar>
    );
}

export default NavBar;
