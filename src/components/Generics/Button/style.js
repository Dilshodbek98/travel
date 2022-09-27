import styled from "styled-components";


export const Btn = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 15px;
cursor: pointer;
  height: 40px;
  color: white;
  background-color: #00a795;
  border-radius: 8px;
  min-width: 120px;
  width: ${({width}) => width ? width : '120px'};
  border: none;
  font-size: 22px;
  :active{
    transform: scale(0.98);
  }
`;