import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faListAlt } from '@fortawesome/free-solid-svg-icons';
import { NavItem, NavLink, Nav } from 'reactstrap';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';

const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames('sidebar', { 'is-open': isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={() => toggle(isOpen)} style={{ color: '#fff' }}>&times;</span>
      <h3>Kinoteka</h3>
    </div>
    <Scrollbars autoHide className='side-menu'>
      <Nav vertical className="list-unstyled pb-3">
        <NavItem>
          <NavLink tag={Link} to="/films">
            <FontAwesomeIcon icon={faFilm} className="mr-2"/>Films
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/serials">
            <FontAwesomeIcon icon={faListAlt} className="mr-2"/>Serials
          </NavLink>
        </NavItem>
      </Nav>
    </Scrollbars>
  </div>
);

export default SideBar;
