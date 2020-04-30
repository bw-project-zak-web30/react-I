import React, { useState, useEffect } from 'react';
import AxiosWithAuth from '../Utils/AxiosWithAuth';
import UserCard from './UserCard';
import EquipOwner from './EquipOwner';
import {useHistory} from 'react-router-dom';

import '../styles/profile.css';

function ProfilePage() {
  const history = useHistory();
  //---------STATE------------------
  const [user, setUser] = useState({});
  const userId = localStorage.getItem('userId');

  //----------BACKEND CALL---------------

  const updateProfile = () =>{
    AxiosWithAuth().get(`/api/users/${userId}`)
    .then(res => {
      console.log(res);
      setUser(res.data);
    })
    .catch(err =>{
      console.log(err);
    })
  }

  useEffect(() =>{
    updateProfile();
  }, [])

  const deleteProfile = proId =>{
    AxiosWithAuth().delete(`/api/users/${userId}`)
    .then(res =>{
      console.log(res);
      updateProfile();
      history.push('/login');
    })
    .catch(err => {
      console.log(err);
    })
  }
const editProfile = proId =>{
    history.push('/profileEdit');
  }
  return (
    <div className='profile-container'>
      <UserCard details={user} remove={deleteProfile} edit={editProfile}/>
      <EquipOwner />
    </div>
  );
}

export default ProfilePage;
