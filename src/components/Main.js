import React, { Component } from "react";
import { Route, NavLink, HashRouter} from "react-router-dom";
import Home from "./Home";
import Tags from "./Tags";
import Folders from "./Folders";
import Settings from "./Settings";


class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div className='w-100'>
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
  }
}
 
export default Main;