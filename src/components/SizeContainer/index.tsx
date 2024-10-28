import React from "react"
import { Box, Flex } from "@radix-ui/themes"
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons"
import styles from '../ProductInfo/index.module.css'
type SizeContainerProps = {
    handleCountChange: (value: number) => void;
    counter: number|null;
    changeStyle:boolean
}
const SizeContainer: React.FC<SizeContainerProps> = ({ handleCountChange, counter,changeStyle }) => {
    return (
        <Box className={changeStyle?'':styles.sizeContainer} maxWidth='20%' height='80px'>
            <Flex justify='between' align='center' minHeight='100%'>
                <Box >
                    <MinusIcon className={styles?.icon} onClick={() => handleCountChange(-1)} />
                </Box>
                <Box className={changeStyle?styles.cartCounter:styles.counter}>
                    {counter}
                </Box>
                <Box>
                    <PlusIcon className={styles.icon} onClick={() => handleCountChange(1)} />
                </Box>
            </Flex>
        </Box>
    )
}
export default SizeContainer