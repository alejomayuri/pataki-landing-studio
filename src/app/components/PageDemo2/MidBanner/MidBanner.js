import style from './MidBanner.module.css'
import { Box, Image } from "@chakra-ui/react"

export const MidBanner = () => {
    return (
        <>
            <Box
                id='works'
                maxW='1600px'
                mx='auto'
                marginTop={{ base: "30px", md: "40px" }}
                w='100%'
                h={{ base: "300px", md: "700px" }}
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
                    fontSize={{ base: "32px", md: "40px" }}
                    color="#fff"
                    fontWeight="bold"
                    zIndex="999"
                    textAlign="center"
                    p="4"
                >
                    La esencia de la ciudad de Nueva York
                </Box>
            </Box>
            <Box
                maxW='1600px'
                mx='auto'
                w='100%'
                display="flex"
                flexDirection={{ base: "column", md: "row" }}
            >
                <div className={style.container}>
                    <img src='/demos/demosPublic/demo2/mb2.jpg' />
                    <div className={style.texto}>
                        <h3>Licor de ámbar</h3>
                        <p>Un cambio de marca sofisticado para un elemento de bar clásico.</p>
                    </div>
                </div>
                <div className={style.container}>
                    <img src='/demos/demosPublic/demo2/mb1.jpg' />
                    <div className={style.texto}>
                        <h3>Ruth & Sons</h3>
                        <p>Una de las telas más veneradas de Nueva York. Los comerciantes se renuevan.</p>
                    </div>
                </div>
                <div className={style.container}>
                    <img src='/demos/demosPublic/demo2/mb3.jpg' />
                    <div className={style.texto}>
                        <h3>The Hunter</h3>
                        <p>Una solución de marca hecha a mano por esta histórica leyenda local.</p>
                    </div>
                </div>
            </Box>
        </>
    )
}

export default MidBanner