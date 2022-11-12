import Employee from './components/Employee';
import './index.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [role, setRole] = useState('dev');
  const [Employees, setEmployees] = useState([
    {
      name: 'John Doe',
      role: 'developer',
      img: 'https://images.pexels.com/photos/3201630/pexels-photo-3201630.jpeg',
    },
    {
      name: 'Oyin Lizdev',
      role: 'developer',
      img: 'https://images.pexels.com/photos/3201630/pexels-photo-3201630.jpeg',
    },
    {
      name: 'Said Lassri',
      role: 'Engineer',
      img: 'https://images.pexels.com/photos/3201630/pexels-photo-3201630.jpeg',
    },
    {
      name: 'Jane Doe',
      role: 'Manager',
      img: 'https://images.pexels.com/photos/3201630/pexels-photo-3201630.jpeg',
    },
    {
      name: 'Sidney Kaguli',
      role: 'developer',
      img: 'https://images.pexels.com/photos/3201630/pexels-photo-3201630.jpeg',
    },
    {
      name: 'Techie Emma',
      role: 'Engineer',
      img: 'https://images.pexels.com/photos/3201630/pexels-photo-3201630.jpeg',
    },
  ]);

  return (
    <div className="flex flex-wrap justify-center">
      {Employees.map((employee) => (
        <Employee
          key={uuidv4()}
          name={employee.name}
          role={employee.role}
          img={employee.img}
        />
      ))}
    </div>
  );
}

export default App;
