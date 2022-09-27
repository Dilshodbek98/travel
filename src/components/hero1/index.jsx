import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../../context/languageToggle/language";
import Button from "../Generics/Button/Button";
import { Container, Hero, LeftSide, Offers, RightSide, Wrapper } from "./style";
import img from '../../assets/images/cardImages/bukhara.jpg'
import { MdTour } from "react-icons/md";
import { SiGooglenews } from "react-icons/si";
import { FaGlobeAmericas as MdLocalOffer } from "react-icons/fa";



const Hero1 = () => {
  const [language, setLanguage] = useContext(LanguageContext)
  const navigate = useNavigate()
  return (
    <Container>
      <Wrapper>
        <Hero>
          <LeftSide>
            {language === "English" ? (
              <>
                <h1 className="heading">Discover new Uzbekistan!</h1>
                <em>
                  <p className="text">
                    Uzbekistan is a mysterious country of the East, where the
                    history of cities gathered in legends, where the sun shines
                    all year round and this reflects the unique nature and
                    beautiful hearts of people.
                  </p>
                </em>
                <p className="text2">
                  Welcome to the country of magnificent architecture and ancient
                  traditions preserved a unique heritage. Everyone who comes to
                  this blessed land is welcome here! If you have visited
                  Uzbekistan once, be sure, you will want to return back here
                  again.
                </p>
                <Button onClick={() => navigate("/attractions")}>More</Button>
              </>
            ) : (
              <>
                <h1 className="heading">Yangi O'zbekistonni kashf eting!</h1>

                <em>
                  <p className="text">
                    O'zbekiston Sharqning sirli mamlakati bo'lib, u erda quyosh
                    porlayotgan shaharlar tarixi afsonalarda to'plangan butun
                    yil davomida va bu noyob tabiatni aks ettiradi va
                    odamlarning go'zal qalblari.
                  </p>
                </em>
                <p className="text2">
                  Ajoyib arxitektura va qadimiy mamlakatga xush kelibsiz
                  an'analar o'ziga xos merosni saqlab qoldi. Kelgan har bir
                  kishi bu muborak o'lkaga xush kelibsiz! Agar tashrif buyurgan
                  bo'lsangiz O'zbekiston bir marta, ishonch hosil qiling, bu
                  yerga qaytishni xohlaysiz yana.
                </p>
                <Button>Ko'proq</Button>
              </>
            )}
          </LeftSide>
          <RightSide>
            <img src={img} alt="" />
            <div className="wrapper">
              {language == "English" ? (
                <p className="text">We offer the best tour for you</p>
              ) : (
                <p className="text">
                  Biz siz uchun eng yaxshi sayohatni taklif etamiz
                </p>
              )}
            </div>
          </RightSide>
        </Hero>
        <Offers>
          {language === "English" ? (
            <>
              <div className="inform">
                <div className="icon-wrapper">
                  <MdTour style={{ color: "white", fontSize: "50px" }} />
                </div>
                <h3 className="heading">Available Tourism</h3>
                <p className="title">
                  Find your happiness and discover new cities
                </p>
              </div>
              <div className="inform">
                <div className="icon-wrapper">
                  <MdLocalOffer style={{ color: "white", fontSize: "50px" }} />
                </div>
                <h3 className="heading">Best Travels</h3>
                <p className="title">
                  Get to know the lifestyle, culture and history of the Uzbek
                  people! We will be by your side in the unforgettable moments
                  of your life
                </p>
              </div>
              <div className="inform">
                <div className="icon-wrapper">
                  <SiGooglenews style={{ color: "white", fontSize: "50px" }} />
                </div>
                <h3 className="heading">Requiered Information</h3>
                <p className="title">
                  This is a newly discovered country, it may seem amazing, rich
                  in intelligence and very developed from an economic point of
                  view.
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="inform">
                <div className="icon-wrapper">
                  <MdTour style={{ color: "white", fontSize: "50px" }} />
                </div>
                <h3 className="heading">Rivojlangan Turizm</h3>
                <p className="title">
                  Baxtingizni toping va yangi shaharlarni kashf eting
                </p>
              </div>
              <div className="inform">
                <div className="icon-wrapper">
                  <MdLocalOffer style={{ color: "white", fontSize: "50px" }} />
                </div>
                <h3 className="heading">Eng yaxshi sayohatlar</h3>
                <p className="title">
                  O‘zbek xalqining turmush tarzi, madaniyati va tarixi bilan
                  tanishing odamlar! Unutilmas daqiqalarda siz bilan birga
                  bo'lamiz hayotingizdan
                </p>
              </div>
              <div className="inform">
                <div className="icon-wrapper">
                  <SiGooglenews style={{ color: "white", fontSize: "50px" }} />
                </div>
                <h3 className="heading">Kerakli ma'lumotlar</h3>
                <p className="title">
                  Bu yangi kashf etilgan mamlakat, u ajoyib, boy tuyulishi
                  mumkin, barcha sohada va iqtisodiy jihatdan juda rivojlangan
                  ko'rinishi mumkin.
                </p>
              </div>
            </>
          )}
        </Offers>
      </Wrapper>
    </Container>
  );
};

export default Hero1;
