import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import {
  Button,
  ChakraProvider,
  Container,
  HStack,
  StackItem,
} from '@chakra-ui/react';
import Link from 'next/link';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to next-app!</title>
      </Head>
      <ChakraProvider>
        <Container>
          <HStack as="header" p={4}>
            <StackItem>
              <Button as={Link} variant="link" href="/">
                Home
              </Button>
            </StackItem>
            <StackItem>
              <Button as={Link} variant="link" href="/about">
                About
              </Button>
            </StackItem>
          </HStack>
          <main>
            <Component {...pageProps} />
          </main>
        </Container>
      </ChakraProvider>
    </>
  );
}

export default CustomApp;
