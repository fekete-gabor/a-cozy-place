import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { MainProvider } from "./context/main_context";
import { AnimalFilterProvider } from "./context/animal_filter_context";

ReactDOM.render(
  <React.StrictMode>
    <MainProvider>
      <AnimalFilterProvider>
        <App />
      </AnimalFilterProvider>
    </MainProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
