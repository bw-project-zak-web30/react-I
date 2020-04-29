import React, { useState, useEffect } from 'react';
import RentalCard from './RentalCard';
import AxiosWithAuth from '../Utils/AxiosWithAuth';

function RentalPage() {
  const userId = localStorage.getItem('userId');

  const today = new Date().toISOString();

  const returnRent = theDate =>{
    console.log(theDate);

    let newDay = new Date();
    newDay.setDate(newDay.getDate() + theDate);
    let dateString = newDay.toISOString();
    let returnDay = dateString.slice(0,10);
    return returnDay;
    
  }
  //--------------------State--------------------
  const [rentals, setRentals] = useState([]);

  const [itemRent, setItemRent] = useState(
    {
      return_date: '',
      start_date: today.slice(0,10),
      details: rentals.details,
      renter_id: parseInt(userId),
      owner_id: rentals.owner_id,
      equipment_id: rentals.id
    }
  )

    console.log(itemRent);
  //-------------------Backend Call--------------
  useEffect(() => {
    getRentals();
  }, []);
  
  const getRentals = () =>{
    AxiosWithAuth()
      .get('/api/equipment')
      .then(res => {
        console.log('Grabbed all the equipments', res.data);
        setRentals(res.data);
      })
      .catch(err => {
        console.log('Could not grab the equipments', err);
      });
  }


  const rentNow = (item) => {
    setItemRent({
      ...itemRent,
      return_date:returnRent(item.timeframe),
      details:item.details,
      owner_id:item.owner_id,
      equipment_id:item.id
    });

    console.log(itemRent);

    AxiosWithAuth().post(`/api/equipment`, itemRent)
    .then(res =>{
      console.log(res);
      getRentals();
    })
    .catch(err =>{
      console.log(err);
    })
  }


  return (
    <div>
      <h1>I am the Rental page here will show all the equipments for rental</h1>
      {rentals.map(rental => {
        return <RentalCard key={rental.id} product={rental} rentNow={rentNow} />;
      })}
    </div>
  );
}

export default RentalPage;
