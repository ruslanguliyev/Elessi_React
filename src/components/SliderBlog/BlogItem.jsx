import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Container } from '@mui/material';
import './blogItem.scss'

const BlogItem = ({ item }) => {
    return (
        <>
            <Container maxWidth='lg'>
                <Swiper
                    navigation={true}
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    slidesPerView={3}
                    spaceBetween={20}
                    className="mySwiper"
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}
                >
                    {
                        item?.map((data, index) => (
                            <SwiperSlide>
                                <div className="blog_content">
                                    <div className="img_blog">
                                        <img src={data.photoUrl} alt="" />
                                    </div>
                                    <div className="blog_info">
                                        <h5>{data.title}</h5>
                                        <h2>{data.description}</h2>
                                        <p></p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))

                    }

                </Swiper>
            </Container>


        </>


    )
}

export default BlogItem