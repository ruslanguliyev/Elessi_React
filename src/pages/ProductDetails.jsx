import { Box, Button, Container, Grid, IconButton, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import '../style/productDetail.scss'
import { shades } from '../theme/theme'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/state/cartSlice'
import ProductList from '../components/UI/ProductList'

const ProductDetail = () => {
  const id = useParams();
  const [singleProduct, setSingleProduct] = useState(null);
  const dispatch = useDispatch();
  const [item, setItem] = useState(null);
  const [count, setCount] = useState(1);




  const getProductById = (myId) => {
    fetch(`http://askerov10-001-site1.btempurl.com/api/product/get/${myId}`)
      .then((pr) => pr.json())
      .then((pr) => setSingleProduct(pr.data));
  };
  useEffect(() => {
    getProductById(id.id)
  }, [id])


  return (
    <>
      <div className="product__detail">
        <Container maxWidth='lg'>
          {singleProduct !== null ? (
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <div className="img_content">
                  <img className='pr_coverPhoto' src={singleProduct.coverPhoto} alt="" />
                  <img src={singleProduct.productPictures} alt="" />
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <div className="product_info">
                  <h2>{singleProduct.title}</h2>
                  <h1>${singleProduct.price}</h1>
                  <p>{singleProduct.description}</p>
                </div>
                <Box display="flex" alignItems="center" minHeight="50px">
                  <Box
                    display="flex"
                    alignItems="center"
                    border={`1.5px solid ${shades.neutral[300]}`}
                    mr="20px"
                    p="2px 5px"
                  >
                    <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                      <RemoveIcon />
                    </IconButton>
                    <Typography sx={{ p: "0 5px" }}>{count}</Typography>
                    <IconButton onClick={() => setCount(count + 1)}>
                      <AddIcon />
                    </IconButton>
                  </Box>
                  <Button
                    sx={{
                      backgroundColor: "#95BF47",
                      color: "white",
                      borderRadius: 0,
                      minWidth: "150px",
                      padding: "10px 40px",
                    }}
                    onClick={() => dispatch(addToCart({ item: { ...item, count } }))}
                  >
                    ADD TO CART
                  </Button>
                </Box>
              </Grid>
            </Grid>
          ) : (
            <p>Loading</p>
          )
          }

        </Container>
      </div>

    </>
  )
}

export default ProductDetail