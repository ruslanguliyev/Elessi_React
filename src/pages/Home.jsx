import { Grid, ListItem } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import '../style/home.scss'

const Home = () => {
  return (
    <>
      <section className='promo_banner'>
        <Container maxWidth='lg'>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <div className="narrowest_bike pointer">
                <img src="https://cdn.shopify.com/s/files/1/0085/5618/3637/files/bike-banner-1_570x.jpg?v=1613676685" alt="" />
                <div className="na_txt">
                  <h2>The narrowest bike</h2>
                  <p>Sale Off 50%</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <div className="mix_box">
                <div className="composants pointer">
                  <img src="https://cdn.shopify.com/s/files/1/0085/5618/3637/files/bike-banner-2_720x.jpg?v=1613676685" alt="" />
                  <div className="co_txt">
                    <h2>Composants</h2>
                    <p>Sale Off 30%</p>
                  </div>
                </div>
                <div className="equiment pointer">
                  <img src="https://cdn.shopify.com/s/files/1/0085/5618/3637/files/bike-banner-3_720x.jpg?v=1613676685" alt="" />
                  <div className="eq_txt">
                    <h1>Bike Equiment
                      <br />
                      & Accessories
                    </h1>
                  </div>
                </div>
              </div>
            </Grid>

          </Grid>
        </Container>
      </section>
      <section className='brands_logo'>
        <Container maxWidth='lg'>
      
        </Container>
      </section>
    </>
  )
}

export default Home