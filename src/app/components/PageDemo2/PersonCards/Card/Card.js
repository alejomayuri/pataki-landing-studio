import { Box, Image } from '@chakra-ui/react'

export const Card = ({ img, title, text }) => {
    const property = {
        imageUrl: img || null,
        title: title || null,
        text: text || null,
        imageAlt: title || null,
    }

    return (
        <Box maxW='sm' borderRadius='lg' overflow='hidden'>
            <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                boxSize='100%'
                overflow='hidden'
                h={{
                    base: 'auto',
                    md: '300px',
                    lg: '400px',
                    xl: '500px',
                }}
            >
                <Image src={property.imageUrl} alt={property.imageAlt} 
                    w={{ base: '100%', md: '100%' }}
                    maxH={{ base: 'auto', md: '500px' }}
                    boxSize='100%'
                    objectFit='cover'
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                />
            </Box>
            <Box py='4'>
                <Box
                    mt='1'
                    fontWeight='regular'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                    fontSize={{ base: '18px', md: '24px' }}
                >
                    {property.title}
                </Box>
                <Box as='p' py='2' color='#888888'>
                    {property.text}
                </Box>
            </Box>
        </Box>
    )
}

export default Card
