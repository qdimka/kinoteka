import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faListAlt } from '@fortawesome/free-solid-svg-icons';
import { NavItem, NavLink, Nav } from 'reactstrap';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import { connect } from 'react-redux';
import Ui from '../../actions/ui';

const mapStateToProps = state => ({ isOpen: state.ui.isOpen });

const mapDispatchToProps = (dispatch) => ({
  toggle: (isOpen) => dispatch(Ui.Toggle(isOpen))
});

const SideBar = props => (
  <div className={classNames('sidebar', { 'is-open': props.isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={() => props.toggle(props.isOpen)} style={{ color: '#fff' }}>&times;</span>
      <h3>Kinoteka</h3>
    </div>
    <Scrollbars autoHide className='side-menu'>
      <Nav vertical className="list-unstyled pb-3">
        {/*<NavItem>*/}
        {/*    <NavLink tag={Link} to="/popular">*/}
        {/*        <FontAwesomeIcon icon={faVideo} className="mr-2"/>Popular*/}
        {/*    </NavLink>*/}
        {/*</NavItem>*/}
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

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
