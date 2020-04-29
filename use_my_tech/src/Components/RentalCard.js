import React from 'react';

import { Card, Button, CardHeader, CardTitle, CardText } from 'reactstrap';

function RentalCard({ product, onRentClick }) {
  const isRented = () => {
    if (product.renting === false) {
      return <Button onClick={onRentClick}>Rent this Now</Button>;
    } else {
      return (
        <CardText>Some nice person is currently renting this product</CardText>
      );
    }
  };

  return (
    <Card>
      <CardHeader>{product.name}</CardHeader>
      <div className='card-text-container'>
        <CardTitle>Price Per Day: ${product.price}</CardTitle>
        <CardText>Details: {product.details}</CardText>
        {/* If statement for if product is being rented or not */}
        {isRented()}
      </div>
    </Card>
  );
}

export default RentalCard;
