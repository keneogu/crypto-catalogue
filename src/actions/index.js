import { FILTER, GET_COIN, COIN_DETAILS } from './actionType';

export const getCoin = (response) => ({
  type: GET_COIN,
  payload: response,
});

export const seeDetails = ({ data }) => ({
  type: COIN_DETAILS,
  payload: {
    id: data.id,
    name: data.name,
    symbol: data.symbol,
    market_cap_rank: data.market_cap_rank,
    description: data.description.en,
  },

});

export const filterCoin = ({ value }) => ({
  type: FILTER,
  payload: value,
});
