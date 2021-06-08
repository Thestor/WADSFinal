import React, {useState} from 'react'
import {Route, NavLink, HashRouter, useHistory} from "react-router-dom"

import Home from "./Testing/Home";
import Tags from "./Testing/Tags";
import Folders from "./Testing/Folders";
import Settings from "./Testing/Settings";
import { Component } from 'react';


class Dashboard2 extends Component{


    render(){
        return(
            <HashRouter>
                <div className="w-100">
                    <h1>BuqMarq</h1>
                    <ul className="header">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/tags">Tags</NavLink></li>
                        <li><NavLink to="/folders">Folders</NavLink></li>
                        <li><NavLink to="/settings">Settings</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/tags" component={Tags}/>
                        <Route path="/folders" component={Folders}/>
                        <Route path="/settings" component={Settings}/>

                    </div>
                </div>
            </HashRouter>
        );
    };

}

export default Dashboard2;
