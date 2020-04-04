import React, { useState } from 'react';
import MovieSelector from './components/MovieSelector';
import ShowCase from './components/ShowCase';
import MovieTherter from './components/MovieTherter';
import Screen from './components/Screen';
import Seats from './components/Seats';
import InfoText from './components/InfoText';

const SEAT_ROW_NUM = 6;
const SEAT_COL_NUM = 8;

const initialState = {
  movieIndex: 0,
  moviePrice: 0,
  selectedSeats: [1, 2],
  occupiedSeats: [11, 12, 22, 23, 35, 36, 44, 45, 46]
};

function App() {
  const [movieIndex, setMovieIndex] = useState(initialState.selectedMovieIndex);
  const [selectedSeats, setSelectedSeats] = useState(
    initialState.selectedSeats
  );
  const [occupiedSeats, setOccupiedSeats] = useState(
    initialState.occupiedSeats
  );
  const [moviePrice, setMoviePrice] = useState(initialState.moviePrice);

  const handleMovieChange = (price, index) => {
    setMoviePrice(price);
    setMovieIndex(index);
  };

  return (
    <>
      <MovieSelector movieIndex={movieIndex} onChange={handleMovieChange} />
      <ShowCase />
      <MovieTherter>
        <Screen />
        <Seats
          selectedSeats={selectedSeats}
          occupiedSeats={occupiedSeats}
          rowNum={SEAT_ROW_NUM}
          colNum={SEAT_COL_NUM}
        />
      </MovieTherter>
      <InfoText />
    </>
  );
}

export default App;
