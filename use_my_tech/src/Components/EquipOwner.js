import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AxiosWithAuth from '../Utils/AxiosWithAuth';
import { useParams, useHistory } from 'react-router-dom';

//-------- Equipment Initial Values ---------
const equipmentInitialValues = {
  name: '',
  price: '',
  rentalTime: '',
  details: '',
};

function EquipOwner() {
  const userId = localStorage.getItem('userId');

  //----------------STATE-------------------------
  const [equipments, setEquipments] = useState([]);

  const [equipmentValues, setEquipmentValues] = useState(
    equipmentInitialValues
  );

  //-------------BACKEND CALL--------------

  const getEquipList = () =>{
    AxiosWithAuth().get(`/api/users/${userId}/equipment`)
    .then(res =>{
      console.log(res);
      setEquipments(res.data);
    })
    .catch(err =>{
      console.log(err);
    })
  }

    useEffect(() => {
      getEquipList();
    }, [])

  // --------------HANDLERS-----------------
  const handleAddChange = ev => {
    setEquipmentValues({
      ...equipmentValues,
      [ev.target.name]: ev.target.value,
    });
  };

  const handleAddSubmit = ev => {
    ev.preventDefault();
    console.log(equipmentValues);

    AxiosWithAuth()
      .post(`/api/users/${userId}/equipment`, equipmentValues)
      .then(res => {
        console.log('Added Equipment to backend', res);
        getEquipList();
      })
      .catch(err => {
        console.log('Add Equipment Error', err);
      });
  };

  const deleteTech = itemID =>{
    AxiosWithAuth().delete(`/api/users/${userId}/equipment/${itemID}`)
    .then(res => {
      console.log(res);
      getEquipList();
    })
    .catch(err =>{
      console.log(err);
    })
  };


  const onCheckboxChange = ev => {
    setEquipmentValues({
      ...equipmentValues,
      [ev.target.name]: ev.target.checked,
    });
  };
  return (
    <div>


      {/* Add a new Equipment */}
      <form onSubmit={handleAddSubmit}>
        <label htmlFor='equipmentName'>
          <input
            name='name'
            type='text'
            value={equipmentValues.name}
            onChange={handleAddChange}
            placeholder='Equipment Name'
          />
        </label>
        <label htmlFor='price'>
          <input
            name='price'
            type='text'
            value={equipmentValues.price}
            onChange={handleAddChange}
            placeholder='Price'
          />
        </label>

        <label htmlFor='rentalTime'>
          <input
            name='rentalTime'
            type='text'
            value={equipmentValues.rentalTime}
            onChange={handleAddChange}
            placeholder='Renting Time'
          />
        </label>
        <label htmlFor='description'>
          <textarea
            name='details'
            type='text'
            rows='10'
            cols='30'
            value={equipmentValues.details}
            onChange={handleAddChange}
            placeholder='Equipment Description'
          />
        </label>
        <button>Add Equipment</button>
      </form>
      {/* Delete Equipment */}
      <form action=''></form>
    </div>
  );
}

export default EquipOwner;
