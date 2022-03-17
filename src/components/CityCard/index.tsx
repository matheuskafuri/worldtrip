import { Box, Image, Flex, Text } from "@chakra-ui/react";

interface CityCardProps {
    image: string;
    name: string;
    country: string;
    badge: string;
}


export function CityCard({ image, name, country, badge }: CityCardProps) {
    return (
        <Box bg='white' height='280px' justifyContent="space-between" border="1px" borderColor="yellow.900" borderBottomRadius="4px">
        <Image src={image} alt={name} />
        <Flex display="grid" gridTemplateColumns="3fr 1fr" gap="4" align="center" p="2" mt="4"> 
            <Box p="2" alignItems="center">
                <Text fontWeight="semi-bold" fontSize="m" >{name}</Text>
                <Text color="gray.300" fontSize="sm" mt="2" noOfLines={1}>{country}</Text>
            </Box>

            <Image src={badge} alt={country} justifySelf="flex-end"/>

        </Flex>
    </Box>
    )
}