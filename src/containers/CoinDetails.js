import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCoin } from '../API/api';
import { seeDetails } from '../actions';

function CoinDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const fetchCoinDetails = async (id) => {
    const response = await fetchCoin(id);
    dispatch(seeDetails(response));
  };

  return (
    <div>
      <h1>CoinDetails</h1>
    </div>
  );
}

export default CoinDetails;
