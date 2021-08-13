import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Filter from './Filter';
import { getCoin } from '../actions';
import { coinAPI } from '../API/api';
import '../styles/Category.css';

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
            <Link className="coin-link" to={`/coin/${c.id}`}>
              <div className="coin-row">
                <div className="coin-head">
                  <img src={c.image} alt="crypto" />
                  <h1 className="coin-name">{c.name}</h1>
                </div>
                <div className="coin">
                  <p className="coin-symbol">{c.symbol.toUpperCase()}</p>
                  <p>
                    <span>$</span>
                    {c.current_price.toLocaleString()}
                  </p>
                  {c.price_change_percentage_24h < 0 ? (
                    <p className="red">
                      {c.price_change_percentage_24h.toFixed(2)}
                      %
                    </p>
                  ) : (
                    <p className="green">
                      +
                      {c.price_change_percentage_24h.toFixed(2)}
                      %
                    </p>
                  )}
                  <p className="coin-view">View more</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Category;
