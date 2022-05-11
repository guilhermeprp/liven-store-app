import React from "react";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";

import { createRoot } from "react-dom/client";
import { store } from "./data/store";

const container = document.getElementById("root");

if (!container) throw new Error("Could not find root element with id 'root'");

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
