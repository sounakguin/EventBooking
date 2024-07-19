import React from "react";
import { createRoot } from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import store from "./Features/Events/store";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
