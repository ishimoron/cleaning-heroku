import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Results from "./Routes/Results";
import Services from "./Routes/Services";
import Questions from "./Routes/Questions";
import Review from "./Routes/Review";
import Contacts from './Routes/Contacts'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/results" component={Results} />
      <Route path="/services" component={Services} />
      <Route path="/questions" component={Questions} />
      <Route path="/review" component={Review} />
      <Route path="/contacts" component={Contacts} />
      <Route
        render={() => (
          <h1 style={{ color: "red", textAlign: "center", fontSize: "60px" }}>
            404 error
          </h1>
        )}
      />
    </Switch>
  );
};

export default Routes;
