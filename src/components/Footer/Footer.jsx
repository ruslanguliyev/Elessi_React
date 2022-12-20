import { Grid} from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import './footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <Container maxWidth='lg'>
        <>
          <div className="footer_top">
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              {Array.from(Array(1)).map((_, index) => (
                <>
                  <Grid item xs={2} sm={3} md={3} key={index}>
                    <div className="footer_logo">
                      <img src="https://cdn.shopify.com/s/files/1/0085/5618/3637/files/bike-logo-retina_500x.png?v=1613676685" alt="" />
                    </div>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4} key={index}>
                    <div className="footer_icons">
                      <i class="ri-facebook-fill"></i>
                      <i class="ri-twitter-fill"></i>
                      <i class="ri-google-fill"></i>
                      <i class="ri-pinterest-fill"></i>
                      <i class="ri-instagram-line"></i>
                    </div>
                  </Grid>
                  <Grid item xs={4} sm={5} md={4} key={index}>
                    <div className="subscribe">
                      <h2>Newsletter</h2>
                      <input className='search_input' type="search" placeholder='Your email address' /><input className='button' type="submit" value='Subscribe' />
                    </div>
                  </Grid>
                </>
              ))}
            </Grid>
          </div>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {Array.from(Array(1)).map((_, index) => (
              <>
                < Grid item xs={12} sm={3} md={3} key={index} >
                  <ul>
                    <li>Calista Wise 7292 Dictum Av.</li>
                    <li>Antonio, Italy.</li>
                    <li>(+01)-800-3456-88</li>
                    <li>Nasathemes@Gmail.Com</li>
                    <li>Elessi.Nasatheme.Com</li>
                  </ul>
                </Grid >
                <Grid item xs={12} sm={3} md={3} key={index}>
                  <ul>
                    <li>Calista Wise 7292 Dictum Av.</li>
                    <li>Antonio, Italy.</li>
                    <li>(+01)-800-3456-88</li>
                    <li>Nasathemes@Gmail.Com</li>
                    <li>Elessi.Nasatheme.Com</li>
                  </ul>
                </Grid>
                <Grid item xs={12} sm={3} md={3} key={index}>
                  <ul>
                    <li>Calista Wise 7292 Dictum Av.</li>
                    <li>Antonio, Italy.</li>
                    <li>(+01)-800-3456-88</li>
                    <li>Nasathemes@Gmail.Com</li>
                    <li>Elessi.Nasatheme.Com</li>
                  </ul>
                </Grid>
                <Grid item xs={12} sm={3} md={3} key={index}>
                  <ul className='work_site'>
                    <li>
                      <span className='day-open'>Monday - Friday</span>
                      <span className='time-open'>08:00 - 20:00</span>
                    </li>
                    <li>
                      <span className='day-open'>Saturday</span>
                      <span className='time-open'>09:00 - 21:00</span>
                    </li>
                    <li>
                      <span className='day-open'>Sunday</span>
                      <span className='time-open'>13:00 - 22:00</span>
                    </li>
                  </ul>
                  <div className="payment_site">
                    <i class="ri-visa-fill"></i>
                    <i class="ri-mastercard-fill"></i>
                    <i class="ri-paypal-fill"></i>
                  </div>
                </Grid>
              </>

            ))}
          </Grid>
        </>


      </Container>
    </footer>
  )
}

export default Footer




