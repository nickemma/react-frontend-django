import React from 'react';

const Employee = ({ name, role }) => {
  return (
    <>
      <h1>Employee {name}</h1>
      <p>{role ? role : 'no role'}</p>
    </>
  );
};

export default Employee;
