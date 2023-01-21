import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import '../../style/home.scss'
import { useTranslation } from "react-i18next";
import i18n from '../../i18n'
import React from 'react'

const Banner = () => {

    const { t } = useTranslation();
    return (
        <section className='promo_banner'>
            <Container maxWidth='lg'>
                <section className='products'>
                    <Container maxWidth='lg'>
                        {/* <HeroSlider /> */}

                    </Container>
                </section>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <div className="narrowest_bike pointer">
                            <img src="https://cdn.shopify.com/s/files/1/0085/5618/3637/files/bike-banner-1_570x.jpg?v=1613676685" alt="" />
                            <div className="na_txt">
                                <h2>{t('The narrowest bike')}</h2>
                                <p>{t('Sale Off 50%')}</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <div className="mix_box">
                            <div className="composants pointer">
                                <img src="https://cdn.shopify.com/s/files/1/0085/5618/3637/files/bike-banner-2_720x.jpg?v=1613676685" alt="" />
                                <div className="co_txt">
                                    <h2>{t("Composants")}</h2>
                                    <p>{t("Sale Off 30%")}</p>
                                </div>
                            </div>
                            <div className="equiment pointer">
                                <img src="https://cdn.shopify.com/s/files/1/0085/5618/3637/files/bike-banner-3_720x.jpg?v=1613676685" alt="" />
                                <div className="eq_txt">
                                    <h1>{t('Bike Equiment')}
                                        <br />
                                        {t('& Accessories')}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default Banner