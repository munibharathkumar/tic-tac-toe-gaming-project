import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import './App.css';

import RegistrationForm from './Register';
import LoginForm from './Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<RegistrationForm/>} />
        <Route path="/Login" element={<LoginForm/>} />
      </Routes>
    </Router>
  );
}

export default App;