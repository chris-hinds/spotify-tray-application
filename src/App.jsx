import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// routes
import PrivateRoute from "./routes/privateRoute";

// containers
import App from "./containers/app";
import Login from "./containers/login";
import Landing from "./containers/landing";

// contexts providers
import { PlayerContextProvider } from "./contexts/playerContext";
import { UserContextProvider } from "./contexts/userContext";

const Application = () => {
  return (
    <Router>
      <UserContextProvider>
        <PlayerContextProvider>
          <Route exact path="/" component={Landing} />
          <PrivateRoute path="/player" component={App} />
          <Route path="/login" component={Login} />
        </PlayerContextProvider>
      </UserContextProvider>
    </Router>
  );
};

export default Application;
