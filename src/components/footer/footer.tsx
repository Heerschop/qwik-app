import { component$, useVisibleTask$ } from '@builder.io/qwik';
import styles from './styles.module.css';

export const Footer = component$(() => {
  useVisibleTask$(() => {
    console.log('Footer Visible');
  });

  return (
    <>
      <div class={styles['container']}>
        <h1>Footer</h1>
      </div>
    </>
  );
});
