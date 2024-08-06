import { Card, CardBody, CardHeader } from '@chakra-ui/react';

interface HeroProps {
  children: React.ReactNode;
  header: React.ReactNode;
}

const Hero = ({ children, header }: HeroProps) => {
  return (
    <Card>
      <CardHeader>{header}</CardHeader>
      <CardBody>{children}</CardBody>
    </Card>
  );
};

export default Hero;
