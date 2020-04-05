import React from 'react';

const Seat = ({ type, seatIdx, onClick }) => {
  return (
    <div
      className={`seat ${type ? type : ''}`}
      onClick={() => onClick(seatIdx)}
    ></div>
  );
};

export default Seat;
