import React, { useState, useEffect } from 'react';
import RentalCard from './RentalCard';
import AxiosWithAuth from '../Utils/AxiosWithAuth';
import Search from './Search';

//------REACTSTRAP---------------
import { Spinner } from 'reactstrap';

function RentalPage() {
  //--------------------State--------------------
  const [rentals, setRentals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  //-------------------Backend Call--------------
  const getUserEquipment = () => {
    AxiosWithAuth()
      .get('/api/equipment')
      .then(res => {
        console.log('Grabbed all the equipments', res.data);
        setRentals(res.data);
      })
      .catch(err => {
        console.log('Could not grab the equipments', err);
      });
  };

  useEffect(() => {
    getUserEquipment();
  }, []);

  //--------------Handlers-----------------
  const onRentClick = evt => {
    //In here will be a axios PUT to make the the current equipment to become rented
    console.log('I haven been clicked', evt);
  };

  const searchChangeHandler = evt => {
    setSearchTerm(evt.target.value);
  };

  //------------------Search filters--------------------------
  const filterRentals = rentals.filter(rental => {
    return rental.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  //----------------LOADING---------------------
  if (!rentals.length) {
    return (
      <div className='spinner-container'>
        <Spinner
          className='spinner-movement'
          style={{ width: '3rem', height: '3rem' }}
        />
      </div>
    );
  }

  return (
    <div>
      <div className='search-container'>
        <Search searchChangeHandler={searchChangeHandler} />
      </div>
      <div className='rentals-container'>
        {filterRentals.map(rental => {
          return (
            <RentalCard
              key={rental.id}
              product={rental}
              onRentClick={onRentClick}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RentalPage;
