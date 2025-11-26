import { Box } from '@chakra-ui/react'
import Card from "./Card/Card"

export const TextCards = () => {
    return (
        <Box>
            <Box 
                as='h2'
                textAlign='center'
                fontSize={{ base: '28px', md: '36px' }}
                marginTop={{ base: 10, md: 24 }}
                marginBottom={{ base: 0, md: 10 }}
                px={{ base: 1, md: 20 }}
            >
                Principios guía.
            </Box>
            <Box
                display='grid'
                gridTemplateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
                w={{ base: '100%', md: '800px' }}
                px={{ base: 5, md: 20 }}
                mx='auto'
                gap={{ base: 0, md: 10 }}
            >
                <Card
                    title='1. La simplicidad triunfa'
                    text = 'Complicar demasiado el problema complica demasiado la solución. Un enfoque centrado y estratégico produce los resultados más eficaces.'
                />
                <Card
                    title='2. Iterar y luego iterar'
                    text = 'Nunca te duermas en los laureles. Nada valioso se perfecciona en el primer intento, por eso nuestra misión es perfeccionar hasta el último detalle.'
                />
                <Card
                    title='3. Entregar y asombrar'
                    text = 'Nos tomamos en serio los plazos. Estamos listos para entregar su próximo proyecto a tiempo y dentro del presupuesto, con resultados increibles.'
                />
                <Card
                    title='4. Para la gente'
                    text = 'Creemos en la colaboración y la fraternidad: las relaciones son el núcleo de nuestro trabajo, tanto internamente como con los clientes.'
                />
            </Box>
        </Box>
    )
}

export default TextCards