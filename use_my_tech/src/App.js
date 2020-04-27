import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch></Switch>
      </div>
    </Router>
  );
}

export default App;
