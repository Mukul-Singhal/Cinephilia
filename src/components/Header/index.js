import React from "react";

import MovieLogo from "../../Images/react-movie-logo.svg";
import tmdbLogo from "../../Images/tmdb_logo.svg";

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <LogoImg src={MovieLogo} alt="Movie Logo" />
        <TMDBLogoImg src={tmdbLogo} alt="TMDb Logo" />
      </Content>
    </Wrapper>
  );
};

export default Header;
