import { Container, Heading } from '@chakra-ui/react';
import { Hero } from '@react-monorepo/shared-ui';

const About = () => {
  return (
    <Container>
      <Heading>About</Heading>
      <Hero header="test">About page</Hero>
    </Container>
  );
};

export default About;
