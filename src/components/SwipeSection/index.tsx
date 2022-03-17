import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper';
import { Flex, Image, Link, Text } from '@chakra-ui/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export function SwipeSection() {
    return (
        <Swiper
            modules={[Navigation, Pagination, EffectFade]}
            spaceBetween={500}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true }}
            effect={"fade"}
        >
            <SwiperSlide>
                <Flex
                    as="a"
                    href="/europe"
                    backgroundImage="../../assets/europe.svg"
                    height={450}
                    mx="auto"
                    justifyContent="center"
                    width="100%"
                    direction="column"
                >
                    <Text fontWeight="bold" fontSize={["xl", "4xl"]} color="white">Europa</Text>
                    <Text fontWeight="bold" fontSize={["sm", "lg"]} color="white">O continente mais antigo.</Text>
                </Flex>

            </SwiperSlide>
            <SwiperSlide>
                <Flex
                    as="a"
                    href="/europe"
                    backgroundImage="../../assets/europe.svg"
                    height={450}
                    mx="auto"
                    justifyContent="center"
                    width="100%"
                    direction="column"
                >
                    <Text fontWeight="bold" fontSize={["xl", "4xl"]} color="white">América</Text>
                    <Text fontWeight="bold" fontSize={["sm", "lg"]} color="white">O continente mais top.</Text>
                </Flex>

            </SwiperSlide>
            <SwiperSlide>
                <Flex
                    as="a"
                    href="/europe"
                    backgroundImage="../../assets/europe.svg"
                    height={450}
                    mx="auto"
                    justifyContent="center"
                    width="100%"
                    direction="column"
                >
                    <Text fontWeight="bold" fontSize={["xl", "4xl"]} color="white">Ásia</Text>
                    <Text fontWeight="bold" fontSize={["sm", "lg"]} color="white">O continente mais esquisito.</Text>
                </Flex>

            </SwiperSlide>
            <SwiperSlide>
                <Flex
                    as="a"
                    href="/europe"
                    backgroundImage="../../assets/europe.svg"
                    height={450}
                    mx="auto"
                    justifyContent="center"
                    width="100%"
                    direction="column"
                >
                    <Text fontWeight="bold" fontSize={["xl", "4xl"]} color="white">Oceania</Text>
                    <Text fontWeight="bold" fontSize={["sm", "lg"]} color="white">O continente mais cool.</Text>
                </Flex>

            </SwiperSlide>
        </Swiper>
    );
}

