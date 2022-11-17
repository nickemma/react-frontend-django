import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
// import NotFound from '../components/NotFound';

const Definition = () => {
  const [word, setWord] = useState([]);
  // const [notFound, setNotFound] = useState(false);
  let { wordId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + wordId)
      .then((response) => {
        if (response.status === 404) {
          navigate('/404');
        }
        return response.json();
      })
      .then((data) => {
        setWord(data[0].meanings);
        console.log(data[0].meanings);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {word ? (
        <>
          <h2>Here is the definition: </h2>
          {word.map((meaning) => {
            return <p key={uuidv4()}>{meaning.definitions[0].definition}</p>;
          })}
        </>
      ) : null}
    </>
  );
};

export default Definition;
