import React from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import SideBar from "./components/SideBar/SideBar";

const App = () => {
    return (
        <Router>
            <div className="App wrapper">
                <SideBar />
                <Layout />
            </div>
        </Router>
    );
};

export default App;
