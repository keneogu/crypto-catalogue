import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Filter from '../containers/Filter';
import filterReducer from '../reducers/filter';

const state = '';
const store = createStore(filterReducer, state);

describe('Filter', () => {
  it('renders correctly', () => {
    const element = render(<Provider store={store}><Filter /></Provider>);
    expect(element).toMatchSnapshot();
  });
});
