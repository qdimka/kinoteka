import React from 'react';
import './App.global.css';
import TitleBar from 'frameless-titlebar';
import {BrowserRouter as Router} from 'react-router-dom';
import LayoutContainer from './modules/Layout/LayoutContainer';


const App = ({ isOpen, toggle }) => (
  <Router>
    <div>
      <TitleBar
        title="Kinoteka"
        theme={{
          barTheme: 'light',
          barBackgroundColor: '#eaeaea',
          menuHighlightColor: '#33c151',
          menuDimItems: false
        }}/>
      <div className="App wrapper">
        <LayoutContainer/>
      </div>
    </div>
  </Router>
);

export default App;
