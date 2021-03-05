import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import DairysPage from "./pages/dairys/dairys";
import RabotyagiPage from "./pages/rabotyagi/rabotyagi";

// eslint-disable-next-line
export default (
    <Switch>
        <Route path="/" exact render={() => <Redirect to="/dairys" />} />
        <Route path="/exit" exact render={() => <Redirect to="/dairys" />} />
        <Route path="/dairys/" exact component={DairysPage} />
        <Route path="/dairys/new" component={DairysPage} />
        <Route path="/dairys/pinned" component={DairysPage} />
        <Route path="/dairys/conflicts" component={DairysPage} />
        <Route path="/rabotyagi" exact component={RabotyagiPage} />
    </Switch>
);