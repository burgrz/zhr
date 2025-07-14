import React, { useState } from 'react';
import axios from 'axios';

function EmployeeForm() {
  const [formData, setFormData] = useState({ name: '', email: '', position: '', salary: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3000/employees', formData);
    // Add refresh or alert
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} placeholder="Name" />
      <input name="email" onChange={handleChange} placeholder="Email" />
      <input name="position" onChange={handleChange} placeholder="Position" />
      <input name="salary" onChange={handleChange} placeholder="Salary" />
      <button type="submit">Add Employee</button>
    </form>
  );
}

export default EmployeeForm;