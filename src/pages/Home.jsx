import React from "react";
import { useContext } from "react";
import Attractions from "../components/attractions";
import CarouselBig from "../components/CarouselBig";
import SmallCarousel from "../components/CarouselSmall";
import Footer from "../components/Footer";
import Hero1 from "../components/hero1";
import Hero2 from "../components/hero2";
import Navbar from "../components/Navbar/navbar";
import Reviews from "../components/Reviews";
import { LanguageContext } from "../context/languageToggle/language";

const Home = () => {
  return (
    <div style={{ width: "100%" }}>
      <CarouselBig />
      <Hero1/>
      <SmallCarousel />
      <Attractions/>
      <Hero2/>
      <Reviews/>
      <Footer/>
    </div>
  );
};

export default Home;
