'use client'

import style from './Header.module.css';
import { Box, Flex, Image, Spacer, IconButton } from '@chakra-ui/react'
import MenuIcon from '../../icons2/demoIcons/Menu';
import Close from '../../icons2/demoIcons/Close';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'

export const Header = () => {

    return (
        <Box zIndex='9999' position="fixed" as='header' w='100%'>
            <Flex display='flex' alignItems='center' maxW='1600px' w='100%' mx='auto' px={{ base: 10, md: 20 }} py={4} bg='#2f615e'>
                <Box w='90px'>
                    <Image src='/demos/demosPublic/demo2/logo.png' alt='logo' />
                </Box>
                <Spacer />
                <div className={style.navWrapper}>
                    <Box as='nav' ml='auto' display='flex' alignItems='center' justifyContent='center'>
                        <Box as='ul' display='flex' listStyleType='none'>
                            <Box as='li' mr={4} color='#fff'>
                                <Box as='a'
                                    href='#'
                                    _hover={{ color: '#e9deb0' }}
                                    fontSize='16px'
                                >Home</Box>
                            </Box>
                            <Box as='li' mr={4} color='#fff'>
                                <Box as='a'
                                    href='#about'
                                    _hover={{ color: '#e9deb0' }}
                                    fontSize='16px'
                                >Sobre nosotros</Box>
                            </Box>
                            <Box as='li' mr={4} color='#fff'>
                                <Box as='a'
                                    href='#works'
                                    _hover={{ color: '#e9deb0' }}
                                    fontSize='16px'
                                >Trabajos</Box>
                            </Box>
                            <Box as='li' mr={4} color='#fff'>
                                <Box as='a'
                                    href='#testimonial'
                                    _hover={{ color: '#e9deb0' }}
                                    fontSize='16px'
                                >Testimonios</Box>
                            </Box>
                            <Box as='li' mr={4} color='#fff'>
                                <Box as='a'
                                    href='#social'
                                    _hover={{ color: '#e9deb0' }}
                                    fontSize='16px'
                                >Social</Box>
                            </Box>
                        </Box>
                    </Box>
                </div>
                <Spacer />
                <div className={style.contact}>
                    <div className={style.contactBtn}>
                        <Box display='flex' alignItems='center'>
                            <Box as='a'
                                href='#'
                                height='55px'
                                px={6}
                                py={4}
                                borderRadius='50px'
                                bg='#a73e2b'
                                fontWeight='bold'
                                color='#fff'
                                _hover={{ color: '#e9deb0' }}
                            >Contáctanos</Box>
                        </Box>
                    </div>
                    <div className={style.dropdownMenu}>
                        <Menu>
                            {({ isOpen }) => (
                                <>
                                    <MenuButton
                                        as={IconButton}
                                        aria-label='Options'
                                        icon={isOpen ? <Close fill='#fff' stroke='#fff' /> : <MenuIcon stroke='#fff' />}
                                        variant='outline'
                                        bg={'transparent'}
                                        _expanded={{ bg: 'transparent' }}
                                        _focus={{ bg: 'transparent' }}
                                        border={0}
                                    />
                                    <MenuList>
                                        <MenuItem as='a' href='#'>
                                        Home
                                        </MenuItem>
                                        <MenuItem as='a' href='#about'>
                                        Sobre nosotros
                                        </MenuItem>
                                        <MenuItem as='a' href='#works'>
                                            Trabajos
                                        </MenuItem>
                                        <MenuItem as='a' href='#testimonial'>
                                            Testimonios
                                        </MenuItem>
                                        <MenuItem as='a' href='#social'>
                                            Social
                                        </MenuItem>
                                    </MenuList>
                                </>
                            )}
                        </Menu>
                    </div>
                </div>
            </Flex>
        </Box>
    )
}

export default Header;
