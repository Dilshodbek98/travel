import React, { useContext } from "react";
import Slider from "react-slick";
import { Blur, Container, Wrapper } from "./style";
import img1 from "../../assets/images/zamin.jpg";
import img2 from "../../assets/images/cusine.jpg";
import img3 from "../../assets/images/architecture.jpg";
import img4 from "../../assets/images/culture.jpg";
import img5 from "../../assets/images/folk.jpg";
import { LanguageContext } from "../../context/languageToggle/language";
import Button from "../Generics/Button/Button";
import { useNavigate } from "react-router-dom";

const CarouselBig = () => {
  const navigate = useNavigate()
  const settings = {
    dots: true,
    arrow: true,
    autoplay: true,
    loop: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    speed: 2000,
    autoplaySpeed: 2000,
    pauseOnHover: false,
  };
  const [language, setLanguage] = useContext(LanguageContext);
  return (
    <Container>
      <Slider {...settings} className="carousel">
        <div className="slide">
          <img src={img1} alt="" />
          <div className="text">
            {language === "English" ? (
              <Wrapper>
                <h1 className="carousel-heading">Nature</h1>
                <p className="carousel-text">
                  Picturesque mountains, blooming valleys, hot deserts, rivers{" "}
                  and crystal lakes all this beauty you can enjoy in here
                  Uzbekistan{" "}
                </p>
                  <Button
                    className="button"
                    onClick={() => navigate("/attractions")}
                  >
                    More
                  </Button>
              </Wrapper>
            ) : (
              <Wrapper>
                <h1 className="carousel-heading">Tabiat</h1>
                <p className="carousel-text">
                  Go'zal tog'lar, gullagan vodiylar, issiq cho'llar, daryolar va
                  billur ko'llar bu go'zallikdan bahramand bo'lishingiz mumkin
                  O'zbekiston{" "}
                </p>
                <Button onClick={() => navigate("/attractions")}>
                  Ko'proq
                </Button>
              </Wrapper>
            )}
          </div>
          <Blur />
        </div>
        <div className="slide">
          <img src={img2} alt="" />
          <div className="text">
            {localStorage.getItem("language") === "English" ? (
              <Wrapper>
                <h1 className="carousel-heading">Uzbek Cuisine</h1>
                <p className="carousel-text">
                  Fragrant pilaf, delicious kazan-kabob, samsa, bread and hot{" "}
                  shurpa - amaze the residents and guests of Uzbekistan with{" "}
                  their color and incomparable taste.
                </p>
                <Button onClick={() => navigate("/attractions")}>More</Button>
              </Wrapper>
            ) : (
              <Wrapper>
                <h1 className="carousel-heading">O'zbek oshxonasi</h1>
                <p className="carousel-text">
                  Xushbo'y palov, mazali qozon-kabob, samsa, non va issiq shurpa
                  - O'zbekiston aholisi va mehmonlarini bilan hayratda
                  qoldiring. ularning rangi va beqiyos ta'mi.
                </p>
                <Button onClick={() => navigate("/attractions")}>
                  Ko'proq
                </Button>
              </Wrapper>
            )}
          </div>
          <Blur />
        </div>
        <div className="slide">
          <img src={img3} alt="" />
          <div className="text">
            {localStorage.getItem("language") === "English" ? (
              <Wrapper>
                <h1 className="carousel-heading">Architecture</h1>
                <p className="carousel-text">
                  Magnificent architectural ensembles, palaces, mosques and
                  minarets decorated with blue mosaics and colorful paintings
                  have been striking the eyes of millions of guests of
                  Uzbekistan for many centuries
                </p>
                <Button onClick={() => navigate("/attractions")}>More</Button>
              </Wrapper>
            ) : (
              <Wrapper>
                <h1 className="carousel-heading">Arxitektura</h1>
                <p className="carousel-text">
                  Ajoyib me'moriy ansambllar, saroylar, masjidlar va ko'k
                  mozaika va rang-barang rasmlar bilan bezatilgan minoralar{" "}
                  O'zbekistonning millionlab mehmonlari ko'zini ko'p asrlar
                  davomida hayratda qoldirdi .
                </p>
                <Button onClick={() => navigate("/attractions")}>
                  Ko'proq
                </Button>
              </Wrapper>
            )}
          </div>
          <Blur />
        </div>
        <div className="slide">
          <img src={img4} alt="" />
          <div className="text">
            {localStorage.getItem("language") === "English" ? (
              <Wrapper>
                <h1 className="carousel-heading">
                  Cultural heritage of Uzbekistan
                </h1>
                <p className="carousel-text">
                  The culture of Uzbekistan has a rich history, which was
                  inextricably linked by centuries-old traditions and lifestyle
                  of the peoples of Central Asia
                </p>
                <Button onClick={() => navigate("/attractions")}>More</Button>
              </Wrapper>
            ) : (
              <Wrapper>
                <h1 className="carousel-heading">
                  O'zbekistonning madaniy merosi
                </h1>
                <p className="carousel-text">
                  O'zbekiston madaniyati boy tarixga ega bo'lgan ko'p asrlik
                  an'analar va turmush tarzi bilan uzviy bog'langan ning
                  Markaziy Osiyo xalqlari
                </p>
                <Button onClick={() => navigate("/attractions")}>
                  Ko'proq
                </Button>
              </Wrapper>
            )}
          </div>
          <Blur />
        </div>
        <div className="slide">
          <img src={img5} alt="" />
          <div className="text">
            {localStorage.getItem("language") === "English" ? (
              <Wrapper>
                {" "}
                <h1 className="carousel-heading">Folk art</h1>
                <p className="carousel-text">
                  Unique patterns weawing products of applied art of Uzbekistan,
                  the deep meaning and significance of which have been formed
                  over many centuries
                </p>
                <Button onClick={() => navigate("/attractions")}>More</Button>
              </Wrapper>
            ) : (
              <Wrapper>
                {" "}
                <h1 className="carousel-heading">Xalq ijodi</h1>
                <p className="carousel-text">
                  Amaliy san'ati mahsulotlarini tikuvchi noyob naqshlar
                  O'zbekiston, uning chuqur ma'no va ahamiyati ko'p asrlar
                  davomida shakllangan
                </p>
                <Button onClick={() => navigate("/attractions")}>Ko'proq</Button>
              </Wrapper>
            )}
          </div>
          <Blur />
        </div>
      </Slider>
    </Container>
  );
};

export default CarouselBig;
