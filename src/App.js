import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Signup from './components/auth/Signup';
import Signed from './components/auth/Signed';
import Nomatch from './components/pages/Nomatch';
import ContactUs from './components/pages/ContactUs';
import ProjectList from './components/projects/ProjectList';
import Chatapp from './components/pages/Chatapp'; 

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar/>
          <Switch>
            <Route path="/message" component={Chatapp}/>
            <Route path="/dashboard" component={ProjectList}/>
            <Route path="/signin" component={Signed}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/contact" component={ContactUs}/>
            <Route component={Nomatch}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
