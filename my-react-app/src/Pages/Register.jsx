import React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from './Form';
import './Register.css'; // ✅ Import CSS

function Register() {
  const navigate = useNavigate();

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Register Page</h2>
        <Form />
      </div>
      <button className="back-button" onClick={() => navigate('/')}>
        Back to Home
      </button>
    </div>
  );
}

export default Register;
