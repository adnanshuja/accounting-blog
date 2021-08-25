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
        <PublicRoute exact path="/login" component={Login} />
        <PrivateRoute exact path="/admin" component={Admin} />
        <Route path="/" component={Web} />
      </Switch>
    </Router>
  );
}

export default App;
