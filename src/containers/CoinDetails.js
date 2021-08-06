import React from 'react';
import { useParams } from 'react-router-dom';

function CoinDetails() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>CoinDetails</h1>
    </div>
  );
}

export default CoinDetails;
