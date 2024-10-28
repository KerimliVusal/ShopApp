import React, { useState } from 'react';
import { Box, Flex, Heading, Text } from '@radix-ui/themes';
import styles from './index.module.css'
import CustomButton from '../Button';
import { BookmarkFilledIcon, BookmarkIcon, MinusIcon, PlusIcon } from '@radix-ui/react-icons';
import { useCart } from '../context';
import {toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import SizeContainer from '../SizeContainer';

const ProductInfo: React.FC = () => {
    const { items,addItem,removeItem,counter,handleCountChange,added,setAdded} = useCart();
    type CartItem = {
        id: number;
        name: string;
        price: number;
        src:string;
      };

    const handleAddItem = (value:CartItem) => {
        setAdded(!added)
        addItem(value)
        toast.success("Product added to cart!", {
            position: "top-right",
            autoClose: 700,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            // progress: undefined,
          });
        };
    const handleRemoveItem = (value:CartItem) => {
        setAdded(!added)
        removeItem(value?.id)
        toast.error("Product removed from cart!", {
            position: "top-right",
            autoClose: 700,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            // progress: undefined,
          });
    };
    return (
        <Box width='100%' mt='50px'>
            <Flex justify='center'>
                <Box maxWidth='80%'>
                    <Heading as='h2' className={styles.infoHeader} style={{ fontSize: '25px' }} mb='20px'>SNEAKER COMPANY</Heading>
                    <Box maxWidth='80%' mb='30px'>
                        <Text style={{ fontSize: '54px', fontWeight: '600', letterSpacing: '3.2px' }} >
                            Fall Limited Edition Sneakers</Text>
                    </Box>
                    <Box maxWidth='90%'>
                        <Text style={{ fontSize: '24px', color: '#68707d', letterSpacing: '1.2px' }} mt='20px'>
                            These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
                        </Text>
                    </Box>
                    <Box as='div' mt='70px' maxWidth='30%' height='50px'>
                        <Flex gap='1' justify='between' align='center'>
                            <Box as='span' className={styles.price}>
                                <Text as='p' style={{ fontSize: '50px' }}> $125.00</Text>
                            </Box>
                            <Box as='span' className={styles.discount} mt='3px'>
                                <Text as='span'>50%</Text>
                            </Box>
                        </Flex>
                        <Text className={styles.discountedPrice} >
                            $250.00
                        </Text>
                    </Box>
                    <Box mt='150px' minWidth='100%'>
                        <Flex justify='between' align='center'>
                       <SizeContainer handleCountChange={handleCountChange} counter={counter} changeStyle={false}/>
                        <Box minWidth='70%'>
                        <CustomButton cartItem={false}>
                            {added?<BookmarkFilledIcon className={styles.addIcon} onClick={()=>handleRemoveItem({ id: 1, name: 'Art Piece A', price: 120,src:'https://product-page-orcin-phi.vercel.app/assets/image-product-4-DXKEAM1K.jpg'})}/>:<BookmarkIcon className={styles.addIcon} onClick={()=>handleAddItem({ id: 1, name: 'Art Piece A', price: 120,src:'https://product-page-orcin-phi.vercel.app/assets/image-product-4-DXKEAM1K.jpg'})}/>} <Text style={{fontSize:'24px'}}>Add to cart</Text>
                        </CustomButton>
                        </Box>
                        </Flex>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
};

export default ProductInfo;
