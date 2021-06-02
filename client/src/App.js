import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import LocationDetail from "./pages/LocationDetail";
import { StoreProvider } from "./utils/GlobalState";



function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/locations/:id" component={LocationDetail} />
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
