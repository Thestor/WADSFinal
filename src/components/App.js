import React from 'react'

import Signup from "./Signup"
import Dashboard from "./Dashboard"
import Dashboard2 from "./Dashboard2"
import LandingPage from "./LandingPage"
import Main from "./Main"
import Login from "./Login"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from './UpdateProfile'


import {Container} from 'react-bootstrap'
import {AuthProvider} from "../contexts/AuthContext"
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

function App() {
  return(
    
    <Container className="d-flex align-items-center justify-content-center" style={{minHeight:"100vh"}}>
      
      <div className="w-100" style={{maxWidth:'400px'}}>
        
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path="/" component={LandingPage}/>
              <PrivateRoute exact path="/dashboard" component={Dashboard2}/>
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path='/forgot-password' component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
    
  )
  
}

export default App;
