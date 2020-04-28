import React, { useState, useEffect } from 'react';
import axios from 'axios';

//-------- Equipment Initial Values ---------
const equipmentInitialValues = {
  name: '',
  renting: {},
  price: '',
  rentalTime: '',
  details: '',
  // equipmentImage: '',
};

function EquipOwner() {
  //----------------STATE-------------------------
  const [equipments, setEquipments] = useState([]);

  const [equipmentValues, setEquipmentValues] = useState(
    equipmentInitialValues
  );

  //-------------BACKEND CALL--------------

  // --------------HANDLERS-----------------
  const handleAddChange = ev => {
    setEquipmentValues({
      ...equipmentValues,
      [ev.target.name]: ev.target.value,
    });
  };

  const handleAddSubmit = ev => {
    ev.preventDefault();
    axios
      .post('', equipmentValues)
      .then(res => {
        console.log('Added Equipment to backend', res);
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
