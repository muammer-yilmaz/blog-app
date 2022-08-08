import {
    Box, Button, chakra, Flex, FormControl, FormHelperText, FormLabel, GridItem, Icon, Input, InputGroup,
    SimpleGrid, Stack, Text, Textarea, VisuallyHidden
} from "@chakra-ui/react";
import React from 'react'

const PostDetail: React.FC = () => {

    return (
        <>
            <Box
                p={10}
            >
                <Box>
                    <SimpleGrid
                        display={{
                            base: "initial",
                            md: "grid",
                        }}
                        columns={{
                            md: 3,
                        }}
                        spacing={{
                            md: 6,
                        }}
                    >

                        <GridItem
                            mt={[5, null, 0]}
                            colSpan={{
                                md: 2,
                            }}
                        >
                            <chakra.form
                                method="POST"
                                shadow="base"
                                rounded={[null, "md"]}
                                overflow={{
                                    sm: "hidden",
                                }}
                            >
                                <Stack
                                    px={4}
                                    py={5}
                                >
                                    <SimpleGrid columns={3} spacing={6}>
                                        <FormControl as={GridItem} colSpan={[3, 2]}>
                                            <FormLabel
                                                fontSize="sm"
                                                fontWeight="md"
                                            >
                                                Website
                                            </FormLabel>
                                            <InputGroup size="sm">
                                                <Input
                                                    type="tel"
                                                    placeholder="www.example.com"
                                                    rounded="md"
                                                />
                                            </InputGroup>
                                        </FormControl>
                                    </SimpleGrid>

                                    <div>
                                        <FormControl id="email" mt={1}>
                                            <FormLabel
                                                fontSize="sm"
                                                fontWeight="md"
                                            >
                                                About
                                            </FormLabel>
                                            <Textarea
                                                placeholder="you@example.com"
                                                mt={1}
                                                rows={3}
                                                shadow="sm"
                                                fontSize={{
                                                    sm: "sm",
                                                }}
                                            />
                                            <FormHelperText>
                                                Brief description for your profile. URLs are hyperlinked.
                                            </FormHelperText>
                                        </FormControl>
                                    </div>

                                    <FormControl>
                                        <FormLabel
                                            fontSize="sm"
                                            fontWeight="md"
                                        >
                                            Cover photo
                                        </FormLabel>
                                        <Flex
                                            mt={1}
                                            justify="center"
                                            px={6}
                                            pt={5}
                                            pb={6}
                                            borderWidth={2}
                                            borderStyle="dashed"
                                            rounded="md"
                                        >
                                            <Stack spacing={1} textAlign="center">
                                                <Icon
                                                    mx="auto"
                                                    boxSize={12}
                                                    fill="none"
                                                    viewBox="0 0 48 48"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </Icon>
                                                <Flex
                                                    fontSize="sm"
                                                    alignItems="baseline"
                                                >
                                                    <chakra.label
                                                        htmlFor="file-upload"
                                                        cursor="pointer"
                                                        rounded="md"
                                                        fontSize="md"
                                                        pos="relative"
                                                        _hover={{
                                                            color: "brand.400",
                                                        }}
                                                    >
                                                        <span>Upload a file</span>
                                                        <VisuallyHidden>
                                                            <input
                                                                id="file-upload"
                                                                name="file-upload"
                                                                type="file"
                                                            />
                                                        </VisuallyHidden>
                                                    </chakra.label>
                                                    <Text pl={1}>or drag and drop</Text>
                                                </Flex>
                                                <Text
                                                    fontSize="xs"

                                                >
                                                    PNG, JPG, GIF up to 10MB
                                                </Text>
                                            </Stack>
                                        </Flex>
                                    </FormControl>
                                </Stack>
                                <Box
                                    px={{
                                        base: 4,
                                        sm: 6,
                                    }}
                                    py={3}
                                    textAlign="right"
                                >
                                    <Button
                                        type="button"
                                        _focus={{
                                            shadow: "",
                                        }}
                                        fontWeight="md"
                                    >
                                        Save
                                    </Button>
                                </Box>
                            </chakra.form>
                        </GridItem>
                    </SimpleGrid>
                </Box>

            </Box>

        </>
    )
}

export default PostDetail;