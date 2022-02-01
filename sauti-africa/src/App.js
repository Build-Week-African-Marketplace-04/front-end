import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Styling
import './App.css';

// Components
import Navigation from './components/Navigation';
import Marketplace from './components/Marketplace';
import AddItemForm from './components/AddItemForm';
import Logout from './components/Logout';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  const isLoggedIn = localStorage.getItem('token');

  // DOM
  return (
    <div className='App'>
      <Navigation />
      <div className='container'>
        <Routes>
          {!isLoggedIn && <Route exact path='/' element={<Login/>}/>}
          {isLoggedIn && <Route exact path='/' element={<Marketplace/>}/>}
          <Route path='/marketplace' element={<Marketplace/>}/>
          <Route path='/add-item' element={<AddItemForm/>}/>
          <Route path='/logout' element={<Logout/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
