import React from 'react';
import {
  Card,
  Button,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
} from 'reactstrap';

function RentedCard({ product, remove }) {
  const dateToReturn = product.return_date;

  console.log("rentedCard return date:", dateToReturn);


  return (
    <Card>
      <CardHeader>{product.name}</CardHeader>
      <CardBody>
        <CardTitle>Return Date: {dateToReturn.slice(0,10)}</CardTitle>
        <CardText>Details: {product.details}</CardText>
        {/* <div className='owner-button-container'>
          <Button onClick={() => remove(product.id)}>Return</Button>
        </div> */}
      </CardBody>
    </Card>
  );
}

export default RentedCard;
