import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Definition = () => {
  const [word, setWord] = useState([]);
  let { wordId } = useParams();

  useEffect(() => {
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + wordId)
      .then((response) => response.json())
      .then((data) => {
        setWord(data[0].meanings);
        console.log(data[0].meanings);
      });
  }, []);

  return (
    <>
      <h1>Hello from definition</h1>
      {word.map((meaning) => {
        return <p key={uuidv4()}>{meaning.definitions[0].definition}</p>;
      })}
    </>
  );
};

export default Definition;
