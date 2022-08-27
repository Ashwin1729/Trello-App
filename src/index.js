import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StoreApiProvider } from "./utils/StoreApi";

const root = document.getElementById("root");
ReactDOM.render(
  <StoreApiProvider>
    <App />
  </StoreApiProvider>,
  root
);
