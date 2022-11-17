import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dictionary = () => {
  const [word, setWord] = useState('');
  const navigate = useNavigate();

  return (
    <form
      className="flex items-center justify-center m-6"
      onSubmit={() => {
        navigate('/definition/' + word);
      }}
    >
      <input
        className="min-w-0 shrink shadow-lg border-2 border-slate-300 p-2 rounded-lg "
        type="text"
        placeholder="Enter a word"
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />
      <button
        type="button"
        className="border border-slate-300 hover:border-indigo-300 p-2 rounded-lg ml-2"
      >
        Search
      </button>
    </form>
  );
};

export default Dictionary;
