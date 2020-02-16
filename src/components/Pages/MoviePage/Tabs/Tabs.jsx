import React from "react";
import { Route, Switch } from "react-router";
import { NavLink as NavLinkRouter } from "react-router-dom";
import Detail from "../Tabs/Detail";
import Videos from "../Tabs/Videos";
import Credits from "../Tabs/Credits";

import { Nav, NavItem, NavLink, Row, Col } from "reactstrap";

const Tabs = props => {
  const { item } = props;

  return (
    <div>
      <Nav tabs className="mt-4">
        <NavItem>
          <NavLink exact to={`/movie/${item.id}/`} tag={NavLinkRouter}>
            Детали
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to={`/movie/${item.id}/videos`} tag={NavLinkRouter}>
            Видео
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to={`/movie/${item.id}/credits`} tag={NavLinkRouter}>
            Актеры
          </NavLink>
        </NavItem>
      </Nav>

      <Row>
        <Col sm="12">
          <Switch>
            <Route exact path={`/movie/${item.id}`}>
              <Detail item={item} />
            </Route>

            <Route exact path={`/movie/${item.id}/videos`}>
              <Videos item={item} />
            </Route>

            <Route exact path={`/movie/${item.id}/credits`}>
              <Credits item={item} />
            </Route>
          </Switch>
        </Col>
      </Row>
    </div>
  );
};

export default Tabs;
