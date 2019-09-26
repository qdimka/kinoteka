import React from 'react';
import './App.global.css';
import Layout from './templates/Layout/Layout';
import TitleBar from 'frameless-titlebar';
import Router from 'react-router-dom/es/Router';


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
        <Layout/>
      </div>
    </div>
  </Router>
);

export default App;
