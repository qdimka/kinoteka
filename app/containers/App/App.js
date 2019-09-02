import React, { Component } from 'react';
import Layout from './../Layout/Layout';
import aux from '../../hoc/_Aux/_Aux';
import TitleBar from 'frameless-titlebar';
import buildMenu from '../../menu';
import icon from '../../../resources/icon.png';
import SideBar from '../../components/SideBar/SideBar';
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
    render(){
        return (
          <Router>
            <div>
                <TitleBar
                  icon={icon}
                  title="Kinoteka"
                  menu={buildMenu()}
                  theme={{
                    barTheme: 'light',
                    barBackgroundColor: '#eaeaea',
                    menuHighlightColor: '#33c151',
                    menuDimItems: false
                  }}/>
                <div className="App">
                  <SideBar />
                  <Layout />
                </div>
            </div>
          </Router>
        );
    }
}

export default App;
