import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .carousel {
    width: 100%;
    height: 100vh;
  }

  .slide {
    width: 100%;
    height: 100vh;
    position: relative;
  }

  .text {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1,
    p {
      color: white;
    }
    .carousel-text {
      text-align: center;
      font-size: 26px;
      font-weight: 400;
      margin: 0 30px;

      @media (max-width: 768px) {
        font-size: 16px;
      }
    }

    .carousel-heading {
      text-align: center;
      font-size: 60px;
      font-weight: 700;
      margin: 0 30px;
      @media (max-width: 768px) {
        font-size: 30px;
      }
    }
    .slick-dots {
      position: absolute;
      bottom: 20px;
      color: white;
    }
  }

  img {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100vh;
  }
`;

export const Blur = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0, 0.6);
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
`