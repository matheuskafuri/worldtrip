import { Flex, SimpleGrid, Stack } from "@chakra-ui/react";
import { CityCard } from "../components/CityCard";
import { Header } from "../components/Header";
import { PostBanner } from "../components/PostBanner";
import { Statistics } from "../components/Statistics";
import { TextBox } from "../components/TextBox";


export default function Europe() {
    return (
        <>
            <Header />
            <PostBanner image="../../assets/europe_bigben.svg" />
            <Flex
                maxWidth={1240}
                mx="auto"
                mt="8"
                p={["6", "8"]}
                display="grid"
                gridTemplateColumns="1fr 1fr"
                gap="4"
                direction="row"
                align="center"
                justify="center"
            >
                <TextBox content="
                    A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
                "/>
                <Stack spacing={["6", "8"]} align="center" justify="center" direction={["column", "row"]}>
                    <Statistics title="países" number="50"/>
                    <Statistics title="línguas" number="60"/>
                    <Statistics title="cidades +100" number="27"/>
                </Stack>
            </Flex>
            <SimpleGrid columns={[1, 2, 3, 4]} spacing={["8", "10", "12"]} mx="auto" maxWidth={1180} p={["6", "8"]} >
                <CityCard image="../../assets/london.svg" name="Londres" country="Reino Unido" badge="../../assets/england_badge.svg" />
                <CityCard image="../../assets/paris.svg" name="Paris" country="França" badge="../../assets/france_badge.svg" />
                <CityCard image="../../assets/rome.svg" name="Roma" country="Itália" badge="../../assets/italy_badge.svg" />
                <CityCard image="../../assets/prague.svg" name="Praga" country="República Tcheca" badge="../../assets/czech_badge.svg" />
                <CityCard image="../../assets/amsterdan.svg" name="Amsterdã" country="Holanda" badge="../../assets/netherlands_badge.svg" />
            </SimpleGrid>
        </>

    )
}