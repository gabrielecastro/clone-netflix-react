import './css/style.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Series from './pages/Series';
import Movies from './pages/Movies';

function App() {
  return (
    <>
    <Switch>
        <Route exact path="/" component={ Home }></Route>
        <Route exact path="/series" component={ Series }></Route>
        <Route exact path="/movies" component={ Movies }></Route>
      </Switch>
    </>
  );
}

export default App;
