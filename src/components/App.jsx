import React from "react";
import { CssBaseline } from "@mui/material";
import { Route, Switch } from "react-router-dom";

import { Actors, MovieInformation, Movies, NavBar, Profile } from "./";
const App = () => {
  return (
    <div>
      <CssBaseline />
      <NavBar />
      <div>
        <Switch>
          <Route exact path="/movie/:id">
            <MovieInformation />
          </Route>
          <Route exact path="/actors/:id">
            <Actors />
          </Route>
          <Route exact path="/">
            <Movies />
          </Route>
          <Route exact path="/profile/:id">
            <Profile />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
