import React from 'react';

function EquipmentCard({ equipment }) {
  return (
    <div>
      <h2>{equipment.name}</h2>
      <p>{equipment.price}</p>
      <p>{equipment.details}</p>
    </div>
  );
}

export default EquipmentCard;
