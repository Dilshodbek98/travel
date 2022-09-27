import React from "react";
import { Container, Main, Wrapper } from "./style";

const Content = ({image, title}) => {
  return (
    <Container>
      <Main>
        <img src={image} alt="" />
        <div className="blur"></div>
        <div className="content">
          <h1>{title}</h1>
        </div>
      </Main>
    </Container>
  );
};

export default Content;
