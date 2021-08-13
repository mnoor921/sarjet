import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homePage";
import Errors from "./pages/error";
import MainMap from "./pages/main-map";
import RoutesSarjet from "./pages/routes";

function App() {
  return (
    <>
      <div>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/main-map" component={MainMap} />
          <Route exact path="/RoutesSarjet" component={RoutesSarjet} />

          <Route component={Errors} />
        </Switch>
      </div>
    </>
  );
}

export default App;
