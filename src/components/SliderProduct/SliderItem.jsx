import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import './sliderItem.scss';
const SliderItem = ({ item }) => {
    return (
        <>
            <Swiper

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
                {
                    item?.map((data, index) => (
                        <SwiperSlide key={index}>
                            <div className="slider_img">
                                <img className='cover_img' src={data.coverPhoto} alt="" />
                            </div>
                            <div className="slider_info">
                                <h2 className='cover_title'>{data.title}</h2>
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </>
    )
}

export default SliderItem