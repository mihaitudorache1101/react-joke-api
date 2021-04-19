import React from "react";
import "./Card.css";

const Card = ({ setup, punchline, fetchData, loading }) => {
  return (
    <div className='card'>
      {loading ? (
        <p className='loading'>Loading...</p>
      ) : (
        <>
          <p className='setup'>{setup}</p>
          <p className='punchline'>{punchline}</p>
        </>
      )}

      <button className='button' onClick={fetchData}>
        Generate New Joke
      </button>
    </div>
  );
};

export default Card;
