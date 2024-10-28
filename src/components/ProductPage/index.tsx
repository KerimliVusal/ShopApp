import React from 'react';
import './index.css';
import { ProductSlider } from '..';
import { ProductInfo } from '..';
import { Box, Flex } from '@radix-ui/themes';

const ProductPage: React.FC = () => {
  return (
    <Box mt="150px" className="product-page-container">
      <Flex align="center" className="product-page-flex">
        <ProductSlider />
        <ProductInfo />
      </Flex>
    </Box>
  );
};

export default ProductPage;
