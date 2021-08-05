import React from 'react';
import { useDispatch } from 'react-redux';
import { filterCoin } from '../actions';

function Filter() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(filterCoin({ value: e.target.value }));
  };

  return (
    <div className="coin-search">
      <h3>search coin here...</h3>
      <form>
        <input type="text" placeholder="search coin" className="coin-input" onChange={handleChange} />
      </form>
    </div>
  );
}

export default Filter;
