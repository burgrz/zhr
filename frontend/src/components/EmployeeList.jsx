import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/employees')
      .then(res => setEmployees(res.data));
  }, []);

  return (
    <ul>
      {employees.map(emp => (
        <li key={emp._id}>{emp.name} - {emp.position}</li>
      ))}
    </ul>
  );
}

export default EmployeeList;