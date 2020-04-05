import React, { useState } from 'react';

const MovieSelector = ({ movies, movieIndex, onChange }) => {
  return (
    <div className="movie-container">
      <label>Pick a movie:</label>
      <select id="movie" onChange={(e) => onChange(e.target.selectedIndex)}>
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
