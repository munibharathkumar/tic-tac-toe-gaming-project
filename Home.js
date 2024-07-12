import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
const Home = () => {
  return (
    <div className='home-container'>
      <h1>Welcome to Home Page</h1>
      <div className='home'>
      <small class="form-text text-muted">already have an account?</small>
      <Link to="/Register">
        <button>RegistrationForm</button><br></br><br></br>
      </Link>
      <small class="form-text text-muted">goto game.</small>
      <Link to="/Login">
      <button >LoginForm</button>
      </Link>
      </div>

    </div>
  );
};

export default Home;