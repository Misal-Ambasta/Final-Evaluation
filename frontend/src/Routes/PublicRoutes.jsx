import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "../Components/Home.jsx"
import RenderVehicleDetails from "../Components/RenderVehicleDetails"

export default function Routing(props) {
    return (
        <Switch>
            <Route path="/" exact render={(props) => <Home {...props} />} />
            <Route path="/details/:id"  render={(props) => <RenderVehicleDetails {...props} />}  />
            <Route render={() => <h3>Page not found</h3>} />
        </Switch>
    );
}