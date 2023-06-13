import { component$ } from '@builder.io/qwik';
import styles from './styles.module.css';

export const Contact = component$(() => {
  console.log('Render: Contact');

  return (
    <>
      <div class={styles['container']}>
        <h1>Contact</h1>
      </div>
    </>
  );
});
