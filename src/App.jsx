import React from "react";
import { MemoryRouter, Route } from "react-router-dom";

// routes
import PrivateRoute from "./routes/privateRoute";

// containers
import App from "./containers/app";
import Login from "./containers/login";

// contexts providers
import { PlayerContextProvider } from "./contexts/playerContext";
import { UserContextProvider } from "./contexts/userContext";

// layouts
import DefaultLayout from "./layouts/default";

const Application = () => {
  return (
    <MemoryRouter>
      <UserContextProvider>
        <PlayerContextProvider>
          <DefaultLayout>
            <Route path="/" exact component={Login} />
            <PrivateRoute path="/player" component={App} />
          </DefaultLayout>
        </PlayerContextProvider>
      </UserContextProvider>
    </MemoryRouter>
  );
};

export default Application;
