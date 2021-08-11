import currentCoinReducer from '../../reducers/currentCoin';

describe('currentcoin reducer', () => {
  it('it returns the action payload if action type is COIN_DETAILS', () => {
    const state = '';
    const action = {
      type: 'COIN_DETAILS',
      payload: 'something',
    };

    expect(currentCoinReducer(state, action)).toEqual('something');
  });

  it('it returns the same state if action type is not COIN_DETAILS', () => {
    const state = 'old state';
    const action = {
      type: 'SOME_OTHER_ACTION',
      payload: 'something',
    };

    expect(currentCoinReducer(state, action)).toEqual('old state');
  });
});
