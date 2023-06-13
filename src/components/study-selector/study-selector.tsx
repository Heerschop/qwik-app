import { component$ } from '@builder.io/qwik';
import styles from './styles.module.css';

export const StudySelector = component$(() => {
  return (
    <>
      <div class={styles['container']}>
        <span>Toon informatie voor opleiding:</span>
      </div>
    </>
  );
});
