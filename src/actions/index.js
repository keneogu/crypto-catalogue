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
    image: data.image.large,
    market_cap_rank: data.market_data.market_cap_rank,
    current_price: data.market_data.current_price.usd,
    market_cap: data.market_data.market_cap.usd,
    description: data.description.en,
  },

});

export const filterCoin = ({ value }) => ({
  type: FILTER,
  payload: value,
});
