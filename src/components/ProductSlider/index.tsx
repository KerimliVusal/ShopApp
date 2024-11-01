import { Avatar, Box, Card, Flex, Text } from '@radix-ui/themes';
import React, { useState } from 'react';
import { images } from '../constants';
import styles from './index.module.css';



const ProductSlider: React.FC = () => {
    const [currentImage, setCurrentImage] = useState<number>(0);
    
    const handleChangeProductImage = (index: number) => {
        setCurrentImage(index);
    };

    return (
        <Box maxWidth="700px" m="20px" ml="30px" >
            <Box ml='50px' className={styles.parentBox}
            ><Card className={styles.parentAvatar} >
                    <Avatar
                        size="1"
                        src={images?.[currentImage]}
                        radius="none"
                        fallback="A"
                        m="10px"
                    />
                </Card>
            </Box>
            <Box>
                <Flex align="center" justify='center'>
                    {images.map((src, index) => (
                        <Box
                            key={index}
                            // m="10px"
                            maxWidth="90%"
                            minHeight='170px'
                            className={styles.childAvatar}
                            onClick={() => handleChangeProductImage(index)}
                        >
                            <Avatar
                                size="3"
                                src={src}
                                radius="full"
                                fallback="A"
                            />
                        </Box>
                    ))}
                </Flex>
            </Box>
        </Box>
    );
};

export default ProductSlider;
