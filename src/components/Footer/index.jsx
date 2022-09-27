import React, { useContext } from 'react'
import { LanguageContext } from '../../context/languageToggle/language';
import { Container, Section, Wrapper } from './style'

const Footer = () => {
  const [language,setLanguage] = useContext(LanguageContext)
  return (
    <Container>
      <Wrapper>
        {language === "English" ? (
          <>
            {" "}
            <Section>
              <h1>Place an order</h1>
              <a href="#">Discount</a>
              <a href="#">Communication</a>
              <a href="#">Foreign tourism</a>
            </Section>
            <Section>
              <h1>Cotact Us</h1>
              <a href="#">
                Feel free to contact and reach us! And try to do so
              </a>
              <a href="#">+998979999999</a>
              <a href="email:Tourizm.uz@gmail.gom">Tourizm.uz@gmail.gom</a>
            </Section>
            <Section>
              <h1>Welcome to Uzbekistan!</h1>
              <a href="#">
                This page contains information about the survey of travel
                agencies in Uzbekistan. This directory gives you their addresses
                and phone numbers.
              </a>
            </Section>
          </>
        ) : (
          <>
            <Section>
              <h1>Buyurtma bering</h1>
              <a href="#">Chegirma</a>
              <a href="#">Aloqa</a>
              <a href="#">Xorijiy turizm</a>
            </Section>
            <Section>
              <h1>Biz bilan bog'lanish</h1>
              <a href="#">
                Biz bilan bog'laning va yetib keling! Va shunday qilishga
                harakat qiling
              </a>
              <a href="tel:+998979999999">+998979999999</a>
              <a href="email:Tourizm.uz@gmail.gom">Tourizm.uz@gmail.gom</a>
            </Section>
            <Section>
              <h1>O'zbekistonga xush kelibsiz!</h1>
              <a href="#">
                Ushbu sahifada sayyohlik agentliklari so'rovi haqida ma'lumotlar
                mavjud O'zbekistonda. Ushbu katalog sizga ularning manzillari va
                telefon raqamlarini beradi.
              </a>
            </Section>
          </>
        )}
      </Wrapper>
    </Container>
  );
}

export default Footer