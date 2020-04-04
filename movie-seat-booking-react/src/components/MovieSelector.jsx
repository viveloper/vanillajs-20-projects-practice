import React from 'react';

const MovieSelector = ({ movieIndex }) => {
  const movies = [
    {
      name: 'Avengers:Endgame',
      price: 10
    },
    {
      name: 'Joker',
      price: 12
    },
    {
      name: 'Toy Story 4',
      price: 8
    },
    {
      name: 'The Lion King',
      price: 9
    }
  ];

  return (
    <div className="movie-container">
      <label>Pick a movie:</label>
      <select id="movie">
        {movies.map((movie, index) => (
          <option
            key={movie.name}
            value={movie.price}
            selected={index === movieIndex}
          >{`${movie.name} ($${movie.price})`}</option>
        ))}
      </select>
    </div>
  );
};

export default MovieSelector;
