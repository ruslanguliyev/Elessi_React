import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import ProductCard from "./ProductCard";
import '../../style/productCard.scss'

const ProductList = ({ data }) => {

  return (
    <>
      <Container maxWidth='lg'>
        <Grid container spacing={{ xs: 1, sm: 2, md: 1 }} columns={{ xs: 8, sm: 9, md: 12 }}>
          {data?.map((data, index) => (
            <Grid item xs={8} sm={3} md={3} >
              <ProductCard item={data} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default ProductList;
