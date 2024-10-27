import React, { useState } from 'react';
import { Box, Flex, Text, Button } from '@radix-ui/themes';
import { Popover, PopoverTrigger, PopoverContent } from '@radix-ui/react-popover';
import { CiShoppingBasket } from "react-icons/ci";
import styles from './styles.module.css';
import { useCart } from '../context';
import CartItem from '../CartItem';


type Item = {
  id: number;
  name: string;
  price: number;
  src:string;
};

const itemsInCart: Item[] = [
  { id: 1, name: "Art Piece A", price: 120,src:'https://product-page-orcin-phi.vercel.app/assets/image-product-4-DXKEAM1K.jpg' },
  { id: 2, name: "Art Piece B", price: 85,src:'https://product-page-orcin-phi.vercel.app/assets/image-product-4-DXKEAM1K.jpg' },
];

const Navbar: React.FC = () => {
    const { items } = useCart();
  return (
    <Flex justify="between" align="center" p="20px" className={styles.navbar} style={{ backgroundColor: '#f5f5f5' }}>
      <Text  as='p' weight="bold" ml="20px">
        SNEAKER
      </Text>
      <CartItem items={items}>
          <Button variant="ghost" className={styles.shopIcon} style={{ position: 'relative', padding: 0 }}>
            <CiShoppingBasket style={{width:'40px', height:'40px'}} />
            {items.length > 0 && (
              <Box
                as="span"
                style={{
                  position: 'absolute',
                  top: '-5px',
                  right: '-5px',
                  background: 'red',
                  color: 'white',
                  borderRadius: '50%',
                  padding: '2px 6px',
                  fontSize: '0.75rem',
                }}
              >
                {items.length}
              </Box>
            )}
          </Button>
    </CartItem>
    </Flex>
  );
};

export default Navbar;
