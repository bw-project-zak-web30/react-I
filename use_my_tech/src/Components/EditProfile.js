import React, { useState } from 'react';

//-------MATERIAL UI IMPORTS---------
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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

function EditProfile() {
  //----------MATERIAL UI STYLES ------
  const classes = useStyles();
  //------------State------------------
  const [user, setUsers] = useState({});
  const [editValues, setEditValues] = useState(user);

  //-----------Handlers----------------
  const handleChange = ev => {
    ev.preventDefault();

    setEditValues({
      ...editValues,
      [ev.target.name]: ev.target.value,
    });
  };

  const editSubmit = ev => {};

  return (
    <Container>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component='h1' variant='h5'>
          Edit Profile
        </Typography>
        <form onSubmit={editSubmit}>
          <TextField
            label='Name'
            id='name'
            name='name'
            placeholder='Full name with spaces'
            onChange={handleChange}
            value={user.name}
            required
            fullWidth
            variant='outlined'
            margin='normal'
          />
          <TextField
            label='City'
            id='city'
            name='city'
            placeholder='Users City'
            onChange={handleChange}
            value={user.city}
            required
            fullWidth
            variant='outlined'
            margin='normal'
          />
          <TextField
            label='Username'
            id='username'
            name='userName'
            placeholder='username'
            onChange={handleChange}
            value={user.username}
            required
            fullWidth
            variant='outlined'
            margin='normal'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default EditProfile;
