import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Footer />
        <Switch></Switch>
      </div>
    </Router>
  );
}

export default App;
