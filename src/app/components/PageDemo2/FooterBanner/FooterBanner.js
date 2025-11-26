import { Box, Image } from '@chakra-ui/react'

export const FooterBanner = ({ text }) => {
    return (
        <Box
                maxW='1600px'
                marginTop="80px"
                mx='auto'
                w='100%'
                h={{ base: "300px", md: "500px" }}
                position="relative"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Box
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    bgImage="/demos/demosPublic/demo2/midBanner.jpg"
                    bgSize="cover"
                    bgPosition="center"
                    filter="brightness(60%)"
                ></Box>
                <Box 
                    as="p"
                    fontSize={{ base: "32px", md: "54px" }}
                    color="#fff"
                    fontWeight="bold"
                    zIndex="999"
                    textAlign="center"
                    p="4"
                >
                    Nos vemos pronto
                </Box>
            </Box>
    )
}

export default FooterBanner