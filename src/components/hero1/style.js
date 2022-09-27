import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 0 30px;
`
export const Hero = styled.div`
  display: flex;
  margin-top: 70px;
  gap: 40px;
  margin-bottom: 70px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftSide = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  .text2 {
    color: rgba(0,0,0, 0.4);
  }
`;
export const RightSide = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  img {
    width: 100%;
    border-radius: 20px;
    height: 300px;
  }
  .wrapper {
    position: absolute;
    bottom: -30px;
    background-color: #00a795;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
  }
  .text{
    color: white;
    font-size: 20px;
  }
`;

export const Offers = styled.div`
  margin-top: 70px;
  display: flex;
  gap: 30px;
  margin-bottom: 70px;
  .inform {
    flex: 1;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .icon-wrapper {
    width: 100px;
    height: 100px;
    background-color: #00a795;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }

  .heading {
    color: #00a795;
    font-size: 26px;
    margin-top: 10px;
    font-weight: 700;
    text-align: center;
  }

  .title {
    font-size: 16px;
    text-align: center;
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;