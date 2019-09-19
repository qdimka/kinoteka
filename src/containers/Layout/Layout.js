import React from 'react';
import {Container} from "reactstrap";
import {Route, Switch} from "react-router-dom";
import classNames from 'classnames';
import NavBar from '../../components/NavBar/NavBar';
import {Scrollbars} from 'react-custom-scrollbars';
import {Toggle} from "../../actions/toggle";
import {connect} from "react-redux";
import Films from "../Films/Films";

const mapStateToProps = state => {
    return {isOpen: state.ui.isOpen};
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggle: (isOpen) => dispatch(Toggle(isOpen))
    };
};

const Layout = props => (
    <Container fluid className={classNames('content', {'is-open': props.isOpen})}>
        <NavBar toggle={() => props.toggle(props.isOpen)}/>
        <Scrollbars autoHide>
            <Switch>
                <Route exact path="/popular" component={() => "Hello"}/>
                <Route exact path="/films" component={Films}/>
                <Route exact path="/serials" component={() => "Pages"}/>
            </Switch>
        </Scrollbars>
    </Container>
);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);