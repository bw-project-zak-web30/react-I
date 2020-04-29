import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import ProfilePage from './Components/ProfilePage';
import RentalPage from './Components/RentalPage';
import Login from './Components/Login';
import SignUp from './Components/Signup';
import Footer from './Components/Footer';
import PrivateRoute from './Components/PrivateRoute';
import EquipOwner from './Components/EquipOwner';
import EditEquipment from './Components/EditEquipment';

import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          {/* <PrivateRoute exact path='/' component={Home} /> */}
          <PrivateRoute exact path='/rentals' component={RentalPage} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={SignUp} />
          {/* <Route exact path='/myequipment' component={EquipOwner} /> */}
          <PrivateRoute exact path='/myequipment' component={ProfilePage} />
          <PrivateRoute exact path='/editForm' component={EditEquipment} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
