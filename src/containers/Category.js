import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCoin } from '../actions';
import coinAPI from '../API/api';

function Category() {
  const coins = useSelector((state) => state.coin);
  const dispatch = useDispatch();

  const fetchCoins = async () => {
    const response = await coinAPI();
    dispatch(getCoin(response.data));
  };

  return (
    <>
      <div>
        {filteredCoins.map((c) => (
          <p key={c.name}>{c.name}</p>
        ))}
      </div>
    </>
  );
}

export default Category;
