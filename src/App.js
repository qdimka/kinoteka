import React from 'react';
import './App.global.css';
import {BrowserRouter as Router} from 'react-router-dom';
import TitleBar from 'frameless-titlebar';
import Layout from './containers/Layout/Layout';
import SideBar from './components/SideBar/SideBar';

const App = () => (
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
                <SideBar/>
                <Layout/>
            </div>
        </div>
    </Router>
);

export default App;
