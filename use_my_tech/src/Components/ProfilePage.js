import React, { useState, useEffect } from 'react';
import AxiosWithAuth from '../Utils/AxiosWithAuth';
import UserCard from './UserCard';
import EquipOwner from './EquipOwner';
import { useHistory } from 'react-router-dom';

import '../styles/profile.css';
import RentedCard from './RentedCard';
import Rentend from './Rentend';

const ProfilePage = props => {
  const history = useHistory();
  //---------STATE------------------
  const [user, setUser] = useState({});
  const userId =parseInt(localStorage.getItem('userId'));
  const [rentals, setRentals] = useState([]);
  //----------BACKEND CALL---------------
  const updateProfile = props => {
    AxiosWithAuth()
      .get(`/api/users/${userId}`)
      .then(res => {
        console.log(res);
        setUser(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    updateProfile();
  }, []);

  const deleteProfile = proId =>{
    console.log("The UserID:",userId);

    AxiosWithAuth().delete(`/api/users/${userId}`)
    .then(res =>{
      console.log(res);
      props.getProfile();
      history.push('/login');
    })
    .catch(err => {
      console.log(err);
    })
  }
const editProfile = proId =>{
    history.push('/profileEdit');
  };
  return (
    <div className='profile-container'>
      <UserCard details={user} remove={deleteProfile} edit={editProfile} />
      <EquipOwner />
      <Rentend />
    </div>
  );
}

export default ProfilePage;
