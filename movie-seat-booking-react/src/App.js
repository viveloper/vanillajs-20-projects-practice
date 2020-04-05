import React, { useState } from 'react';
import MovieSelector from './components/MovieSelector';
import ShowCase from './components/ShowCase';
import MovieTherter from './components/MovieTherter';
import Screen from './components/Screen';
import Seats from './components/Seats';
import InfoText from './components/InfoText';

const movies = [
  {
    name: 'Avengers:Endgame',
    price: 10,
  },
  {
    name: 'Joker',
    price: 12,
  },
  {
    name: 'Toy Story 4',
    price: 8,
  },
  {
    name: 'The Lion King',
    price: 9,
  },
];

const SEAT_ROW_NUM = 6;
const SEAT_COL_NUM = 8;

const initialState = {
  movieIndex: 1,
  selectedSeats: [],
  occupiedSeats: [11, 12, 22, 23, 35, 36, 44, 45, 46],
};

function App() {
  const [movieIndex, setMovieIndex] = useState(initialState.movieIndex);
  const [selectedSeats, setSelectedSeats] = useState(
    initialState.selectedSeats
  );
  const [occupiedSeats, setOccupiedSeats] = useState(
    initialState.occupiedSeats
  );

  const handleMovieChange = (index) => {
    setMovieIndex(index);
  };

  const handleSeatClick = (seatIdx) => {
    if (occupiedSeats.includes(seatIdx)) {
      return;
    }
    // toggle selected
    if (selectedSeats.includes(seatIdx)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatIdx));
    } else {
      setSelectedSeats([...selectedSeats, seatIdx]);
    }
  };

  return (
    <>
      <MovieSelector
        movies={movies}
        movieIndex={movieIndex}
        onChange={handleMovieChange}
      />
      <ShowCase />
      <MovieTherter>
        <Screen />
        <Seats
          selectedSeats={selectedSeats}
          occupiedSeats={occupiedSeats}
          rowNum={SEAT_ROW_NUM}
          colNum={SEAT_COL_NUM}
          onClick={handleSeatClick}
        />
      </MovieTherter>
      <InfoText
        count={selectedSeats.length}
        total={movies[movieIndex].price * selectedSeats.length}
      />
    </>
  );
}

export default App;
