import React from "react";
import Slider from "react-slick";
import { Container, Slide, Wrapper } from "./style";
import img1 from "../../assets/images/cardImages/bukhara.jpg";
import img2 from "../../assets/images/cardImages/samarkand.jpg";
import img3 from "../../assets/images/cardImages/tashkent.jpg";
import img4 from "../../assets/images/cardImages/khiva.jpg";

const SmallCarousel = () => {
  return (
    <Container>
      <Wrapper>
        <Slider 
        autoplay={true}
        dots={true} 
        draggable={true}
        slidesToShow={3}
        pauseOnHover={false}
        speed={3000}
        >
          <Slide>
            <div className="card">
              <img src={img1} alt="" />
              <div className="title">
                <p>Bukhara</p>
              </div>
            </div>
          </Slide>
          <Slide>
            <div className="card">
              <img src={img2} alt="" />
              <div className="title">
                <p>Samarkand</p>
              </div>
            </div>
          </Slide>
          <Slide>
            <div className="card">
              <img src={img3} alt="" />
              <div className="title">
                <p>Tashkent</p>
              </div>
            </div>
          </Slide>
          <Slide>
            <div className="card">
              <img src={img4} alt="" />
              <div className="title">
                <p>Khorazm</p>
              </div>
            </div>
          </Slide>
        </Slider>
      </Wrapper>
    </Container>
  );
};

export default SmallCarousel;
