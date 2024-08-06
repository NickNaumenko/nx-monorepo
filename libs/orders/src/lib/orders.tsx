import { Button } from '@react-monorepo/shared-ui';
import styles from './orders.module.css';

export function Orders() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Orders!</h1>
      <div>
        <Button onClick={() => alert('orders click!!!')}>Orders button</Button>
      </div>
    </div>
  );
}

export default Orders;
