import { component$ } from '@builder.io/qwik';
import styles from './styles.module.css';

export const Header = component$(() => {
  return (
    <>
      <div class={styles['container']}>
        <h1>Header</h1>
      </div>
    </>
  );
});
