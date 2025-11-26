import { Box } from '@chakra-ui/react'
import Card from "./Card/Card"

export const PersonCards = () => {
    return (
        <Box id="about">
            <Box 
                as='h2'
                textAlign='center'
                fontSize={{ base: '28px', md: '36px' }}
                marginTop={{ base: 10, md: 24 }}
                marginBottom={{ base: 0, md: 10 }}
                px={{ base: 1, md: 20 }}
                objectFit='cover'
            >
                Pequeño. Vibrante. Apasionado.
            </Box>
            <Box
                display='flex'
                flexDir={{ base: 'column', md: 'row' }}
                justifyContent='center'
                alignItems='center'
                maxW='1350px'
                mx='auto'
                px={{ base: 1, md: 20 }}
                my={{ base: 11, md: 1 }}
                gap={{ base: 2, md: 10 }}
            >
                <Card
                    img='/demos/demosPublic/demo2/p1.jpg'
                    title='Daniel Avery'
                    text = 'Fundador y CEO. Después de haber trabajado en algunas de las mejores agencias de Nueva York, la visión de Daniel requería una nueva empresa.'
                />
                <Card
                    img='/demos/demosPublic/demo2/p2.jpg'
                    title='Joseph Ginsberg'
                    text = 'Director creativo, los años de experiencia de Joseph aportan una apariencia única y distinguida a los proyectos de nuestros clientes.'
                />
                <Card
                    img='/demos/demosPublic/demo2/p3.jpg'
                    title='Alice Cole'
                    text = 'Directora artística y catlover, el sentido del estilo de Alice orienta nuestra dirección visual. Ha trabajado en agencias de todo el país.'
                />
            </Box>
        </Box>
    )
}

export default PersonCards
