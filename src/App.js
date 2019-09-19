import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import SideBar from "./components/SideBar/SideBar";

const App = () => {
    const [isOpen, setOpen] = useState(true);
    const toggle = () => setOpen(!isOpen);

    return (
        <Router>
            <div className="App wrapper">
                <SideBar toggle={toggle} isOpen={isOpen}/>
                <Layout toggle={toggle} isOpen={isOpen}/>
            </div>
        </Router>
    );
};

export default App;
