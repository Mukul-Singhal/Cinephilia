import React from "react";
import { Link } from "react-router-dom";

import RMDBLogo from "../../Images/react-movie-logo.svg";
import TMDBLogo from "../../Images/tmdb_logo.svg";

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

const Header = () => (
  <Wrapper>
    <Content>
      <Link to="/">
        <LogoImg src={RMDBLogo} alt="rmdb-logo" />
      </Link>
      <Link className="link" to="/favourites">
        Favourites
      </Link>
      <Link className="link" to="/watchlist">
        WatchList
      </Link>
      <Link className="link" to="/watched">
        Watched
      </Link>

      <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
    </Content>
  </Wrapper>
);

export default Header;
