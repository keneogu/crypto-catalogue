import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCoin } from '../API/api';
import { seeDetails } from '../actions';

function CoinDetails() {
  const { id } = useParams();
  const currentCoin = useSelector((state) => state.currentCoin);
  const dispatch = useDispatch();
  console.log(currentCoin);

  const fetchCoinDetails = async (id) => {
    const response = await fetchCoin(id);
    dispatch(seeDetails(response));
  };

  useEffect(() => {
    if (id && id !== '') fetchCoinDetails(id);
  }, [id]);

  return (
    <div>
      <h1>CoinDetails</h1>
    </div>
  );
}

export default CoinDetails;
