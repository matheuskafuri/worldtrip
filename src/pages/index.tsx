import { Flex } from "@chakra-ui/react"
import { Banner } from "../components/Banner"
import { Header } from "../components/Header"
import { SwipeSection } from "../components/SwipeSection"
import { TravelType } from "../components/TravelTypes"


export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Flex
        maxWidth={1480}
        mx="auto"
        mt="20"
        px="6"
        justify="center"
      >
        <TravelType />
      </Flex>

      <Flex
        maxWidth={1240}
        mx="auto"
        mt="20"
        px="6"
        alignItems="center"
        my="6"
      >
        <SwipeSection />
      </Flex>
    </>
  )
}
