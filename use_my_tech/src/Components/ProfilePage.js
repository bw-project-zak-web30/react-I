import React, { useState } from 'react';
import AxiosWithAuth from '../Utils/AxiosWithAuth';
import EquipOwnerCard from './EquipmentOwnerCard';
import UserCard from './UserCard';

function ProfilePage() {
  //---------STATE------------------
  const [user, setUser] = useState({});
  const [myEquipments, setMyEquipments] = useState([]);
  const userId = localStorage.getItem('userId');

  //----------BACKEND CALL---------------
  // AxiosWithAuth()
  //   .get(`/api/users/${userID}/equipment`)
  //   .then(res => {
  //     console.log('Grabbed User Equipment', res.data);
  //   })
  //   .catch(err => {
  //     console.log('Did Not Grab User Equipment', err);
  //   });

  return (
    <div>
      <UserCard details={user} />
      <div className='user-equipment-container'>
        <h2>Here is a list of all the equiments you currently have to rent</h2>
        {myEquipments.map(equipment => {
          return <EquipOwnerCard product={equipment} />;
        })}
      </div>
      <div className='user-renting-contianer'>
        <h2>Here is a list all the equipments you are renting</h2>
      </div>
    </div>
  );
}

export default ProfilePage;
