import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Blog from '../pages/Blog'
import Home from '../pages/Home'
import ProductDetails from '../pages/ProductDetails'
import Shop from '../pages/Shop'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home' />}/>
        <Route path='home' element={<Home />}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='shop/:id' element={<ProductDetails/>}/>
        <Route path='blog' element={<Blog/>}/>
    </Routes>
  )
}

export default Routers