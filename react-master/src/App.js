import Employee from './components/Employee';
import './index.css';
import { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';

function App() {
  // const [role, setRole] = useState('dev');
  const [Employees, setEmployees] = useState([
    {
      id: 1,
      name: 'John Doe',
      role: 'developer',
      img: 'https://images.pexels.com/photos/3201630/pexels-photo-3201630.jpeg',
    },
    {
      id: 2,
      name: 'Oyin Lizdev',
      role: 'developer',
      img: 'https://images.pexels.com/photos/3201630/pexels-photo-3201630.jpeg',
    },
    {
      id: 3,
      name: 'Said Lassri',
      role: 'Engineer',
      img: 'https://images.pexels.com/photos/3201630/pexels-photo-3201630.jpeg',
    },
    {
      id: 4,
      name: 'Jane Doe',
      role: 'Manager',
      img: 'https://images.pexels.com/photos/3201630/pexels-photo-3201630.jpeg',
    },
    {
      id: 5,
      name: 'Sidney Kaguli',
      role: 'developer',
      img: 'https://images.pexels.com/photos/3201630/pexels-photo-3201630.jpeg',
    },
    {
      id: 6,
      name: 'Techie Emma',
      role: 'Engineer',
      img: 'https://images.pexels.com/photos/3201630/pexels-photo-3201630.jpeg',
    },
  ]);

  const updateEmployee = (id, newName, newRole) => {
    const updateList = Employees.map((employee) => {
      if (employee.id === id) {
        return { ...employee, name: newName, role: newRole };
      }
      return employee;
    });
    setEmployees(updateList);
  };

  return (
    <div className="flex flex-wrap justify-center">
      {Employees.map((employee) => (
        <Employee
          key={employee.id}
          id={employee.id}
          name={employee.name}
          role={employee.role}
          img={employee.img}
          updateEmployee={updateEmployee}
        />
      ))}
    </div>
  );
}

export default App;
