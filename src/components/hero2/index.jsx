import React, { useContext } from "react";
import img1 from "../../assets/images/cardImages/registan.jpg";
import { Blur, Container, Hero, Wrapper } from "./style";
import img from "../../assets/images/cardImages/registan.jpg";
import Button from "../Generics/Button/Button";
import { LanguageContext } from "../../context/languageToggle/language";

const Hero2 = () => {
  const [language, setLanguage] = useContext(LanguageContext)
  return (
    <Container>
      <Wrapper>
        <Hero
          style={{
            backgroundImage: `url(${img})`,
          }}
        >
          <div className="content">
            {language === "English" ? (
              <>
                <h1>GET SPECIAL DISCOUNTS WHEN YOU REGISTER!</h1>
                <p>
                  And, of course, we run this site, so you can look at
                  Uzbekistan in a new way, discover its most beautiful and
                  unexplored places and understand that Uzbekistan is not only
                  the heritage of the Great Silk road and historical cities,
                  included in the UNESCO World Heritage List, but also an
                  extremely beautiful nature in the foothills of the Tien Shan
                  range and Pamir spurs, desert castles of ancient
                  civilizations, rich culture and history, delicious cuisine of
                  the East and surprisingly hospitable people.
                </p>
                <Button width="180px">Send Message</Button>
              </>
            ) : (
              <>
                <h1>
                  RO'YXATDAN O'TGANINGIZDA MAXSUS CHEGIRMALARGA EGA BO'LING!
                </h1>
                <p>
                  Va, albatta, biz ushbu saytni boshqaramiz, shuning uchun siz
                  ko'rishingiz mumkin O'zbekistonni yangicha, uning eng go'zal
                  va go'zalligini kashf eting o'rganilmagan joylar va
                  O'zbekiston nafaqat ekanligini tushunish Buyuk Ipak yo‘li
                  merosi va tarixiy shaharlar, YuNESKOning Butunjahon merosi
                  roʻyxatiga kiritilgan, balki bir Tyan-Shan etaklarida
                  nihoyatda go'zal tabiat tog' tizmasi va Pomir tog'lari,
                  qadimiy cho'l qal'alari tsivilizatsiyalari, boy madaniyati va
                  tarixi, mazali taomlari Sharq va hayratlanarli darajada
                  mehmondo'st odamlar.
                </p>
                <Button width="180px">Xabar Yuborish</Button>
              </>
            )}
          </div>
          <Blur />
        </Hero>
      </Wrapper>
    </Container>
  );
};

export default Hero2;
