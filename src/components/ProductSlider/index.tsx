import { Avatar, Box, Card, Flex, Text } from '@radix-ui/themes';
import React, { useState } from 'react';
import styles from './index.module.css';

type ImageType = string;
const images: ImageType[] = [
    'https://product-page-orcin-phi.vercel.app/assets/image-product-4-DXKEAM1K.jpg',
    'https://product-page-orcin-phi.vercel.app/assets/image-product-3-CDkTofMU.jpg',
    'https://product-page-orcin-phi.vercel.app/assets/image-product-2-BT5cmuDx.jpg',
    'https://product-page-orcin-phi.vercel.app/assets/image-product-1-D36l1Pee.jpg'
];

const ProductSlider: React.FC = () => {
    const [currentImage, setCurrentImage] = useState<number>(0);

    const handleChangeProductImage = (index: number) => {
        setCurrentImage(index);
    };

    return (
        <Box maxWidth="700px" m="20px" ml="30px">
            <Box>
                <Card className={styles.parentAvatar}>
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
                <Flex align="center" gap="9">
                    {images.map((src, index) => (
                        <Box
                            key={index}
                            m="10px"
                            maxWidth="100%"
                            minHeight='170px'
                            className={styles.childAvatar}
                            onClick={() => handleChangeProductImage(index)}
                        >
                            <Avatar
                                size="1"
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
