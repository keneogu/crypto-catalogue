import { COIN_DETAILS } from '../actions/actionType';

const currentCoinReducer = (state = {}, action) => {
  switch (action.type) {
    case COIN_DETAILS:
      return action.payload;
    default:
      return state;
  }
};

export default currentCoinReducer;
