import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import i18n from '../../i18n';
import { useNavigate } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import { addToCart } from '../../redux/state/cartSlice';
import { Box, IconButton, Typography } from '@mui/material';
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { shades } from '../../theme/theme'





const ProductCard = ({ item }) => {

    const { cart } = useSelector((state) => state);
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [count, setCount] = useState(0);






    return (

        <div className="card_item" >
            <div className="img_case" onClick={() => navigate(`/shop/${item.id}`)}>
                <img className='product_pictures' src={item.productPictures} alt="" />
                <img className='cover_photo' src={item.coverPhoto} alt="" />
            </div>
            <div className="card_icon">
                <i class="ri-heart-line"></i>
                <i id='hover_icon' class="ri-eye-line"></i>
                <i onClick={() => {
                    dispatch(addToCart({ item: { ...item, count } }));
                }} id='hover_icon' class="ri-shopping-bag-line"></i>
            </div>
            <Box display="flex" justifyContent="space-between">
                <Box
                    display="flex"
                    alignItems="center"
                    backgroundColor={shades.neutral[100]}
                    borderRadius="3px"
                >
                    <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                        <RemoveIcon />
                    </IconButton>
                    <Typography color={shades.primary[300]}>{count}</Typography>
                    <IconButton onClick={() => setCount(count + 1)}>
                        <AddIcon />
                    </IconButton>
                </Box>
            </Box>
            <div className="card_info">
                <h5>{item.title}</h5>
                <p>${item.price}</p>
            </div>
        </div>



    )
}

export default ProductCard



