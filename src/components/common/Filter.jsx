import React from 'react';
import { getGenres } from '../../services/fakeGenreService';

const Filter = () => {
  return (
    <ul className="list-group">
      {getGenres().map((genre) => (
        <li key={genre._id} className="list-group-item">
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default Filter;
