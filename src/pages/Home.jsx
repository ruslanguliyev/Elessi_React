import React, { useEffect, useState } from 'react'
import ProductList from '../components/UI/ProductList'
import { BASE_URL } from '../api/BaseConfig'
import SliderLogo from '../components/SliderLogo/SliderLogo';
import ProductsSlider from '../components/SliderProduct/ProductsSlider';
import Banner from '../components/Banner/Banner';
import EquimentSlider from '../components/SliderEquiment/EquimentSlider';
import BlogSlider from '../components/SliderBlog/BlogSlider';
import BannerSlider from '../components/SliderBanner/BannerSlider';









const Home = () => {
  const [product, setProducts] = useState([])
  const fetchProducts = () => {
    fetch(`${BASE_URL}/product/getall`)
      .then(res => res.json())
      .then(data => setProducts(data.data))
  }
  useEffect(() => {
    fetchProducts()
  }, [])

  //==========================================================//
  const [blog, setBlogs] = useState([])
  const fetchBlogSlider = () => {
    fetch(`${BASE_URL}/blog/getall`)
      .then((res) => res.json())
      .then(data => setBlogs(data.data))
  }
  useEffect(() => {
    fetchBlogSlider()
  }, [])
  //===========================================================//

  const [banner, setBanners] = useState([])
  const fetchBannerSlider = () => {
    fetch(`${BASE_URL}/slider/getall`)
      .then((res) => res.json())
      .then(data => setBanners(data.data))
  }
  useEffect(() => {
    fetchBannerSlider()
  }, [])

//============================================================//


  return (
    <>
      <BannerSlider data={banner} />
      <Banner />
      <ProductList data={product} />
      <ProductsSlider data={product} />
      <EquimentSlider />
      <BlogSlider data={blog} />
      <SliderLogo />
    </>
  )
}

export default Home 