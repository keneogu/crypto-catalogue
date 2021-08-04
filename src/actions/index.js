import { GET_COIN, COIN_DETAILS } from './actionType';

export const getCoin = (response) => ({
  type: GET_COIN,
  payload: response,
});

export const seeDetails = ({ data }) => ({
  type: COIN_DETAILS,
  payload: data,

});

// export const filterCoin = ({ value }) => ({
//   type: FILTER,
//   payload: value,
// });
