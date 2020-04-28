import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AxiosWithAuth from '../Utils/AxiosWithAuth';
import { useParams, useHistory } from 'react-router-dom';

//-------- Equipment Initial Values ---------
const equipmentInitialValues = {
  name: '',
  renting: false,
  price: '',
  rentalTime: '',
  details: '',
  // equipmentImage: '',
};

function EquipOwner() {
  const { id } = useParams();
  //----------------STATE-------------------------
  const [equipments, setEquipments] = useState([]);

  const [equipmentValues, setEquipmentValues] = useState(
    equipmentInitialValues
  );

  //-------------BACKEND CALL--------------
  const getEquipList = () => {
    AxiosWithAuth()
      .get(`/api/users/${id}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    getEquipList();
  }, []);

  // --------------HANDLERS-----------------
  const handleAddChange = ev => {
    setEquipmentValues({
      ...equipmentValues,
      [ev.target.name]: ev.target.value,
    });
  };

  const handleAddSubmit = ev => {
    ev.preventDefault();
    AxiosWithAuth()
      .post(`/api/users/${id}`, equipmentValues)
      .then(res => {
        console.log('Added Equipment to backend', res);
        getEquipList();
      })
      .catch(err => {
        console.log('Add Equipment Error', err);
      });
  };

  const onCheckboxChange = ev => {
    setEquipmentValues({
      ...equipmentValues,
      [ev.target.name]: ev.target.checked,
    });
  };

  const deleteTech = itemID => {
    AxiosWithAuth()
      .delete(`/api/users/${id}/rentals/equipment${itemID}`)
      .then(res => {
        console.log(res);
        getEquipList();
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div>
      {/* Add a new Equipment */}
      <form onSubmit={handleAddSubmit}>
        <label htmlFor='equipmentName'>
          <input
            name='equipmentName'
            type='text'
            value={equipmentValues.equipmentName}
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

        <label>
          <input
            checked={equipmentValues.renting}
            onChange={onCheckboxChange}
            name='renting'
            type='checkbox'
          />{' '}
          Renting
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
            name='description'
            type='text'
            rows='10'
            cols='30'
            value={equipmentValues.description}
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
