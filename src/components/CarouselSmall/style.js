import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 0 30px;
  .slick-slider {
    margin-top: 20px;
    height: 350px;
  }
`;
export const Slide = styled.div`
  border: none;
  padding: 20px;
  height: 350px;
  .card {
    width: 100%;
    height: 100%;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      border-radius: 15px;
    }
    .title{
      position: absolute;
      bottom: 10px;
      left: 20px;
      background-color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 200px;
      height: 40px;
      border-radius: 10px;

      p{
        transform:translateY(10px);
        font-size: 20px;
      }
    }
  }
`;
