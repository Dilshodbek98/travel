import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 0 30px;
`;
export const Hero = styled.div`
  display: flex;
  margin-top: 70px;
  margin-bottom: 70px;
  flex-direction: column;
  align-items: center;
  .heading {
    color: #00a795;
  }
  .text {
    font-size: 25px;
  }

  .photos {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: center;
  }
  .card {
    position: relative;
    border: none;

    .wrapper {
      height: 50px;
      background-color: white;
      width: fit-content;
      height: 60px;
      display: flex;
      padding: 15px 20px 0;
      align-items: center;
      justify-content: center;
      border-radius: 15px;
      position: absolute;
      bottom: 10px;
      right: 20px;
    }
    a:hover{
      display: block;
      border-radius: 20px;
      box-shadow: 0 0 10px 1px black;
    }
  }

`;
