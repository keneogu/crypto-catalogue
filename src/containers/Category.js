import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Filter from './Filter';
import { getCoin } from '../actions';
import { coinAPI } from '../API/api';

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
          <div className="coin-container" key={c.id}>
            <div className="coin-row">
              <Link className="coinLink" to={`/coin/${c.id}`}>
                <div className="coin">
                  <img src={c.image} alt="crypto" />
                  <h1>{c.name}</h1>
                  <p className="coin-symbol">{c.symbol.toUpperCase()}</p>
                </div>
                <div className="coin-data">
                  <p>{c.current_price}</p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Category;
