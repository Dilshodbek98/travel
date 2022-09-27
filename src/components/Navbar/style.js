import { NavLink } from "react-router-dom";
import styled from "styled-components";

//Containers
export const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: transparent;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 0 30px;
`

export const NavbarWrapper = styled.div`
  width: 100%;
`;

//Sup Navbar
export const NavbarSup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  border-bottom: 1px solid gray;
  @media (max-width: 768px) {
    height: 40px;
  }
`;

NavbarSup.Logo = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  img {
    width: 50px;
  }
  h2 {
    color: #fff;
    font-family: "Lemon";
    letter-spacing: 10px;
    transform: translateY(5px);
    :hover {
      color: #00a795;
    }
  }
  @media (max-width: 768px) {
    h2 {
      font-size: 16px;
      letter-spacing: 2px;
    }
    img {
      width: 30px;
    }
  }
`;

NavbarSup.Social = styled.div`
  display: flex;
  gap: 20px;
`;

NavbarSup.Icon = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  cursor: pointer;
  :hover {
    background-color: #00a795;
    border: none;
  }
  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;

//Sub Navbar
export const NavbarSub = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  border-bottom: 1px solid gray;
  .dropdown {
    display: none;
  }
  .call:hover {
    p {
      color: #00a795;
    }
  }
  @media (max-width: 768px) {
    height: 40px;
    .select {
      font-size: 14px;
      width: 90px;
      height: 30px;
    }
    .ant-select-selector span {
      font-size: 14px;
    }
    .option {
      background-color: red;
    }
    .call {
      p{
        font-size: 14px;
      }
    }
    .dropdown{
      display: block;
    }
  }
`;

NavbarSub.Links = styled.div`
  .active {
    color: #00a795;
  }
  display: flex;
  gap: 40px;
  @media (max-width: 768px) {
    display: none;
  }
`;
NavbarSub.Links2 = styled.div`
  .active {
    color: #00a795;
  }
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;

export const Navlink = styled(NavLink)`
  font-size: ${({ menu }) => (menu ? "14px" : "20px")};
  color: ${({ menu }) => (menu ? "#00a795" : "white")};
  text-decoration: none;
  :hover {
    color: #00a795;
  }
`;

NavbarSub.Language = styled.div`
  .ant-select-arrow{
    color: white;
    transform: translateY(2px);
  }
`;

NavbarSub.Call = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  gap: 10px;
  .call-icon {
    background-color: #00a795;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
      width: 25px;
      height: 25px;
    }
  }
  p {
    color: white;
    transform: translateY(8px);
  }

`;

export const MenuWrapper = styled.div`
  position: absolute;
  background-color: white;
  width: 300px;
  display: flex;
justify-content: center;
  align-items: center;
  gap: 10px;
  height: 100px;
  top: 0;
  left: -140px;
  border-radius: 10px;
`
