import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Landingpage/Homepage.jsx';
import LoginForm from './components/Auth/Login/login.jsx';
import RegistrationForm from './components/Auth/Reg/RegForm.jsx';
import PropListings from './components/Properties/PropertyList.jsx';
import Advertise from './components/Advertise/advert.jsx';
import SuccessRegistration from './components/Auth/Reg/SuccessReg.jsx';
import NewProperty from './components/Properties/AddProperty.jsx';
import PropertyDetail from './components/Properties/SemiComponents/PropertyDetail.jsx';
import CommunitySection from './components/Community/Section.jsx';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={< LoginForm />} />
        <Route path='/signup' element={<RegistrationForm /> } />
        <Route path="/listings" element={<PropListings/>} />
        <Route path="/advertise" element={<Advertise/>} />
        <Route path='/redirect' element={<SuccessRegistration />} />
        <Route path='/add-property' element={<NewProperty />} />
        <Route path='/listings/:property_id' element={<PropertyDetail />} />
        <Route path='/community' element={<CommunitySection />} />
      </Routes>
    </Router>
  );
}

export default App;
