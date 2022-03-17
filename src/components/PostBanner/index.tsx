import { Flex, Heading } from "@chakra-ui/react";

interface PostBannerProps {
    image: string;
}

export function PostBanner({ image }: PostBannerProps) {
    return (
        <Flex backgroundImage={image} height={500} mx="auto"  justify={["center", "flex-start"]} align={["center", "flex-end"]} width="100%">
            <Flex
                maxWidth={1480}
                mt="4"
                px="12"
                py="10"
            >
                <Heading fontWeight="bold" fontSize={["2xl", "3xl"]} lineHeight="m" color="gray.50">
                    Europa
                </Heading>
            </Flex>
        </Flex>
    )
}