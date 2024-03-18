import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Landingpage/Homepage.jsx';
import LoginForm from './components/Auth/Login/login.jsx';
import RegistrationForm from './components/Auth/Reg/RegForm.jsx';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={< LoginForm />} />
        <Route path='/signup' element={<RegistrationForm /> } />
      </Routes>
    </Router>
  );
}

export default App;
