// src/Pages/LoginForm.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Login data:', data);
    // Add login logic here (API call, validation, etc.)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '400px', margin: 'auto' }}>
      <div>
        <label>Email</label><br />
        <input
          type="email"
          {...register('email', { required: 'Email is required' })}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
      </div>

      <div>
        <label>Password</label><br />
        <input
          type="password"
          {...register('password', {
            required: 'Password is required',
            minLength: { value: 6, message: 'Minimum 6 characters' }
          })}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
      </div>

      <button type="submit" style={{ marginTop: '20px' }}>Login</button>

      <p style={{ marginTop: '20px' }}>
        Don't have an account?{' '}
        <span
          style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}
          onClick={() => navigate('/register')}
        >
          Register
        </span>
      </p>
    </form>
  );
}

export default LoginForm;
