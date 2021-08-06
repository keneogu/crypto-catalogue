import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Category from '../containers/Category';
import Header from './Header';
import '../styles/App.css';
import CoinDetails from '../containers/CoinDetails';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/category" exact component={Category} />
        <Route exact path="/coin/:id" component={CoinDetails} />
      </Switch>
    </Router>
  );
}

export default App;
