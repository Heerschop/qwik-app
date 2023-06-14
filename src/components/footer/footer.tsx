import { component$ } from '@builder.io/qwik';
import styles from './styles.module.css';

export const Footer = component$(() => {
  return (
    <>
      <div class={styles['container']}>
        <h1>Footer</h1>
      </div>
    </>
  );
});
