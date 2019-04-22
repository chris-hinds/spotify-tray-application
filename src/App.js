import React from "react";
import App from "./containers/app";

// contexts providers
import { PlayerContextProvider } from "./contexts/playerContext";
import { UserContextProvider } from "./contexts/userContext";

const Application = () => (
  <UserContextProvider>
    <PlayerContextProvider>
      <App />
    </PlayerContextProvider>
  </UserContextProvider>
);

export default Application;
