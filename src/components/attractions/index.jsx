import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../../context/languageToggle/language";
import { dataAttractions } from "../../mockData/dataAttractions";
import { Container, Hero, Wrapper } from "./style";

const Attractions = () => {
  const navigate = useNavigate()
  const [language, setLanguage] = useContext(LanguageContext);
  return (
    <Container>
      <Wrapper>
        <Hero>
          {language == "English" ? (
            <>
              <h1 className="heading">Photo gallery</h1>
              <p className="text">
                Places, people, events - all the most intriguing in our Photo
                gallery
              </p>
            </>
          ) : (
            <>
              <h1 className="heading">Fotogalereya</h1>
              <p className="text">
                Joylar, odamlar, voqealar - bularning barchasi bizning
                fotosuratimizdagi eng qiziqarli galereya.
              </p>
            </>
          )}
          <div className="photos">
            {dataAttractions.map((item) => {
              return (
                <div
                  className="card"
                  key={item.id}
                  onClick={() => navigate(`attraction/${item.title}`)}
                >
                  <a>{item.img}</a>
                  <div className="wrapper">
                    <h1 className="title">{item.title}</h1>
                  </div>
                </div>
              );
            })}
          </div>
        </Hero>
      </Wrapper>
    </Container>
  );
};

export default Attractions;
