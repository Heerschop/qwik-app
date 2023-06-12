import { component$ } from '@builder.io/qwik';
import styles from './styles.module.css';

export const StudySelector = component$(() => {
  return (
    <>
      <div class={styles['container']}>
      <h1>Study selector</h1>
      </div>
    </>
  );
});
