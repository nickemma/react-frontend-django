import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Customer = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/customers/' + id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCustomer(data.Customer);
      });

    return (
      <>
        {customer ? (
          <div>
            <p>{customer.id}</p>
            <h2>{customer.name}</h2>
            <p>{customer.industry}</p>
          </div>
        ) : null}
      </>
    );
  });
};

export default Customer;
