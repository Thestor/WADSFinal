import React from 'react'

import Signup from "./Signup"
import Dashboard from "./Dashboard"
import Dashboard2 from "./Dashboard2"
import LandingPage from "./LandingPage"
import Main from "./Main"
import Login from "./Login"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from './UpdateProfile'


import {AuthProvider} from "../contexts/AuthContext"
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'


function App() {
  return(
    
  
      
      <div>
        
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path="/" component={LandingPage}/>
              <PrivateRoute path="/dashboard" component={Dashboard2}/>
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path='/forgot-password' component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>

    
  )
  
}

export default App;
