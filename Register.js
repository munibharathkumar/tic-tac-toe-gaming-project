import React from 'react';
import './Register.css';
const RegistrationForm = () => {
    return(
      <div class="form-container">
      <h2 class="text-center mb-4">Registration Form</h2>
      <form>
        <div class="form-group">
          <label for="name">First Name</label><br></br>
          <input type="text" class="form-control"size="30" id="fname" name="fname" required/><br></br>
        </div>
        <div class="form-group">
          <label for="name">Last Name</label><br></br>
          <input type="text" class="form-control" size="30" id="lname" name="lname" required/><br></br>
        </div>
        <div class="form-group">
          <label for="mobile">Mobile Number</label><br></br>
          <input type="tel" class="form-control" id="mobile" name="mobile" pattern="[0-9]{10}" required/><br></br>
          <small class="form-text text-muted">Please enter a 10-digit mobile number.</small><br></br>
        </div>
        <div class="form-group">
          <label for="email">Email address</label><br></br>
          <input type="email" class="form-control"size="30" id="email" name="email" required/><br></br>
        </div>
        <div class="form-group">
          <label for="password">Password</label><br></br>
          <input type="password" class="form-control" size="16" id="password" name="password" required /><br></br>
        </div>
        <div class="form-group">
          <label for="dropdown">Gender:</label><br></br>
          <select class="form-control" id="dropdown" name="dropdown">
        <option value="option1">select</option>
            <option value="option1">Male</option>
            <option value="option2">Female</option>
            <option value="option3">Others</option>
          </select><br></br>
        </div>
        <div class="form-button">
          <button type="submit" class="btn btn-primary btn-block">Register</button>
        </div>

      </form>
    </div>
    );
}
export default RegistrationForm;
