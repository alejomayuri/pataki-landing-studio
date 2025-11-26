import { Box, Image } from '@chakra-ui/react'

export const Card = ({ title, text }) => {
    const property = {
        title: title || null,
        text: text || null,
    }

    return (
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
    )
}

export default Card