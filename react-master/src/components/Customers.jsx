import React, { useEffect, useState } from 'react';

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
              <div key={customer.id}>
                <h2>{customer.name}</h2>
                <p>{customer.industry}</p>
              </div>
            );
          })
        : null}
    </>
  );
};

export default Customers;
