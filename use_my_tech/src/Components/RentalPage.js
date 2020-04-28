import React, { useState, useEffect } from 'react';
import RentalCard from './RentalCard';
import AxiosWithAuth from '../Utils/AxiosWithAuth';

function RentalPage() {
  //--------------------State--------------------
  const [rentals, setRentals] = useState([]);

  //-------------------Backend Call--------------
  useEffect(() => {
    AxiosWithAuth()
      .get('/api/equipment')
      .then(res => {
        console.log('Grabbed all the equipments', res.data);
        setRentals(res.data);
      })
      .catch(err => {
        console.log('Could not grab the equipments', err);
      });
  }, []);

  //--------------Handlers-----------------
  const onRentClick = evt => {
    //In here will be a axios PUT to make the the current equipment to become rented
    console.log('I haven been clicked', evt);
  };

  return (
    <div>
      <h1>I am the Rental page here will show all the equipments for rental</h1>
      {rentals.map(rental => {
        return (
          <RentalCard
            key={rental.id}
            product={rental}
            onRentClick={onRentClick}
          />
        );
      })}
    </div>
  );
}

export default RentalPage;
