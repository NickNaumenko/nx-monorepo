import { Box, Container, Heading } from '@chakra-ui/react';
import { Hero } from '@react-monorepo/shared-ui';

const About = () => {
  return (
    <Box>
      <Heading>About</Heading>
      <Hero header="test">About page</Hero>
    </Box>
  );
};

export default About;
