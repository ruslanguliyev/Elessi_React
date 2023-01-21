import React from 'react'
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const BigMenuSlider = () => {
  return (
    <div className="container">
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={2}
      navigation
      autoplay={{ delay: 2000 }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop={true}
    >
      <SwiperSlide>
      
      </SwiperSlide>
    
    </Swiper>
  </div>
  )
}

export default BigMenuSlider