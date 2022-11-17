import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dictionary = () => {
  const [word, setWord] = useState('');
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/definition/' + word);
  };

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />
      <button type="button" onClick={handleClick}>
        Search
      </button>
    </>
  );
};

export default Dictionary;
