import React from 'react';
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
} from 'reactstrap';

function EquipmentOwnerCard({ product, remove, id }) {
  return (
    <Card>
      <CardHeader>{product.name}</CardHeader>
      <CardBody>
        <CardTitle>Price: {product.price}</CardTitle>
        <CardText>Details: {product.details}</CardText>
        <div className='owner-button-container'>
          <Button>Edit</Button>
          <Button onClick={() => remove(id)}>Delete</Button>
        </div>
      </CardBody>
    </Card>
  );
}

export default EquipmentOwnerCard;
