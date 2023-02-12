import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/header/header';
import RegistrationForm from './components/registrationForm/registrationForm';

function App() {
  return (
    <div className="App">
      <Header/>
      <RegistrationForm/>
    </div>
  );
}

export default App;