import { Container, Navigation, StyledAside } from "./styles";
import {
  LogoIcon,
  MovieCategoryIcon,
  NavBookMarkIcon,
  NavHomeIcon,
  NavMoviesIcon,
  NavTvIcon,
} from "assets/icons";

import { NavLink } from "react-router-dom";
import React from "react";

const SideBar = () => {
  return (
    <Container>
      <StyledAside>
        <LogoIcon className="logo" />
        <Navigation>
          <NavLink className={({isActive}) => (isActive ? "active" : "")} to="/" end>
            <NavHomeIcon />
          </NavLink>
          <NavLink
            className={({isActive}) => (isActive ? "active" : "")}
            to="/movie"
          >
            <NavMoviesIcon />
          </NavLink>
          <NavLink className={({isActive}) => (isActive ? "active" : "")} to="/tv-series">
            <NavTvIcon />
          </NavLink>
          <NavLink className={({isActive}) => (isActive ? "active" : "")} to="/bookmarks">
            <NavBookMarkIcon />
          </NavLink>
        </Navigation>
      </StyledAside>
    </Container>
  );
};

export default SideBar;
