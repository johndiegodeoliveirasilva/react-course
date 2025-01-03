
import styles from './Card.module.css';
import { CardTitle } from '../CardTitle';

export const Card = () => {
  return (
    <div className={styles.container}>
      ...
      <CardTitle />
    </div>
  )
}