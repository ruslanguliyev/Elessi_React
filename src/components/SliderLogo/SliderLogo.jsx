import { Container } from '@mui/system'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


const SliderLogo = () => {
    return (
        <Container maxWidth='lg'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={0}
                slidesPerView={5}
                loop={true}
                breakpoints={{
                    320: {
                      slidesPerView: 2,
                      spaceBetween: 0,
                    },
                    768: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 6,
                      spaceBetween: 50,
                    },
                  }}
            >
                <SwiperSlide>
                    <img src={require('./ContentImage/brand-1.webp')} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={require('./ContentImage/brand-2.png')} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={require('./ContentImage/brand-3.png')} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={require('./ContentImage/brand-4.png')} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={require('./ContentImage/brand-5.png')} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={require('./ContentImage/brand-6.png')} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={require('./ContentImage/brand-2.png')} alt="" />
                </SwiperSlide>
            </Swiper>
        </Container >
    )
}

export default SliderLogo