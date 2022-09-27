import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 70px;
`
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 0 30px;
`
export const Content = styled.div`
  h1 {
    text-align: center;
    color: #00a795;
    font-weight: 800;
  }
  p {
    text-align: center;
    margin-bottom: 40px;
    font-size: 18px;
  }
`;
export const CarouselWrapper = styled.div`

  .slick-slider {
    position: relative;
    height: 340px;
  }
  .slide {
    background-color: #f5f5f5;

  }
  .card {
    width: 342px;
    height: 300px;
    background-color: white;
    border-radius: 15px;
    padding: 20px;
    .person {
      display: flex;
      align-items: center;
      gap: 20px;
      img {
        border-radius: 50%;
        width: 60px;
        height: 60px;
      }
    }
  }
  .slick-dots {
    transform: translateY(-26px);
  }
`;