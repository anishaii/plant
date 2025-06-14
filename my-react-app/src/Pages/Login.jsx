// src/Pages/Login.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm'; // ✅ Import the LoginForm component

function Login() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Login Page</h2>

      <div style={{ marginTop: '20px' }}>
        <LoginForm /> {/* ✅ Render the form */}
      </div>

      <button onClick={() => navigate('/')} style={{ marginTop: '30px' }}>
        Back to Home
      </button>
    </div>
  );
}

export default Login;
