import React, { useEffect, useState } from 'react'
import SliderItem from './SliderItem'


const ProductsSlider = ({ data }) => {


  return (
    <>
        <SliderItem item={data} />
    </>

  )
}

export default ProductsSlider