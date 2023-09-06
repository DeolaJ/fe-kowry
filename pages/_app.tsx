import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";

import { theme } from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta
                    name="description"
                    content="We help people move forward with better credit scores"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/jpg" href="/logo.jpg" />
            </Head>
            <ChakraProvider theme={theme}>
                <AnimatePresence mode="wait">
                    <Component {...pageProps} />
                </AnimatePresence>
            </ChakraProvider>
        </>
    );
}
