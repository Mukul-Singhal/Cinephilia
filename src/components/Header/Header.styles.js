import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px;

  .link {
    color: var(--white);
    font-weight: 600;
    text-decoration: none;
    &:hover {
      color: var(--white);
      font-weight: 1000;
      /* scale: 1.1; */
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: var(--max-width);
  padding: 15px 0;
  margin: 0 auto;

  @media screen and (max-width: 500px) {
    /* justify-content: center; */
  }
`;

export const LogoImg = styled.img`
  width: 200px;

  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;

export const TMDBLogoImg = styled.img`
  width: 100px;
  @media screen and (max-width: 500px) {
    width: 80px;
  }
`;
