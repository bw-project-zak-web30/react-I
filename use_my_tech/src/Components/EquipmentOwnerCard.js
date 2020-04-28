import React from 'react';

function EquipmentOwnerCard({ product, remove, id }) {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
      <p>Details: {product.details}</p>
      <button onClick={() => remove(id)}>Delete</button>
      <button>Edit</button>
    </div>
  );
}

export default EquipmentCard;
