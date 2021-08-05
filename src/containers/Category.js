import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Filter from './Filter';
import { getCoin } from '../actions';
import coinAPI from '../API/api';

function Category() {
  const coins = useSelector((state) => state.coin);
  const filterValue = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filteredCoins = coins.filter((e) => e.name.match(new RegExp(filterValue, 'gi')));

  const fetchCoins = async () => {
    const response = await coinAPI();
    dispatch(getCoin(response.data));
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <>
      <Filter />
      <div>
        {filteredCoins.map((c) => (
          <p key={c.name}>{c.name}</p>
        ))}
      </div>
    </>
  );
}

export default Category;
