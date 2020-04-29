import React, {useState} from 'react';
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
import AxiosWithAuth from './Utils/AxiosWithAuth';

import './App.css';

function App() {
  const userId = localStorage.getItem('userId');
  const [equipments, setEquipments] = useState([]);

  const getEquipList = () => {
    AxiosWithAuth()
      .get(`/api/users/${userId}/equipment`)
      .then(res => {
        console.log(res);
        setEquipments(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

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
          <PrivateRoute exact path='/editForm'>
            <EditEquipment getEquipList={getEquipList}/>
            </PrivateRoute>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
