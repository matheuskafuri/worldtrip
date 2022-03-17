import { theme } from '../../styles/theme';
import { ChakraProvider } from '@chakra-ui/react';

import "swiper/css/bundle";
import "./styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
        <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp
