import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav from './component/Nav'
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";

function App() {
  return (
    <Router >
      <Nav/>
      <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/about' component={About} />

      </Switch>
    </Router>
  );
}

export default App;
