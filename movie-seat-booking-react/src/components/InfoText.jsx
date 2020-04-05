import React from 'react';

const InfoText = ({ count, total }) => {
  return (
    <p className="text">
      You have selected <span id="count">{count}</span> seats for a price of $
      <span id="total">{total}</span>
    </p>
  );
};

export default InfoText;
