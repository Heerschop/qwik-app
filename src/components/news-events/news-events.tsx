import { component$ } from '@builder.io/qwik';
import styles from './styles.module.css';

export const NewsEvents = component$(() => {
  return (
    <>
      <div class={styles['container']}>
      <h1>News Events</h1>
      </div>
    </>
  );
});
