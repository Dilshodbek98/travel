import React, { useContext } from 'react'
import Content from '../components/Content'
import img from '../assets/images/cardImages/samarkand.jpg' 
import { LanguageContext } from '../context/languageToggle/language'
import Footer from '../components/Footer'
import GuideComponent from '../components/guide'
import Reviews from '../components/Reviews'
const Guide = () => {
  const [language, setLanguage] = useContext(LanguageContext)
  return (
    <>
    <Content image={img} title={language === 'English' ? 'Guide' : "Ko'rsatmalar"}/>
    <GuideComponent/>
    <Reviews/>
    <Footer/>
    </>
  )
}

export default Guide