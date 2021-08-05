import { FILTER } from '../actions/actionType';

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case FILTER:
      return action.payload;
    default:
      return state;
  }
};

export default filterReducer;
