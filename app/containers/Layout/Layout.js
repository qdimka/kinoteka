import React from 'react';
import Aux from "../../hoc/_Aux/_Aux";
import NavBar from './../../components/NavBar/NavBar';

const layout = ( props ) => (
    <Aux>
        <NavBar />
        <main>{props.children}</main>
    </Aux>
);

export default layout;