import React from 'react';

// A card for every use that is created
function UserCard({ details }) {
  return (
    <div>
      <h2>{details.userName}</h2>
      <h3>{details.name}</h3>
      <p>{details.city}</p>
    </div>
  );
}

export default UserCard;
