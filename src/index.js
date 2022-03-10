import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { BrowserRouter as Router } from "react-router-dom" 
import App from "./App";

import "./styles/index.scss"

import charactersStore from "./store/charactersStore";

const mainStore = {
  charactersStore
}

ReactDOM.render(
  <Provider {...mainStore}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById("root")
);

