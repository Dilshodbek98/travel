import React from 'react'
import { useContext } from 'react';
import Content from '../components/Content';
import { LanguageContext } from '../context/languageToggle/language';
import img from '../assets/images/architecture.jpg'
import Footer from '../components/Footer';
import AboutUsComponent from '../components/aboutUs';

const AboutUs = () => {
   const [language, setLanguage] = useContext(LanguageContext);
   return (<>
     <Content
       image={img}
       title={language === "English" ? "About Us" : "Biz haqimizda"}
       />
       <AboutUsComponent/>
<Footer/>
       </>
   );
}

export default AboutUs