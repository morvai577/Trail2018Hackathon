import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import Map from "./Pages/Map";
import Profile from "./Pages/Profile";
import Post from "./Pages/Post";
import Activity from "./Pages/Activity";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <main>
          <Route exact path="/" component={App} />
          <Route exact path="/map" component={Map} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/post" component={Post} />
          <Route exact path="/activity" component={Activity} />
        </main>
      </div>
    </BrowserRouter>
  );
};