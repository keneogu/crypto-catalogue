import React from 'react';
import { useDispatch } from 'react-redux';
import { filterCoin } from '../actions';
import '../styles/Filter.css';

function Filter() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(filterCoin({ value: e.target.value }));
  };

  return (
    <div className="coin-search">
      <form className="search-form">
        <input type="text" placeholder="search coin" className="coin-input" onChange={handleChange} />
      </form>
      <h3>search coin here...</h3>
    </div>
  );
}

export default Filter;
