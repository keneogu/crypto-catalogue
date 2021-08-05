import React from 'react';

function Filter() {

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
