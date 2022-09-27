import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { LanguageContext } from "../../context/languageToggle/language";
import { dataAttraction } from "../../mockData/dataAttractions";
import SmallCarousel from "../CarouselSmall";
import Footer from "../Footer";
import { Container, Section, Wrapper } from "./style";

const Attraction = () => {
  const params = useParams();
  const [language, setLanguage] = useContext(LanguageContext)
  return(
    <div>
      {dataAttraction.map(item => {
        if(params.city == item.title){
          return (
            <div key={item.id}>
              <i>{item.img}</i>
              <Container>
                <Wrapper>
                  <Section>
                    {language === "English" ? (
                      <>
                        <h1>{item.title}</h1>
                        <p>{item.textEnglish}</p>
                      </>
                    ) : (
                      <>
                        <h1>{item.titleUzb}</h1>
                        <p>{item.textEnglish}</p>
                      </>
                    )}
                  </Section>
                </Wrapper>
              </Container>
              <SmallCarousel/>
              <Footer/>
            </div>
          );
        }
      })}
    </div>

  )
};

export default Attraction;
