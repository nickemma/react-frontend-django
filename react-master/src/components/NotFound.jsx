import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <p>This page cannot be find</p>
      <Link to="/dictionary">Go back</Link>
    </>
  );
};

export default NotFound;
