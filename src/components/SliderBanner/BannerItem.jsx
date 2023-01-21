import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './bannerSlider.scss'
import BannerSliderItem from './BannerSliderItem';

const BannerItem = ({ item }) => {
  
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                {
                    item?.map((data, index) => (
                        <SwiperSlide>
                               <BannerSliderItem key={index} item={data} position = {index} />
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </>
    )
}

export default BannerItem