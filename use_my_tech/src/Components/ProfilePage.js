import React, { useState, useEffect } from 'react';
import AxiosWithAuth from '../Utils/AxiosWithAuth';
import UserCard from './UserCard';
import EquipOwner from './EquipOwner';

import '../styles/profile.css';

function ProfilePage() {
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
  })

  return (
    <div className='profile-container'>
      <UserCard details={user} />
      <EquipOwner />
    </div>
  );
}

export default ProfilePage;
