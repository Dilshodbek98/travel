import React, { useContext } from "react";
import Slider from "react-slick";
import { CarouselWrapper, Container, Content, Wrapper } from "./style";
import { AiTwotoneStar } from "react-icons/ai";

//images of person
import img1 from '../../assets/images/cardImages/person1.jpg'
import img2 from '../../assets/images/cardImages/person2.jpg'
import img3 from '../../assets/images/cardImages/person3.jpg'
import img4 from '../../assets/images/cardImages/person4.jpg'
import img5 from '../../assets/images/cardImages/person5.jpg'
import { LanguageContext } from "../../context/languageToggle/language";

const Reviews = () => {
  const [language, estLanguage] = useContext(LanguageContext)
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <Container>
      <Wrapper>
        <Content>
          {language === "English" ? (
            <>
              <h1>Reviews of Tourists</h1>
              <p>
                There are an infinite number of ways to have fun and interesting
                time in the world: go on a trip or adventure, explore something,
                touch sacred places, see unique places untouched by
                civilization, improve health, have an active rest, experience
                extreme sports or just spend time in nature with family or
                friends, and all this is connected with tourism and the tourism
                industry in general. There are all three main types of tourism
                in Uzbekistan: inbound, outbound and domestic.
              </p>
            </>
          ) : (
            <>
              <h1>Turistlarning sharxlari</h1>
              <p>
                Qiziqarli va qiziqarli bo'lishning cheksiz ko'p usullari mavjud
                dunyoda vaqt: sayohatga yoki sarguzashtga boring, biror narsani
                o'rganing, muqaddas joylarga teging, tegmagan noyob joylarni
                ko'ring tsivilizatsiya, salomatlikni yaxshilash, faol dam olish,
                tajriba ekstremal sport bilan shug'ullanish yoki shunchaki oila
                bilan tabiatda vaqt o'tkazish yoki do'stlar va bularning
                barchasi turizm va turizm bilan bog'liq umuman sanoat.
                Turizmning uchta asosiy turi mavjud O'zbekistonda: kirish,
                chiqish va ichki.
              </p>
            </>
          )}
        </Content>
        <CarouselWrapper>
          <Slider>
            <Slider {...settings}>
              <div className="slide">
                <div className="card">
                  <div className="stars">
                    <AiTwotoneStar style={{ color: "gray" }} />
                    <AiTwotoneStar style={{ color: "gray" }} />
                    <AiTwotoneStar style={{ color: "gray" }} />
                    <AiTwotoneStar style={{ color: "gray" }} />
                    <AiTwotoneStar style={{ color: "gray" }} />
                  </div>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Inventore dolorem corporis voluptate dolorum officiis natus!
                  </p>
                  <div className="person">
                    <img src={img1} alt="" /> 
                    <h1>Jena</h1>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="card">
                  <div className="stars">
                    <AiTwotoneStar style={{ color: "gray" }} />
                    <AiTwotoneStar style={{ color: "gray" }} />
                    <AiTwotoneStar style={{ color: "gray" }} />
                    <AiTwotoneStar style={{ color: "gray" }} />
                    <AiTwotoneStar style={{ color: "gray" }} />
                  </div>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Inventore dolorem corporis voluptate dolorum officiis natus!
                  </p>
                  <div className="person">
                    <img src={img2} alt="" />
                    <h1>John</h1>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="card">
                  <div className="stars">
                    <AiTwotoneStar style={{ color: "gray" }} />
                    <AiTwotoneStar style={{ color: "gray" }} />
                    <AiTwotoneStar style={{ color: "gray" }} />
                    <AiTwotoneStar style={{ color: "gray" }} />
                    <AiTwotoneStar style={{ color: "gray" }} />
                  </div>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Inventore dolorem corporis voluptate dolorum officiis natus!
                  </p>
                  <div className="person">
                    <img src={img3} alt="" />
                    <h1>Leila</h1>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="card">
                  <div className="stars">
                    <AiTwotoneStar style={{ color: "gray" }} />
                    <AiTwotoneStar style={{ color: "gray" }} />
                    <AiTwotoneStar style={{ color: "gray" }} />
                    <AiTwotoneStar style={{ color: "gray" }} />
                    <AiTwotoneStar style={{ color: "gray" }} />
                  </div>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Inventore dolorem corporis voluptate dolorum officiis natus!
                  </p>
                  <div className="person">
                    <img src={img4} alt="" />
                    <h1>Stive</h1>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="card">
                  <div className="stars">
                    <AiTwotoneStar style={{ color: "gray" }} />
                    <AiTwotoneStar style={{ color: "gray" }} />
                    <AiTwotoneStar style={{ color: "gray" }} />
                    <AiTwotoneStar style={{ color: "gray" }} />
                    <AiTwotoneStar style={{ color: "gray" }} />
                  </div>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Inventore dolorem corporis voluptate dolorum officiis natus!
                  </p>
                  <div className="person">
                    <img src={img5} alt="" />
                    <h1>Abraham</h1>
                  </div>
                </div>
              </div>
            </Slider>
          </Slider>
        </CarouselWrapper>
      </Wrapper>
    </Container>
  );
};

export default Reviews;
