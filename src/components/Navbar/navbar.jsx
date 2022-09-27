import React, { useContext } from "react";
import {
  Container,
  MenuWrapper,
  NavbarSub,
  NavbarSup,
  NavbarWrapper,
  Navlink,
  Wrapper,
} from "./style";
import logo from "../../assets/images/logo.svg";
import { Outlet, useNavigate } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { TbBrandTelegram } from "react-icons/tb";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCall } from "react-icons/io5";
import { dataRoutes } from "../../utils/dataRoutes";
import { Dropdown, Select } from "antd";
import { Option } from "antd/lib/mentions";
import { LanguageContext } from "../../context/languageToggle/language";

const Navbar = () => {
  const menu = (
    <MenuWrapper>
      <NavbarSub.Links2>
        {dataRoutes.map((item) => (
          <Navlink menu
            className={({ isActive }) => isActive && "active"}
            key={item.id}
            to={item.path}
          >
            {localStorage.getItem("language") == "English"
              ? item.title
              : item.title2}
          </Navlink>
        ))}
      </NavbarSub.Links2>
    </MenuWrapper>
  );
  const [language, setLanguage] = useContext(LanguageContext);
  const navigate = useNavigate();
  const handleChange = (e) => {
    localStorage.setItem("language", e.value);
    setLanguage(e.value);
  };
  return (
    <>
      <Container>
        <Wrapper>
          <NavbarWrapper>
            <NavbarSup>
              <NavbarSup.Logo>
                <img onClick={() => navigate("/home")} src={logo}/>
                <h2 onClick={() => navigate("/home")}>Tourism.uz</h2>
              </NavbarSup.Logo>

              <NavbarSup.Social>
                <NavbarSup.Icon>
                  <a href="https://www.facebook.com/" target={"_blank"}>
                    <FaFacebookF style={{ color: "white" }} />
                  </a>
                </NavbarSup.Icon>
                <NavbarSup.Icon>
                  <a href="https://www.instagram.com/" target={"_blank"}>
                    <AiFillInstagram style={{ color: "white" }} />
                  </a>
                </NavbarSup.Icon>
                <NavbarSup.Icon>
                  <a href="https://web.telegram.org/z//" target={"_blank"}>
                    <TbBrandTelegram style={{ color: "white" }} />
                  </a>
                </NavbarSup.Icon>
              </NavbarSup.Social>
            </NavbarSup>

            <NavbarSub>
              <NavbarSub.Language>
                <Select className="select"
                  style={{ color: "white", fontSize: "16px" }}
                  labelInValue
                  bordered={false}
                  defaultValue={{
                    label: localStorage.getItem("language"),
                  }}
                  onChange={handleChange}
                >
                  <Option value="English" className="option">English</Option>
                  <Option value="Uzbek">Uzbek</Option>
                </Select>
              </NavbarSub.Language>

              <Dropdown trigger={"click"} overlay={menu} className='dropdown'>
                <a onClick={(e) => e.preventDefault()}>
                  <AiOutlineMenu style={{color: 'white'}}/>
                </a>
              </Dropdown>

              <NavbarSub.Links>
                {dataRoutes.map((item) => (
                  <Navlink
                    className={({ isActive }) => isActive && "active"}
                    key={item.id}
                    to={item.path}
                  >
                    {localStorage.getItem("language") == "English"
                      ? item.title
                      : item.title2}
                  </Navlink>
                ))}
              </NavbarSub.Links>

              <a href="tel: +99989316165" className="call">
                <NavbarSub.Call>
                  <div className="call-icon">
                    <IoCall style={{ color: "white" }} />
                  </div>
                  {localStorage.getItem("language") === "English" ? (
                    <p>Call To Us</p>
                  ) : (
                    <p>Bizga qong'iroq qilish</p>
                  )}
                </NavbarSub.Call>
              </a>
            </NavbarSub>
          </NavbarWrapper>
        </Wrapper>
      </Container>
      <Outlet />
    </>
  );
};

export default Navbar;
