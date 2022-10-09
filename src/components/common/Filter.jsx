import React from 'react';

const Filter = ({ items, textProperty, ValueProperty }) => {
  return (
    <ul className="list-group">
      {items.map((items) => (
        <li key={items[ValueProperty]} className="list-group-item">
          {items[textProperty]}
        </li>
      ))}
    </ul>
  );
};

export default Filter;
