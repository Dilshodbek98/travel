import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
`;

export const Main = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  img {
    width: 100%;
    height: 600px;
    position: absolute;
    top: 0;
    left: 0;
  }
  .blur {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
  .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 1440px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 11;
    h1 {
      color: white;
      font-size: 40px;
    }
  }
`;
