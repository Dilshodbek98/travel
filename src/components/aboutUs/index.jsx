import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../../context/languageToggle/language";
import Reviews from "../Reviews";
import { Container, Section, Wrapper } from "./stule";

const AboutUsComponent = () => {
  const [language, setLanguage] = useContext(LanguageContext)
  return (
    <Container>
      <Wrapper>
        <Section>
          {language === "English" ? (
            <>
              <h1>
                The National Webbrain team is happy to welcome you to
                Uzbekistan. Travel - tourists information website!
              </h1>
              <p>
                The history of creation of our organization begins in 2018, when
                the government of Uzbekistan decided to show the world all the
                beauty of our country, the identity of its ancient cities and
                the uniqueness of the routes unknown before!
              </p>
              <p>
                For these purposes, in February, 2022, by President Decree No.
                PD-5326, the State Unitary Enterprise "Webbrain Academy" was
                established as part of the State Committee of the Republic of
                Uzbekistan for Tourism Development (now the Ministry of Tourism
                and cultural heritage), which allowed us to take a fresh look at
                the huge tourist opportunities of the country, create a
                completely new brand of Uzbekistan and promote it far beyond the
                borders of the republic.Our team consists of 40 talented and
                creative specialists, generators of new ideas, who truly fell in
                love with their land and promote its tourist opportunities,
                under the leadership of a young and ambitious leader Sardorbek
                Mukhtorov.Today, the National PR-Center team is engaged in
                promoting the tourism brand of Uzbekistan abroad, carrying out a
                variety of activities.
              </p>
              <p>
                And, of course, we run this site, so you can look at Uzbekistan
                in a new way, discover its most beautiful and unexplored places
                and understand that Uzbekistan is not only the heritage of the
                Great Silk road and historical cities, included in the UNESCO
                World Heritage List, but also an extremely beautiful nature in
                the foothills of the Tien Shan range and Pamir spurs, desert
                castles of ancient civilizations, rich culture and history,
                delicious cuisine of the East and surprisingly hospitable
                people.
              </p>
              <p>
                Contact: “Webbrain Team, State Unitary Enterprise”,
                State Unitary Enterprise
              </p>
              <p>
                Address: 18, Oybek street, Tashkent, 100015, Republic of
                Uzbekistan
              </p>
              <p>
                Email:
                <a href="mailto: dilshodbekboymamatov98@gmail.com">
                  {" "}
                  dilshodbekboymamatov98@gmail.com
                </a>
              </p>
            </>
          ) : (
            <>
              <h1>
                Milliy Webbrain jamoasi sizni mamnuniyat bilan kutib oladi
                O'zbekiston. Sayohat - turistlar haqida ma'lumot sayti!
              </h1>
              <p>
                Tashkilotimizning yaratilish tarixi 2018 yilda boshlanadi
                O'zbekiston hukumati butun dunyoga ko'rsatishga qaror qildi
                yurtimiz go‘zalligi, qadimiy shaharlarining o‘ziga xosligi va
                ilgari noma'lum bo'lgan marshrutlarning o'ziga xosligi!
              </p>
              <p>
                Shu maqsadda 2022-yil fevral oyida Prezidentning 2022-yilning
                1-sonli farmoni bilan. PD-5326, "Vebbrain Akademiyasi" davlat
                unitar korxonasi edi Respublikasi Davlat qoʻmitasi tarkibida
                tashkil etilgan Oʻzbekiston Turizmni rivojlantirish (hozirgi
                Turizm vazirligi va madaniy meros), bu bizga yangicha qarash
                imkonini berdi mamlakatning ulkan turistik imkoniyatlari,
                yaratish a O'zbekistonning mutlaqo yangi brendi va uni
                chegaradan tashqarida ham targ'ib qilish respublika chegaralari.
                Jamoamiz 40 nafar iqtidorli va ijodkor mutaxassislar, yangi
                g'oyalar generatorlari, ular chinakamiga tushib qolgan o'z
                erlarini sevish va uning turistik imkoniyatlarini targ'ib
                qilish; yosh va intiluvchan rahbar Sardorbek boshchiligida
                Muxtorov.Bugungi kunda Milliy PR-markaz jamoasi shug'ullanadi
                O‘zbekistonning turistik brendini xorijda targ‘ib qilish, a
                turli tadbirlar.
              </p>
              <p>
                Va, albatta, biz ushbu saytni boshqaramiz, shuning uchun siz
                O'zbekistonga qarashingiz mumkin yangi usulda uning eng go'zal
                va o'rganilmagan joylarini kashf eting va O'zbekiston nafaqat
                xalqning merosi ekanligini tushunib yeting YUNESKOga kiritilgan
                Buyuk Ipak yoʻli va tarixiy shaharlar Butunjahon merosi
                ro'yxati, lekin ayni paytda juda go'zal tabiat Tyan-Shan togʻ
                etaklari va Pomir tizmasi, choʻl qadimiy tsivilizatsiya
                qal'alari, boy madaniyat va tarix, Sharqning mazali taomlari va
                hayratlanarli darajada mehmondo'st odamlar.
              </p>
              <p>
                Murojaat uchun: “Webbrain Team”, DUK”, Davlat unitar korxonasi
              </p>
              <p>
                Manzil: 100015, Toshkent sh., Chilonzor t, 18-uy O'zbekiston
              </p>
              <p>
                Email:
                <a href="mailto: dilshodbekboymamatov98@gmail.com">
                  {" "}
                  dilshodbekboymamatov98@gmail.com
                </a>
              </p>
            </>
          )}
          <Reviews />
        </Section>
      </Wrapper>
    </Container>
  );
};

export default AboutUsComponent;
