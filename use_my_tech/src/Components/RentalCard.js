import React from 'react';

function RentalCard({ product, rentNow }) {
  const isRented = () => {
    if (product.renting === false) {
      return <button onClick={() =>{rentNow(product)}}>Rent this Now</button>;
    } else {
      return <p>Some nice person is currently renting this product</p>;
    }
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
      <p>Details: {product.details}</p>
      <p>Rent Timeframe: {product.timeframe} days</p>
      {/* If statement for if product is being rented or not */}
      {isRented()}
    </div>
  );
}

export default RentalCard;
