import React, { useState } from 'react';
import EquipOwnerCard from './EquipmentOwnerCard';
import UserCard from './UserCard';

import AxiosWithAuth from '../Utils/AxiosWithAuth';

function ProfilePage() {
  //---------STATE------------------
  const [user, setUser] = useState();
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
      <div>
        {myEquipments.map(equipment => {
          return <EquipOwnerCard product={equipment} />;
        })}
      </div>
    </div>
  );
}

export default ProfilePage;
