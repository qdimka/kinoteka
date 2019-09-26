import React from 'react';
import { Container } from 'reactstrap';
import { Route, Switch } from 'react-router-dom';
import classNames from 'classnames';
import { Scrollbars } from 'react-custom-scrollbars';
import SideBar from '../../shared/components/SideBar/SideBar';
import NavBar from '../../shared/components/NavBar/NavBar';
import FilmsContainer from '../../routes/Films/FilmsContainer';
import SerialsContainer from '../../routes/Serials/SerialsContainer';
import Ui from '../../shared/actions/ui';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ isOpen: state.ui.isOpen });

const mapDispatchToProps = (dispatch) => ({
  toggle: (isOpen) => dispatch(Ui.Toggle(isOpen))
});

const Layout = ({ isOpen, toggle }) => (
  <>
    <SideBar/>
    <Container fluid className={classNames('content', { 'is-open': isOpen })}>
      <NavBar toggle={() => toggle(isOpen)}/>
      <Scrollbars autoHide>
        <Switch>
          <Route exact path="/films" component={FilmsContainer}/>
          <Route exact path="/serials" component={SerialsContainer}/>
        </Switch>
      </Scrollbars>
    </Container>
  </>
);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);