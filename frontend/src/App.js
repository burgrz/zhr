import React from 'react';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';

function App() {
  return (
    <div>
      <h1>ZHR Dashboard</h1>
      <EmployeeForm />
      <EmployeeList />
    </div>
  );
}

export default App;