import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import img1 from '../assets/img/banner_Hero1.jpg'
import img2 from '../assets/img/banner_Hero2.jpg'
import img3 from '../assets/img/banner_Hero3.jpg'
import { Link } from "react-router-dom";
const HeroSlider = () => {
  return (
    <>
    <div className="hero">
        <div className="container">
            <Swiper
            loop={true}
     
      

      pagination={{ dynamicBullets: true }}
      autoplay={{ delay: 2500 }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="content">
            <h4>Interducing the new </h4>
            <h3>Microsoft Xbox  <br /> 360 Controller</h3>
            <p>Windows xp/10/11/7/8 ps3,tv Box</p>
            <Link to='/' className='btn'> Shop Now</Link>
        </div>
        <img src={img1} alt=" slider 1" />
      </SwiperSlide>
      <SwiperSlide>
        <div className="content">
            <h4>Interducing the new </h4>
            <h3>Microsoft Xbox  <br /> 360 Controller</h3>
            <p>Windows xp/10/11/7/8 ps3,tv Box</p>
            <Link to='/' className='btn'> Shop Now</Link>
        </div>
        <img src={img2} alt=" slider 1" />
      </SwiperSlide>
      <SwiperSlide>
        <div className="content">
            <h4>Interducing the new </h4>
            <h3>Microsoft Xbox  <br /> 360 Controller</h3>
            <p>Windows xp/10/11/7/8 ps3,tv Box</p>
            <Link to='/' className='btn'> Shop Now</Link>
        </div>
        <img src={img3} alt=" slider 1" />
      </SwiperSlide>
    </Swiper>
        </div>
    </div>
    </>
  );
};

export default HeroSlider;