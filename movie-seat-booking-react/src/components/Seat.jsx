import React from 'react';

const Seat = ({ type }) => {
  return <div className={`seat ${type ? type : ''}`}></div>;
};

export default Seat;
