import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Customer = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    const url = `http://localhost:8000/api/customers/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCustomer(data.customer));
  }, []);

  return (
    <>
      {customer ? (
        <div>
          <p>{customer.id}</p>
          <p>{customer.name}</p>
          <p>{customer.industry}</p>
        </div>
      ) : null}
      <Link to="/customers">Go Back</Link>
    </>
  );
};

export default Customer;
