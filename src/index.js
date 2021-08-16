import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.2.0";
import "assets/demo/demo.css";

import Jobs from "views/Jobs";
import FilterState from "context/filters/filterState";

ReactDOM.render(
  <FilterState>
    <BrowserRouter>
      <Switch>
        <Route path="/Jobs" render={(props) => <Jobs {...props} />} />

        <Redirect from="/" to="/jobs" />
      </Switch>
    </BrowserRouter>
  </FilterState>,
  document.getElementById("root")
);
