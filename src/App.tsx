import React from 'react';
import { Route, Switch } from "react-router";
import { BrowserRouter as Router} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {EditPage} from "./pages/EditPage";

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path={'/'} component={HomePage} />
          <Route exact path={'/edit/:id'} component={EditPage} />
      </Switch>
    </Router>
  );
}

export default App;
