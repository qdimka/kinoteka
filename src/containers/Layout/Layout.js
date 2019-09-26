import React from 'react';
import {Container} from 'reactstrap';
import {Route, Switch} from 'react-router-dom';
import classNames from 'classnames';
import {Scrollbars} from 'react-custom-scrollbars';
import {connect} from 'react-redux';
import NavBar from '../../components/NavBar/NavBar';
import Toggle from '../../actions/ui';
import Films from '../Films/Films';
import Serials from '../Serials/Serials';

const mapStateToProps = state => ({isOpen: state.ui.isOpen});

const mapDispatchToProps = (dispatch) => ({
    toggle: (isOpen) => dispatch(Toggle(isOpen))
});

const Layout = ({isOpen, toggle}) => (
    <Container fluid className={classNames('content', {'is-open': isOpen})}>
        <NavBar toggle={() => toggle(isOpen)}/>
        <Scrollbars autoHide>
            <Switch>
                <Route exact path="/popular" component={() => 'Hello'}/>
                <Route exact path="/viewing" component={() => 'Watching now'}/>
                <Route exact path="/films" component={Films}/>
                <Route exact path="/serials" component={Serials}/>
            </Switch>
        </Scrollbars>
    </Container>
);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
