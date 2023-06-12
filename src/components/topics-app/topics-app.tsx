import { component$ } from '@builder.io/qwik';
import styles from './styles.module.css';

export const TopicsApp = component$(() => {
  return (
    <>
      <div class={styles['container']}>
        <h1>Topics app</h1>
      </div>
    </>
  );
});
