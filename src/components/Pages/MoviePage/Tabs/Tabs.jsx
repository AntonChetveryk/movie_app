import React from "react";
import { Route, Switch } from "react-router";
import Detail from "../Tabs/Detail";
import Videos from "../Tabs/Videos";
import Credits from "../Tabs/Credits";
import Navigation from "./Navigation";

import { Row, Col } from "reactstrap";

const Tabs = props => {
  const { movie } = props;

  return (
    <div>
      <Navigation movie={movie} />
      <Row>
        <Col sm="12">
          <Switch>
            <Route exact path={`/movie/${movie.id}`}>
              <Detail movie={movie} />
            </Route>

            <Route exact path={`/movie/${movie.id}/videos`}>
              <Videos movie={movie} />
            </Route>

            <Route exact path={`/movie/${movie.id}/credits`}>
              <Credits movie={movie} />
            </Route>
          </Switch>
        </Col>
      </Row>
    </div>
  );
};

export default Tabs;
