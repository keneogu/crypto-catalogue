import { GET_COIN } from '../actions/actionType';

const coinReducer = (state = [], action) => {
  switch (action.type) {
    case GET_COIN:
      return action.payload;
    default:
      return state;
  }
};

export default coinReducer;
