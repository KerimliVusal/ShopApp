import React from 'react';
import './index.css';
import {ProductSlider} from '..';
import {ProductInfo} from '..';
import { Box, Flex } from '@radix-ui/themes';

const ProductPage: React.FC = () => {
    
  return (
    <Box mt='150px'>
    <Flex align='center'>
      <ProductSlider />
      <ProductInfo />
    </Flex>
    </Box>
  );
};

export default ProductPage;
