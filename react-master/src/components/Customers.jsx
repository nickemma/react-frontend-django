import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Customers = () => {
  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/customers/')
      .then((response) => response.json())
      .then((data) => {
        setCustomer(data.customers);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h2>Here are our Customers:</h2>
      {customer
        ? customer.map((customer) => {
            return (
              <ul key={customer.id}>
                <li>
                  <Link to={'/customers/' + customer.id}>{customer.name}</Link>
                </li>
              </ul>
            );
          })
        : null}
    </>
  );
};

export default Customers;
