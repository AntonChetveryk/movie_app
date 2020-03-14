import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { NavLink as NavLinkRouter } from "react-router-dom";

const Navigation = ({ movie }) => (
  <Nav tabs className="mt-4">
    <NavItem>
      <NavLink exact to={`/movie/${movie.id}/`} tag={NavLinkRouter}>
        Детали
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink to={`/movie/${movie.id}/videos`} tag={NavLinkRouter}>
        Видео
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink to={`/movie/${movie.id}/credits`} tag={NavLinkRouter}>
        Актеры
      </NavLink>
    </NavItem>
  </Nav>
);

export default Navigation;
