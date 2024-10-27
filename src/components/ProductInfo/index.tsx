import React, { useState } from 'react';
import { Box, Flex, Heading, Text } from '@radix-ui/themes';
import styles from './index.module.css'
import CustomButton from '../Button';
import { BookmarkFilledIcon, BookmarkIcon, MinusIcon, PlusIcon } from '@radix-ui/react-icons';
import { useCart } from '../context';
import {toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const ProductInfo: React.FC = () => {
    const [counter, setCounter] = useState<number | null>(0);
    const [added, setAdded] = useState<boolean>(false);
    const { items,addItem,removeItem } = useCart();
    type CartItem = {
        id: number;
        name: string;
        price: number;
        src:string;
      };
    const handleCountChange = (value: number) => {
        setCounter((prev) => {
            if (prev === null||prev === 0) return value === 1 ? 1 : 0;
            return value === 1 ? prev + 1 : prev - 1;
        });
    };
    const handleAddItem = (value:CartItem) => {
        setAdded(!added)
        addItem(value)
        toast.success("Product added to cart!", {
            position: "top-right",
            autoClose: 1000,
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
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            // progress: undefined,
          });
    };
    return (
        <Box width='100%'>
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
                    <Box as='div' mt='20px' maxWidth='30%' height='50px'>
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
                    <Box mt='100px' minWidth='100%'>
                        <Flex justify='between' align='center'>
                        <Box className={styles.sizeContainer} maxWidth='20%' height='80px'>
                            <Flex justify='between' align='center' minHeight='100%'>
                            <Box >
                                <MinusIcon className={styles?.icon} onClick={()=>handleCountChange(-1)}/>
                            </Box>
                            <Box className={styles.counter}>
                                {counter}
                            </Box>
                            <Box>
                                <PlusIcon className={styles.icon} onClick={()=>handleCountChange(1)}/>
                            </Box>
                            </Flex>
                        </Box>
                        <Box minWidth='70%'>
                        <CustomButton>
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
