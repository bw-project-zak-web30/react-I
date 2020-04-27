import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import PrivateRoute from './Components/PrivateRoute';

import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
  <Route to="/Login"><Login/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
