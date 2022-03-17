import { Flex, Image, Stack, Text } from "@chakra-ui/react"

export function TravelType() {
    return (
        <Stack direction={["column", "column", "column", "row"]} align="center" spacing={["12", "12", "12", "12"]}>
            <Flex p={["6", "8"]} pb="4" direction="column" alignItems="center">
                <Image
                    src="../assets/cocktail.svg"
                    alt="Cocktail"
                    width={85}
                    height={85}
                    mb="4"
                />
                <Text fontWeight="bold" fontSize={["sm", "lg"]}>vida noturna</Text>
            </Flex>
            <Flex p={["6", "8"]} pb="4" direction="column" alignItems="center"  >
                <Image
                    src="../assets/surf.svg"
                    alt="Surf"
                    width={85}
                    height={85}
                    mb="4"
                />
                <Text fontWeight="bold" fontSize={["sm", "lg"]}>praia</Text>
            </Flex>
            <Flex p={["6", "8"]} pb="4" direction="column" alignItems="center"  >
                <Image
                    src="../assets/building.svg"
                    alt="Building"
                    width={85}
                    height={85}
                    mb="4"
                />
                <Text fontWeight="bold" fontSize={["sm", "lg"]}>moderno</Text>
            </Flex>
            <Flex p={["6", "8"]} pb="4" direction="column" alignItems="center"  >
                <Image
                    src="../assets/museum.svg"
                    alt="Museum"
                    width={85}
                    height={85}
                    mb="4"
                />
                <Text fontWeight="bold" fontSize={["sm", "lg"]}>clássico</Text>
            </Flex>
            <Flex p={["6", "8"]} pb="4" direction="column" alignItems="center"  >
                <Image
                    src="../assets/earth.svg"
                    alt="Cocktail"
                    width={85}
                    height={85}
                    mb="4"
                />
                <Text fontWeight="bold" fontSize={["sm", "lg"]}>e mais...</Text>
            </Flex>
        </Stack>
    )
}