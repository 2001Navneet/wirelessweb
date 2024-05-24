import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-6wkhsvoych43brzy.us.auth0.com"
    clientId="rSU1hWZ6Luwtd5e9On9PXTRdh7F3cHzi"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
