import React from "react";
import * as HoverCard from "@radix-ui/react-hover-card";
import { AiOutlineDelete } from "react-icons/ai";
import styles from "./styles.module.css";
import SizeContainer from "../SizeContainer";
import { useCart } from "../context";
import { Box, Flex, Text } from "@radix-ui/themes";
import { Header } from "@radix-ui/themes/dist/cjs/components/table";
import CustomButton from "../Button";
type CartItemProps = {
    children: React.ReactNode;
    items: { id: number; name: string; price: number, src: string }[];
};
const CartItem: React.FC<CartItemProps> = ({ children, items }) => {
    console.log({ items });
    const { removeItem, counter, handleCountChange, added } = useCart();

    return (
        <Box className={styles.cartContent}>
            <HoverCard.Root>
                <HoverCard.Trigger asChild>
                    {children}
                </HoverCard.Trigger>
                <HoverCard.Portal>
                    <HoverCard.Content className={styles.HoverCardContent} sideOffset={5}>
                        <Flex direction='column' className={styles.cartHeader}>
                            <Text as='label' >
                                Cart
                            </Text>
                            {added ?<>
                                <div style={{ display: "flex", flexDirection: "row", gap: 7 }}>
                                    <img
                                        className={styles.Imagelarge}
                                        src={items?.[0]?.src}
                                        alt="sneaker"
                                    />
                                    <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
                                        <div className={styles.Text}>
                                            Discover premium, stylish sneakers designed to elevate every step. Join a community of over 10k sneaker lovers following the latest in quality and comfort.
                                        </div>
                                    </div>
                                    <div style={{ display: "flex", gap: 15, justifyContent: 'space-between', alignItems: 'center' }}>
                                        <SizeContainer handleCountChange={handleCountChange} counter={counter} changeStyle={true} />
                                        <div style={{ display: "flex", gap: 5 }}>
                                            <div className={styles.deleteIcon}><AiOutlineDelete onClick={() => removeItem(1)} /></div>
                                        </div>
                                    </div>
                                </div>
                                <Flex  mt='20px' justify='center'>
                                    <Box as='div' minWidth='50%'>
                                <CustomButton cartItem>
                                        Checkout
                                    </CustomButton>
                                    </Box>
                                    </Flex>
                                </>
                                : <Text className={styles.emptyCart}>
                                    Cart is Empty</Text>}
                        </Flex>

                        <HoverCard.Arrow className="HoverCardArrow" />
                    </HoverCard.Content>
                </HoverCard.Portal>
            </HoverCard.Root>
        </Box>
    )
};

export default CartItem;
