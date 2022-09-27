import React, { useContext } from 'react'
import Content from '../components/Content'
import img from '../assets/images/cardImages/bukhara.jpg'
import { LanguageContext } from '../context/languageToggle/language'
import Footer from '../components/Footer'
import Attractions from '../components/attractions'
import SmallCarousel from '../components/CarouselSmall'

const Cities = () => {
  const [language, setLanguage] = useContext(LanguageContext)
  return (
    <>
    <Content image={img} title={language === 'English' ? 'Attractions' : 'Diqqatga sazovor joylar'}/>
    <Attractions/>
    <SmallCarousel/>
    <Footer/>
    </>
  )
}

export default Cities