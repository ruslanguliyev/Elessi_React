import { Container, Grid } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import ProductCard from '../UI/ProductCard';



const EquimentSlider = ({ data }) => {
    return (
        <Container maxWidth='lg'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={0}
                slidesPerView={4}
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
                {data?.map((data, index) => (
                    <SwiperSlide>

                        <ProductCard item={data} />
                    </SwiperSlide>
                ))}


            </Swiper>
        </Container>
    )
}

export default EquimentSlider