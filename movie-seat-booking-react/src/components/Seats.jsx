import React from 'react';
import SeatRow from './SeatRow';
import Seat from './Seat';

const Seats = ({ selectedSeats, occupiedSeats, rowNum, colNum, onClick }) => {
  return (
    <>
      {Array(rowNum)
        .fill('')
        .map((_, rowIdx) => (
          <SeatRow key={rowIdx}>
            {Array(colNum)
              .fill('')
              .map((_, colIdx) => {
                const seatIdx = rowIdx * colNum + colIdx;
                let type;
                if (occupiedSeats.includes(seatIdx)) {
                  type = 'occupied';
                } else if (selectedSeats.includes(seatIdx)) {
                  type = 'selected';
                }
                return (
                  <Seat
                    key={colIdx}
                    type={type}
                    onClick={onClick}
                    seatIdx={seatIdx}
                  />
                );
              })}
          </SeatRow>
        ))}
    </>
  );
};

export default Seats;
