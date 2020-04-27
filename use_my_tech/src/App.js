import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import RentalPage from './Components/RentalPage';
import Login from './Components/Login';
import SignUp from './Components/Signup';
import Footer from './Components/Footer';

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
          <Route exact path='/' component={Home} />
          <Route exact path='/rentals' component={RentalPage} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
