import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import styles from './styles.module.css';

// 944x434
type Item = { text: string; image: string };

const FeatureItem = component$(({ text, image }: Item) => {
  return (
    <div class={styles['feature-item']}>
      <img src={image}></img>
      <div>{text}</div>
    </div>
  );
});

export const FeaturedBlock = component$(() => {
  const items = useSignal<Item[]>([]);

  useVisibleTask$(() => {
    console.log('Featured Block');

    items.value = [
      {
        text: 'Word lid van het UvA EB social media team!',
        image:
          'https://d2csxpduxe849s.cloudfront.net/media/9E3E0032-62BD-4694-A3CCB1BC17CA3CAF/5911B0CB-1AF6-4BEB-8A1C9ACD583530C3/CE05231F-A9F4-47E6-BE7C56127BD3B143/Studentensite%20hero%20desktop-uva_sbe_mp_modellen_29_09_21_sblanchard-32.jpg',
      },
      {
        text: 'Hoe ervaar jij studeren bij Economie en Bedrijfskunde?',
        image:
          'https://d2csxpduxe849s.cloudfront.net/media/9E3E0032-62BD-4694-A3CCB1BC17CA3CAF/0F82BE0D-9A86-4637-87F0957CD2AF7C6F/Studentensite%20hero%20desktop-edit-7B9FC87A-6FA9-4610-BA2C7DBD34AD1A33.jpg',
      },
      {
        text: 'Lees nu het jaarverslag UvA 2022',
        image:
          'https://d2csxpduxe849s.cloudfront.net/media/9E3E0032-62BD-4694-A3CCB1BC17CA3CAF/864566BE-62F7-4FF3-BB56B6CB5355CE42/4D6CE15D-7F25-4413-88F6D808385E74D9/Studentensite%20hero%20mobile-Cover%20jaarverslag%20UvA%202022.jpg',
      },
      {
        text: 'Nieuwe koffie in de koffieautomaten',
        image:
          'https://d2csxpduxe849s.cloudfront.net/media/9E3E0032-62BD-4694-A3CCB1BC17CA3CAF/B0E01040-A9D6-4510-8D9CC83C31B3874E/A8BBA5EC-8667-422E-A60897E3E75DEC52/Studentensite%20hero%20desktop-Untitled%20design%20-4.jpg',
      },
    ];
  });

  return (
    <div class={styles['container']}>
      <img src='/featured-block.jpg' alt='header-background-image'></img>
      <div class={styles['text']}>
        <h1>Welkom op student.uva.nl</h1>
        <h2>Op student.uva.nl vind je praktische informatie over alles rond je studie.</h2>
      </div>
      <div class={styles['featured']}>
        {items.value.map(({ text, image }) => {
          return <FeatureItem text={text} image={image}></FeatureItem>;
        })}
      </div>
    </div>
  );
});
