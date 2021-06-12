import React, {useState} from 'react'
import {Route, NavLink, HashRouter, useHistory} from "react-router-dom"

import Home from "./Home";
import Tags from "./Tags";
import Folders from "./Folders";
import Settings from "./Settings";
import { Component } from 'react';
import "./Dashboard2.css"
import UpdateProfile from "./UpdateProfile";


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
                        <Route path="/update-profile" component={UpdateProfile}/>

                    </div>
                </div>
            </HashRouter>
        );
    };

}

export default Dashboard2;
