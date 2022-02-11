import './css/style.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Series from './pages/Series';
import Movies from './pages/Movies';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CardDetails from './components/CardDetails';

function App() {
  return (
    <>
    <NavBar />
    <Switch>
        <Route exact path="/" component={ Home }></Route>
        <Route exact path="/series" component={ Series }></Route>
        <Route exact path="/movies" component={ Movies }></Route>
        <Route exact path="/card-details/:id" render={(props) => <CardDetails {...props} /> }></Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
