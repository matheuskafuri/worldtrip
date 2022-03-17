import { Flex, Image, Link } from "@chakra-ui/react";

export function Header() {
    return (
        <Flex
            as="header"
            w="100%"
            maxWidth={1480}
            h="20"
            mx="auto"
            mt="4"
            px="6"
            align="center"
            justify="center"
        >
            <Link
                as="a"
                href="/"
            >
                <Image src="../assets/logo.svg" alt="logo" />
            </Link>
        </Flex>
    );
}