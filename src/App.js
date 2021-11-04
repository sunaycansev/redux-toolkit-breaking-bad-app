import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Quotes from "./pages/Quotes/Quotes";
import CharacterDetail from "./pages/CharacterDetail/CharacterDetail";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Characters</Link>
          </li>
          <li>
            <Link to="/quotes">Quotes</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/characters/:char_id" component={CharacterDetail} />
          <Route path="/quotes" component={Quotes} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
