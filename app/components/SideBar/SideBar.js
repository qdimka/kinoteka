import React from 'react';
import { NavItem, NavLink, Nav } from 'reactstrap';
import classNames from 'classnames';
import {Link} from 'react-router-dom';

import './SideBar.css';

const sideBar = props => (
    <div className={classNames('sidebar', {'is-open': true})}>
      <div className="sidebar-header">
        <span color="info" onClick={props.toggle} style={{color: '#fff'}}>&times;</span>
        <h3>Kinoteka</h3>
      </div>
      <div className="side-menu">
        <Nav vertical className="list-unstyled pb-3">
          <NavItem>
            <NavLink tag={Link} to={'/films'}>
              Films
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={'/serials'}>
              Serials
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={'/eps'}>
              Episodes
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={'/popular'}>
              Popular
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </div>
  );

  const submenus = [
    [
      {
        title: "Home 1",
        target: "Home-1"
      },
      {
        title: "Home 2",
        target: "Home-2",
      },
      {
        itle: "Home 3",
        target: "Home-3",
      }
    ],
    [
      {
        title: "Page 1",
        target: "Page-1",
      },
      {
        title: "Page 2",
        target: "Page-2",
      }
    ]
  ]


export default sideBar;
