import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import Category from '../containers/Category';
import store from '../store';

configure({ adapter: new Adapter() });

it('matches the coin category snapshot', () => {
  const tree = renderer.create(<Provider store={store}><Category /></Provider>);
  expect(tree).toMatchSnapshot();
});

it('contains the <Filter /> component', () => {
  const component = shallow(<Provider store={store}><Category /></Provider>);
  expect(component.find('Filter')).toBeTruthy();
});
