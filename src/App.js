import Home from "./components/pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/Home" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
