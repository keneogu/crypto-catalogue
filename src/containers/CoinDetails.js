import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCoin } from '../API/api';
import { seeDetails } from '../actions';

function CoinDetails() {
  const { id } = useParams();
  const currentCoin = useSelector((state) => state.currentCoin);
  const dispatch = useDispatch();

  const fetchCoinDetails = async (id) => {
    const response = await fetchCoin(id);
    dispatch(seeDetails(response));
  };

  useEffect(() => {
    if (id && id !== '') fetchCoinDetails(id);
  }, [id]);

  return (
    <div>
      {Object.keys(currentCoin).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div>
          <p>working...</p>
        </div>
      )}
    </div>
  );
}

export default CoinDetails;
