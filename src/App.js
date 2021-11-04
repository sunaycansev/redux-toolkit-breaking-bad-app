import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import CharacterDetail from "./pages/CharacterDetail/CharacterDetail";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/characters/:char_id" component={CharacterDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
