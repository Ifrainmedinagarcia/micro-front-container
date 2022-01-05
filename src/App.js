import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import "./style.css";

const ProductApp = lazy(() => import("PRODUCT/app"));
const User = lazy(() => import("USER/app"));

const App = () => (
  <Router>
    <div className="shell-app">
      <ResponsiveAppBar />
      <Suspense fallback="loading...">
        <Switch>
          <Route path='/' exact/>
          <Route path='/product' component={ProductApp}/>
          <Route path='/user' component={User}/>
        </Switch>
      </Suspense>
    </div>
  </Router>
);
export default App;
