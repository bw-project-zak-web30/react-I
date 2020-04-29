import React, { useState, useEffect } from 'react';
import AxiosWithAuth from '../Utils/AxiosWithAuth';
import UserCard from './UserCard';
import EquipOwner from './EquipOwner';
import { useHistory } from 'react-router-dom';

import '../styles/profile.css';
import RentedCard from './RentedCard';

function ProfilePage() {
  const history = useHistory();
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

  const deleteProfile = proId => {
    AxiosWithAuth()
      .delete(`/api/users/${userId}`)
      .then(res => {
        console.log(res);
        updateProfile();
        history.push('/login');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className='profile-container'>
      <UserCard details={user} remove={deleteProfile} />
      <EquipOwner />
      <div className='user-renting-contianer'>
        <h3>Equipments You Are Renting</h3>
        <div>
          {rentals.map(rental => {
            return <RentedCard />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
