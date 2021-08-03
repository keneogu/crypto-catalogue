import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Category from '../containers/Category';
import Home from '../containers/Home';
import Header from './Header';
import '../styles/App.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/category" exact component={Category} />
      </Switch>
    </Router>
  );
}

export default App;
