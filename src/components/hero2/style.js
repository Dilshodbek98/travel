import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
export const Wrapper = styled.div`
  width: 100%;

`
export const Hero = styled.div`
  width: 100%;
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  margin-bottom: 70px;
  position: relative;
  .content{
    margin-top: 100px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
      font-size: 35px;
      color: white;
      text-align: center;
      font-weight: 800;
    }
    p{
      font-size: 18px;
      text-align: center;
      color: white;
      font-weight: 400;
      margin: 0 50px;
      margin-bottom: 30px;
    }
  }
`;

export const Blur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  background-color: rgba(0,0,0, 0.4);
`