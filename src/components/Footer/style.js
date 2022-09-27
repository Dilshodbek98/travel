import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #263a49;
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 0 30px;
  display: flex;
  margin-top: 50px;
  justify-content: space-between;
  gap: 50px;
  flex-wrap: wrap;
`;
export const Section = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  min-width: 300px;

  h1 {
    font-size: 26px;
    margin-top: 20px;
    color: white;
  }

  a {
    text-decoration: none;
    color: white;
    margin: 10px 0;
    :hover {
      color: #00a795;
    }
  }
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;
