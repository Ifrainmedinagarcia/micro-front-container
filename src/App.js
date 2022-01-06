import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import "./style.css";

const BreakingBad = lazy(() => import("BREAKINGBAD/app"));
const Episodes = lazy(() => import("EPISODES/app"));

const App = () => (
  <Router>
    <div className="shell-app">
      <ResponsiveAppBar />
      <h1>container app</h1>
      <Suspense fallback="loading...">
        <Switch>
          <Route path="/" exact />
          <Route path="/character" component={BreakingBad} />
          <Route path="/espisodes" component={Episodes} />
        </Switch>
      </Suspense>
    </div>
  </Router>
);
export default App;
