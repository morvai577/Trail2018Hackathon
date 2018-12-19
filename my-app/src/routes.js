import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import Map from "./components/Map";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <main>
          <Route exact path="/" component={App} />
          <Route exact path="/map" component={Map} />
        </main>
      </div>
    </BrowserRouter>
  );
};