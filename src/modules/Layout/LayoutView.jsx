import React from 'react';
import { Container } from 'reactstrap';
import { Route, Switch } from 'react-router-dom';
import classNames from 'classnames';
import SideBar from '../../shared/components/SideBar/SideBar';
import FilmsContainer from '../../modules/Films/FilmsContainer';
import SerialsContainer from '../../modules/Serials/SerialsContainer';

const LayoutView = ({ isOpen, toggle }) => (
  <>
    <SideBar isOpen={isOpen} toggle={() => toggle(isOpen)}/>
    <Container fluid className={classNames('content', { 'is-open': isOpen })}>
        <Switch>
          <Route path="/films" component={FilmsContainer} />
          <Route path="/serials" component={SerialsContainer}/>
        </Switch>
    </Container>
  </>
);

export default LayoutView;