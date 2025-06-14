import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Form() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  });

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    reset(); // Optional: reset form after submit
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '400px', margin: 'auto' }}>
      <div>
        <label>Name</label><br />
        <input {...register('name', { required: 'Name is required' })} />
        {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
      </div>

      <div>
        <label>Email</label><br />
        <input type="email" {...register('email', { required: 'Email is required' })} />
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
      </div>

      <div>
        <label>Password</label><br />
        <input type="password" {...register('password', {
          required: 'Password is required',
          minLength: { value: 6, message: 'Minimum 6 characters required' }
        })} />
        {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
      </div>

      <button type="submit" style={{ marginTop: '20px' }}>Submit</button>

      <p style={{ marginTop: '20px' }}>
        Already have an account?{' '}
        <span
          onClick={() => navigate('/login')}
          style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}
        >
          Login
        </span>
      </p>
    </form>
  );
}

export default Form;
