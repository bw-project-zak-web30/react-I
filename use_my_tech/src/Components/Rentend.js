import React, { useState, useEffect } from 'react';
import RentedCard from './RentedCard';
import AxiosWithAuth from '../Utils/AxiosWithAuth';

function Rentend() {
  const userId = localStorage.getItem('userId');
  //-----------State------------------
  const [rentals, setRentals] = useState([]);

  //----------------Backend call-----------------
  const getRentals = () => {
    AxiosWithAuth()
      .get(`/api/users/${userId}/renting`)
      .then(res => {
        console.log('Got the rentals', res.data);
        setRentals(res.data);
      })
      .catch(err => {
        console.log('Error grabbing rentals', err);
      });
  };

  useEffect(() => {
    getRentals();
  }, []);

  return (
    <div className='main-rented-container'>
      <h3>Equipments You Are Renting</h3>
      <div className='user-renting-contianer'>
        {rentals.map(rental => {
          return <RentedCard key={rental.id} product={rental} />;
        })}
      </div>
    </div>
  );
}

export default Rentend;
