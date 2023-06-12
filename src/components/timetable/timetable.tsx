import { component$ } from '@builder.io/qwik';
import styles from './styles.module.css';

export const Timetable = component$(() => {
  return (
    <>
      <div class={styles['container']}>
        <h1>Timetable</h1>
      </div>
    </>
  );
});
