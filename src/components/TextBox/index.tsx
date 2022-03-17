import { Box, Text } from "@chakra-ui/react"

interface TextBoxProps {
    content: string;
}

export function TextBox({ content }: TextBoxProps) {
    return (
        <Box p={["6", "10"]}>
            <Text noOfLines={6} textAlign="justify">
                {content}
            </Text>
        </Box>
    )
}