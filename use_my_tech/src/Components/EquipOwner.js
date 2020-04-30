import React, { useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useHistory } from 'react-router-dom';
import {connect} from 'react-redux';
import AxiosWithAuth from '../Utils/AxiosWithAuth';
import EquipmentOwnerCard from './EquipmentOwnerCard';
import AddEquipment from './AddEquipment';

//-------MATERIAL UI IMPORTS---------
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { Input } from 'reactstrap';
import EditEquipment from './EditEquipment';

//-------- Equipment Initial Values ---------
const userId =parseInt(localStorage.getItem('userId'));
console.log(userId);

const equipmentInitialValues = {
  owner_id:userId,
  name: '',
  price: parseInt(''),
  timeframe: parseInt(''),
  details: '',
};

const EquipOwner = props => {
  const history = useHistory();
  const [id, setId] = useLocalStorage('itemId');

  //----------------STATE-------------------------
  const [equipments, setEquipments] = useState([]);

  const [equipmentValues, setEquipmentValues] = useState(
    equipmentInitialValues
  );

  //-------------BACKEND CALL--------------
  const getEquipList = () => {
    AxiosWithAuth()
      .get(`/api/users/${userId}/equipment`)
      .then(res => {
        console.log(res);
        setEquipments(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getEquipList();
  }, []);
  // --------------HANDLERS-----------------

  const deleteTech = itemID => {
    AxiosWithAuth()
      .delete(`/api/users/${userId}/equipment/${itemID}`)
      .then(res => {
        console.log(res);
        getEquipList();
      })
      .catch(err => {
        console.log(err);
      });
  };

  const editItem = itemID => {
    setId(itemID);
    history.push('/editForm');
  };

  const onCheckboxChange = ev => {
    setEquipmentValues({
      ...equipmentValues,
      [ev.target.name]: ev.target.checked,
    });
  };

  //----------MATERIAL UI STYLES ------

  return (
    <div className='main-equipment-container'>
      <AddEquipment getEquipList={getEquipList}/>
      <div className='user-equipment-container'>
        <h3>Your Equipments</h3>
        <div className='card-holder'>
          {equipments.map(equipment => {
            return (
              <EquipmentOwnerCard
                key={equipment.id}
                product={equipment}
                remove={deleteTech}
                edit={editItem}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default EquipOwner;
