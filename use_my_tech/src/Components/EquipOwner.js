import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import AxiosWithAuth from '../Utils/AxiosWithAuth';
import EquipmentOwnerCard from './EquipmentOwnerCard';

//-------MATERIAL UI IMPORTS---------
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { Input } from 'reactstrap';
import EditEquipment from './EditEquipment';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

//-------- Equipment Initial Values ---------
const equipmentInitialValues = {
  name: '',
  price: '',
  rentalTime: '',
  details: '',
};

function EquipOwner() {
  const userId = localStorage.getItem('userId');
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

  const editItem = itemID =>{
    setId(itemID);    
    history.pushState('/editForm');
  }

  const onCheckboxChange = ev => {
    setEquipmentValues({
      ...equipmentValues,
      [ev.target.name]: ev.target.checked,
    });
  };

  //----------MATERIAL UI STYLES ------
  const classes = useStyles();

  return (
    <div className='main-equipment-container'>
      <Container>
        {/* Add a new Equipment */}
        <div className={classes.paper}>
          <CssBaseline />
          <Typography component='h1' variant='h5'>
            Add A New Equipment
          </Typography>
          <form onSubmit={handleAddSubmit}>
            <TextField
              name='name'
              type='text'
              value={equipmentValues.name}
              onChange={handleAddChange}
              placeholder='Equipment Name'
              fullWidth
              variant='outlined'
              margin='normal'
            />
            <TextField
              name='price'
              type='text'
              value={equipmentValues.price}
              onChange={handleAddChange}
              placeholder='Price'
              fullWidth
              variant='outlined'
              margin='normal'
            />
            <TextField
              name='rentalTime'
              type='number'
              value={equipmentValues.rentalTime}
              onChange={handleAddChange}
              placeholder='Renting Days'
              fullWidth
              variant='outlined'
              margin='normal'
            />
            <Input
              name='details'
              type='textarea'
              value={equipmentValues.details}
              onChange={handleAddChange}
              placeholder='Equipment Description'
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              className={classes.submit}
            >
              Add Equipment
            </Button>
          </form>
          {/* Delete Equipment */}
          {/* <form action=''></form> */}
        </div>
      </Container>
      <div className='user-equipment-container'>
        <h3>Your Equipments</h3>
        <div className='card-holder'>
          {equipments.map(equipment => {
            return (
              <EquipmentOwnerCard key={equipment.id} product={equipment} remove={deleteTech} edit={editItem}/>
            );
          })}
        </div>
      </div>
      <div className='user-renting-contianer'>
        <h3>Equipments You Are Renting</h3>
      </div>
    </div>
  );
}

export default EquipOwner;
