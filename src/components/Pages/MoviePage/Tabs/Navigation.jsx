import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { withRouter } from "react-router";
import { NavLink as NavLinkRouter } from "react-router-dom";

const Navigation = ({ match }) => (
  <Nav tabs className="mt-4">
    <NavItem>
      <NavLink exact to={`/movie/${match.params.id}/`} tag={NavLinkRouter}>
        Детали
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink to={`/movie/${match.params.id}/videos`} tag={NavLinkRouter}>
        Видео
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink to={`/movie/${match.params.id}/credits`} tag={NavLinkRouter}>
        Актеры
      </NavLink>
    </NavItem>
  </Nav>
);

export default withRouter(Navigation);
