// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, Routes } from 'react-router-dom';
import styles from './app.module.css';

import NxWelcome from './nx-welcome';
import { Products } from '@react-monorepo/products';
import { Orders } from '@react-monorepo/orders';
import { Button } from '@react-monorepo/shared-ui';
import { Card, CardHeader, ChakraProvider } from '@chakra-ui/react';

function Home() {
  return <div>Home!</div>;
}

export function App() {
  return (
    <ChakraProvider>
      <div>
        <Button onClick={() => alert('app click!!!')}>App button</Button>
        <Card>
          <CardHeader>App Store!!</CardHeader>
        </Card>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
