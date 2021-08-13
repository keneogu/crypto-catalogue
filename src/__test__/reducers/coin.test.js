import coinReducer from '../../reducers/coin';

describe('coin reducer', () => {
  it('it returns the action payload if action type is GET_COIN', () => {
    const state = '';
    const action = {
      type: 'GET_COIN',
      payload: 'something',
    };

    expect(coinReducer(state, action)).toEqual('something');
  });

  it('it returns the same state if action type is not GET_COIN', () => {
    const state = 'old state';
    const action = {
      type: 'SOME_OTHER_ACTION',
      payload: 'something',
    };

    expect(coinReducer(state, action)).toEqual('old state');
  });
});
