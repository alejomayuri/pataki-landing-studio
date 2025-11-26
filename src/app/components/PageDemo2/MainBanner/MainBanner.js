import { Box, Image } from '@chakra-ui/react'

export const MainBanner = () => {
    return (
        <>
            <Image
                maxW='1600px'
                mx='auto'
                w='100%'
                h={{ base: "200px", md: "700px" }}
                boxSize='100%'
                objectFit='cover'
                src='/demos/demosPublic/demo2/banner.jpg'
                alt='New York'
                paddingTop={{ base: "77px", md: "87px" }}
            />
            <Box
                maxW='1200px'
                mx='auto'
                px={{ base: 10, md: 20 }}
                py={{ base: 10, md: 24 }}
                bg='#fff'
                color='#222'
                fontSize={{ base: 22, md: 34}}
                textAlign={{ base: 'center', md: 'center' }}
                lineHeight={{ base: '30px', md: '50px' }}
            >
                <p>
                    Entregamos productos de marca que evocan respuestas emocionales atractivas. El pensamiento innovador y la atención al detalle son el sello distintivo de nuestro oficio.
                </p>
            </Box>
            <Box display='flex' alignItems='center'>
                <Box as='a'
                    href='#'
                    mx='auto'
                    height='55px'
                    px={6}
                    py={4}
                    borderRadius='50px'
                    bg='#2f615e'
                    fontWeight='bold'
                    color='#fff'
                    _hover={{ color: '#e9deb0' }}
                >Contáctanos</Box>
            </Box>
        </>
    )
    
}

export default MainBanner
