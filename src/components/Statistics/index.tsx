import { Box, Stack, Text } from "@chakra-ui/react";

interface StatisticsProps {
    title: string;
    number: string;
}

export function Statistics({ title, number }: StatisticsProps) {
    return (
        <Box justifyContent="center">
            <Text fontSize="3xl" fontWeight="bold" color="yellow.900" textAlign="center">{number}</Text>
            <Text fontWeight="bold" fontSize={["sm", "lg"]}>{title}</Text>
        </Box>
    )
}