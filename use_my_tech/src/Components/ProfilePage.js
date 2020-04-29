import React, { useState } from 'react';
import AxiosWithAuth from '../Utils/AxiosWithAuth';
import UserCard from './UserCard';
import EquipOwner from './EquipOwner';

import '../styles/profile.css';

function ProfilePage() {
  //---------STATE------------------
  const [user, setUser] = useState({});
  const [myEquipments, setMyEquipments] = useState([]);
  const userId = localStorage.getItem('userId');

  //----------BACKEND CALL---------------

  return (
    <div className='profile-container'>
      <UserCard details={user} />
      <EquipOwner />
    </div>
  );
}

export default ProfilePage;
