import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Form from './Pages/Form';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/form" element={
        <div>
          <h1 style={{ textAlign: 'center' }}>React Hook Form Example</h1>
          <Form />
        </div>
      } />

    </Routes>
  );
}

export default App;
