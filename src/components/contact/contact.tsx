import { component$ } from '@builder.io/qwik';
import styles from './styles.module.css';

export const Contact = component$(() => {
  console.log('Render: Contact');

  return (
    <>
      <div class={styles['container']}>
        <div class={styles['left']}>
          <div class={styles['head']}>Contact</div>
          <div class={styles['title']}>
            <b>Onderwijsbalie</b> UvA Economie en Bedrijfskunde
          </div>
          <div class={styles['text']}>
            Heb je een vraag die te maken heeft met je studieprogramma, zoals je vakken, afstuderen, roosters en
            cijfers? Neem contact op of kom langs bij de balie.
          </div>
        </div>
        <div class={styles['right']}>
          <div></div>
          <div>Contactgegevens</div>
        </div>
      </div>
    </>
  );
});
