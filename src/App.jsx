import React from "react";
import { MemoryRouter, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

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

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
  html, body, #root {
    height: 100%;
  }
`;

const Application = () => {
  return (
    <>
      <GlobalStyle />
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
    </>
  );
};

export default Application;
