import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCoin } from '../API/api';
import { seeDetails } from '../actions';
import '../styles/CoinDetails.css';

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
        <div className="coinDetail-container">
          <div className="coin-d-row">
            <div className="coin-left">
              <h1 className="coin-id">{currentCoin.id}</h1>
              <img src={currentCoin.image} alt="crypto" />
            </div>
            <div className="coin-right">
              <div className="coin-ds-contain">
                <h5 className="coin-ds">Name:</h5>
                <p className="coin-ds-p">{currentCoin.name}</p>
              </div>
              <div className="coin-ds-contain">
                <h5 className="coin-ds">Market Cap rank:</h5>
                <p className="coin-ds-p">{currentCoin.market_cap_rank.toLocaleString()}</p>
              </div>
              <div className="coin-ds-contain">
                <h5 className="coin-ds">Price:</h5>
                <p className="coin-ds-p">
                  <span>$</span>
                  {currentCoin.current_price.toLocaleString()}
                </p>
              </div>
              <div className="coin-ds-contain">
                <h5 className="coin-ds">Market Cap:</h5>
                <p className="coin-ds-p">
                  <span>$</span>
                  {currentCoin.market_cap.toLocaleString()}
                </p>
              </div>
              <p className="coin-des">{currentCoin.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CoinDetails;
