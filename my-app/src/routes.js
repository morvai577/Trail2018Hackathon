import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import Map from "./pages/Map";
import Profile from "./pages/Profile";
import Post from "./pages/Post";
import Activity from "./pages/Activity";
import Node from "./pages/Node";

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
          <Route exact path="/node" component={Node} />
        </main>
      </div>
    </BrowserRouter>
  );
};