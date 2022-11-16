import Employee from './components/Employee';
import './index.css';
import { useState } from 'react';
import AddEmployee from './components/AddEmployee';
// import { v4 as uuidv4 } from 'uuid';

function App() {
  // const [role, setRole] = useState('dev');
  const [Employees, setEmployees] = useState([
    {
      id: 1,
      name: 'John Doe',
      role: 'developer',
      img: 'https://lazy-coders.netlify.app/static/media/trainer3.1b157a017adb37741dd7.png',
    },
    {
      id: 2,
      name: 'Oyin Lizdev',
      role: 'developer',
      img: 'https://lazy-coders.netlify.app/static/media/avatar4.a56d66be082fdec88e25.jpg',
    },
    {
      id: 3,
      name: 'Said Lassri',
      role: 'Engineer',
      img: 'https://lazy-coders.netlify.app/static/media/trainer4.edd3a24a262a97747b1b.png',
    },
    {
      id: 4,
      name: 'Jane Doe',
      role: 'Manager',
      img: 'https://lazy-coders.netlify.app/static/media/trainer11.f65ad628e627ba4d6c24.png',
    },
    {
      id: 5,
      name: 'Sidney Kaguli',
      role: 'developer',
      img: 'https://lazy-coders.netlify.app/static/media/trainer5.d8c1fc0f303466786921.png',
    },
    {
      id: 6,
      name: 'Techie Emma',
      role: 'Engineer',
      img: 'https://lazy-coders.netlify.app/static/media/trainer8.3dffb89dfbea9d7201ce.png',
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

  const newEmployee = (name, role, img) => {
    const newEmployee = {
      id: Math.floor(Math.random() * 10000) + 1,
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...Employees, newEmployee]);
  };

  return (
    <>
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
      <AddEmployee newEmployee={newEmployee} />
    </>
  );
}

export default App;
