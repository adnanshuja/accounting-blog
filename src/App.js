import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PrivateRoute from "./utils/private-route.js";
import PublicRoute from "./utils/public-route.js";
import Login from "./pages/login.js";
import Admin from "./pages/admin.js";
import Web from "./pages/web.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Web} />
        <PublicRoute path="/login" component={Login} />
        <PrivateRoute path="/admin" component={Admin} />
      </Switch>
    </Router>
  );
}

export default App;
