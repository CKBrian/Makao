import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Landingpage/Homepage.jsx';
import LoginForm from './components/Auth/Login/login.jsx';
import RegistrationForm from './components/Auth/Reg/RegForm.jsx';
import PropListings from './components/Properties/PropertyList.jsx';
import Advertise from './components/Advertise/advert.jsx';
import SuccessRegistration from './components/Auth/Reg/SuccessReg.jsx';
import PropertyType from './components/Properties/PropertyForms/PropClass.jsx';
import PropertyConfirm from './components/Properties/PropertyForms/PropConfirm.jsx';
import PropertyCost from './components/Properties/PropertyForms/PropCost.jsx';
import PropertyDesc from './components/Properties/PropertyForms/PropDesc.jsx';
import PropertyImages from './components/Properties/PropertyForms/PropImg.jsx';
import PropertyLocation from './components/Properties/PropertyForms/PropLocation.jsx';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={< LoginForm />} />
        <Route path='/signup' element={<RegistrationForm /> } />
        <Route path="/listings" element={<PropListings/>} />
        <Route path="/add-property-type" element={<PropertyType/>} />
        <Route path="/add-property-location" element={<PropertyLocation/>} />
        <Route path="/add-property-images" element={<PropertyImages/>} />
        <Route path="/add-property-desc" element={<PropertyDesc/>} />
        <Route path="/add-property-cost" element={<PropertyCost/>} />
        <Route path="/validate-property-details" element={<PropertyConfirm/>} />
        <Route path="/advertise" element={<Advertise/>} />
        <Route path='/redirect' element={<SuccessRegistration />} />
        
      </Routes>
    </Router>
  );
}

export default App;
