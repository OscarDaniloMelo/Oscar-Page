import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./Layout";
import Badges from "../Pages/Badges";
import BadgeNew from "../Pages/BadgeNew";
import BadgeEdit from "../Pages/BadgeEdit";
import BadgeDetails from "../Pages/BadgeDetailsContainer";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/Home";
import Proyectos from "../Pages/Proyectos";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/proyectos" component={Proyectos} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
          <Route exact path="/badges/:badgeId" component={BadgeDetails} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
