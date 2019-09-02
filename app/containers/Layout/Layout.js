import React, { useState } from 'react';
import Aux from "../../hoc/_Aux/_Aux";
import { Container } from 'reactstrap';
import { Switch, Route } from 'react-router-dom';
import classNames from 'classnames';

import './Layout.css';

const layout = ( props ) => (
  <Container fluid className={classNames('content', {'is-open': true})}>
    <Switch>
      <Route exact path="/films" component={() => "Films" } />
      <Route exact path="/serials" component={() => "Serials" } />
      <Route exact path="/eps" component={() => "Eps" } />
      <Route exact path="/popular" component={() => "popular" } />
    </Switch>
  </Container>
);

export default layout;
