import {
    Heading, Image, Text, Box, chakra, Flex, Link, useColorModeValue, Stack
} from "@chakra-ui/react";
import React from 'react'
import { useAppSelector } from "redux/hooks";
import { selectPosts } from "redux/reducers/postReducer";
import fallbackImage from "../../assets/no-image.png";

const PostDetail: React.FC = () => {

    const selector = useAppSelector(selectPosts);

    const colorMode = useColorModeValue('gray.600', 'gray.100')



    return (
        <>
            {/* <Center >
                <Container p={12} maxWidth={'container.lg'}>
                    <Box dropShadow={"2xl"}>
                        <Stack p={6} spacing={6}>
                            <Heading as={'h1'}>Lorem ipsum dolor sit amet.</Heading>
                            <Box display={'flex'} h={'350px'}>
                                <Image w={'100%'} objectFit='cover' h={'100%'} src="https://source.unsplash.com/random/256x256" />
                            </Box>
                            <Text>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe quia totam molestiae fugiat! Cumque nobis velit doloremque dolorem cum iste asperiores totam omnis optio, magni nesciunt inventore harum est dolores et blanditiis iusto provident odit laboriosam aspernatur? In totam rerum nihil harum magnam! Ipsam accusantium esse repellat vero omnis reiciendis at necessitatibus asperiores cumque suscipit, aliquam odio aspernatur placeat perspiciatis sequi corporis a illo quia nobis ut, modi perferendis, dolores voluptatibus! Commodi exercitationem magnam consequatur illum dolore adipisci? Explicabo animi iure labore rem praesentium doloremque sint exercitationem fugit eligendi nam molestiae, officia fuga, eius a ipsum voluptatibus? Nobis molestiae eum nihil enim eos sapiente exercitationem itaque quos facilis. Modi quas odio unde aspernatur dignissimos omnis, necessitatibus repellendus, harum, corporis voluptatem cum adipisci qui saepe natus placeat corrupti? Iste eligendi quod eum. Beatae error perspiciatis, explicabo ut blanditiis impedit ducimus porro maiores veniam debitis id, numquam fuga iure harum exercitationem perferendis commodi, delectus culpa dolores saepe ullam quod corporis. Cumque atque molestiae incidunt inventore perspiciatis repudiandae eos deserunt ea quos accusantium. Inventore dolor, sed magni, placeat aliquam veritatis animi nam qui itaque officia esse repudiandae dolorum dolore, impedit nobis et sapiente voluptatum? Id, suscipit dicta? Voluptate fugiat, iste quisquam et unde minima, vel corporis doloribus voluptatum sapiente fuga totam eum rerum! Fuga, perferendis corporis beatae, quisquam velit ducimus obcaecati modi non labore eligendi quibusdam illo fugiat? Praesentium culpa ratione doloremque pariatur magnam optio rerum aperiam voluptas blanditiis sunt accusantium eum nisi, beatae soluta voluptatibus enim dolores assumenda quas vero? Sunt, dicta.
                            </Text>
                        </Stack>
                    </Box>
                </Container>
            </Center> */}
            <Flex maxW="900px" mx="auto" align="center" justify="center" px={5}>
                <Box w="100%" py={5}>
                    <Stack py={6} spacing={4}>
                        <Heading as="h1" size="xl" color={colorMode}>
                            {selector.singlePost?.title}
                        </Heading>
                        <Heading
                            as="h2"
                            fontWeight="normal"
                            size="sm"
                            mt={2}
                            fontStyle="italic"
                            color={colorMode}
                        >

                        </Heading>

                        <Box py={4}>
                            <Flex align="center">
                                <Flex align="center" justify="between">
                                    <Image
                                        h={10}
                                        fit="cover"
                                        rounded="full"
                                        src="https://source.unsplash.com/random/48x48"
                                        alt="Avatar"
                                    />
                                    <Flex align="flex-start" direction="column">
                                        <Link mx={3} fontWeight="bold" color={colorMode}>
                                        </Link>
                                        <chakra.span mx={3} fontSize="sm" color={colorMode}>
                                            deneme
                                        </chakra.span>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Box>

                        <Box h={'512px'} >
                            <Image
                                w={'100%'}
                                h={'100%'}
                                objectFit={'cover'}
                                borderRadius="md"
                                src={selector.singlePost?.image === undefined ? fallbackImage : selector.singlePost?.image}
                                fallbackSrc={fallbackImage}
                            />
                        </Box>
                        <Text py={8} fontSize="lg" color={colorMode}>
                            {selector.singlePost?.body}
                        </Text>
                    </Stack>
                </Box>
            </Flex>
        </>
    )
}

export default PostDetail;