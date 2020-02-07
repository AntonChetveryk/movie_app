import React, { useState } from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import classnames from "classnames";
import Detail from "../Tabs/Detail";
import Videos from "../Tabs/Videos";
import Credits from "../Tabs/Credits";

import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";

const Tabs = props => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const { item } = props;

  return (
    <BrowserRouter>
      <Switch>
        <div>
          <Nav tabs className="mt-4">
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  toggle("1");
                }}
                to={`/movie/${item.id}/`}
              >
                Детали
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to={`/movie/${item.id}/videos`}
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  toggle("2");
                }}
              >
                Похожие фильмы
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to={`/movie/${item.id}/credits`}
                className={classnames({ active: activeTab === "3" })}
                onClick={() => {
                  toggle("3");
                }}
              >
                Актеры
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <Route exact path={`/movie/${item.id}`}>
                    <Detail />
                  </Route>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="12">
                  <Route exact path={`/movie/${item.id}/videos`}>
                    <Videos />
                  </Route>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="3">
              <Row>
                <Col sm="12">
                  <Route exact path={`/movie/${item.id}/credits`}>
                    <Credits />
                  </Route>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
      </Switch>
    </BrowserRouter>
  );
};

export default Tabs;
