import React, { useState, useEffect } from 'react';
import AxiosWithAuth from '../Utils/AxiosWithAuth';
import UserCard from './UserCard';
import EquipOwner from './EquipOwner';
import RentedCard from './RentedCard';

import '../styles/profile.css';

function ProfilePage() {
  //---------STATE------------------
  const [user, setUser] = useState({});
  const userId = localStorage.getItem('userId');

  const [rentals, setRentals] = useState([]);

  //----------BACKEND CALL---------------

  const updateProfile = () => {
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
  });

  const getRentedItems = () => {
    AxiosWithAuth()
      .get(`/api/users/${userId}/rentals`)
      .then(res => {
        console.log('I got the items im renting', res.data);
        setRentals(res.data);
      })
      .catch(err => {
        console.log('Did not get the items i am renting', err);
      });
  };

  useEffect(() => {
    getRentedItems();
  }, []);

  return (
    <div className='profile-container'>
      <UserCard details={user} />
      <EquipOwner />
      <div className='user-renting-contianer'>
        <h3>Equipments You Are Renting</h3>
        <div>
          {rentals.map(rental => {
            return <RentedCard key={rental.id} product={rental} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
