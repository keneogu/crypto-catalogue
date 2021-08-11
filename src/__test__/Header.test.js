import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

describe('Header', () => {
  it('renders correctly', () => {
    const element = render(<BrowserRouter><Header /></BrowserRouter>);
    expect(element).toMatchSnapshot();
  });
});
