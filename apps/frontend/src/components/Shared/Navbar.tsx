import { ReactNode } from 'react';
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Icon,
    Hide,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { AiOutlineUser } from 'react-icons/ai';
import { RiNewspaperLine } from 'react-icons/ri';
import { MdLogout, MdOutlineSettings } from 'react-icons/md';
import { Link as ReactLink } from 'react-router-dom';
import LoginButton from './LoginButton';
import { useAppSelector } from 'redux/hooks';
import { selectAuth } from 'redux/reducers/authReducer';


const Links = ['Posts'];

// const NavLink = ({ children }: { children: ReactNode }) => (
//     <Link
//         px={2}
//         py={1}
//         rounded={'md'}
//         _hover={{
//             textDecoration: 'none',
//             bg: useColorModeValue('gray.200', 'gray.700'),
//         }}
//         href={'#'}>
//         {children}
//     </Link>
// );


const Navbar: React.FC = () => {

    const { colorMode, toggleColorMode } = useColorMode();

    const { isOpen, onOpen, onClose } = useDisclosure();

    const selector = useAppSelector(selectAuth);

    return (
        <>
            <Box px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'} >
                        <Hide below='md'>
                            <Box display={'flex'} alignItems={'center'} >
                                <Link as={ReactLink} to='/'>
                                    <Icon as={RiNewspaperLine} w={6} h={6} />
                                </Link>
                            </Box>
                        </Hide>
                        <HStack
                            as={'a'}
                            href={'#'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <h3>{link}</h3>
                            ))}
                        </HStack>
                    </HStack>

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={4} alignItems={'center'}>
                            <Button
                                variant={'solid'}
                                colorScheme={'teal'}
                                size={'md'}
                                mr={1}
                                leftIcon={<AddIcon />}>
                                New Post
                            </Button>
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>

                            <Menu>
                                {selector.token !== null ? (
                                    <MenuButton
                                        as={Button}
                                        rounded={'full'}
                                        variant={'link'}
                                        cursor={'pointer'}
                                        minW={0}>
                                        <Avatar
                                            size={'sm'}
                                            src={
                                                'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                                            }
                                        />
                                    </MenuButton>
                                ) : <Link as={ReactLink} to='/login'> <LoginButton /> </Link>
                                }
                                <MenuList>
                                    <MenuItem icon={<Icon as={AiOutlineUser} />} display={'flex'} alignItems={'end'} >Profile</MenuItem>
                                    <MenuItem icon={<Icon as={MdOutlineSettings} />} display={'flex'} alignItems={'end'} > Settings</MenuItem>
                                    <MenuDivider />
                                    <MenuItem icon={<Icon as={MdLogout} />} display={'flex'} alignItems={'end'}>Logout</MenuItem>
                                </MenuList>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <h4 key={link}> {link}</h4>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>

            <Box p={4}></Box>
        </>
    );

}

export default Navbar;