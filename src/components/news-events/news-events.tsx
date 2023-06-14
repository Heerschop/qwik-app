import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import styles from './styles.module.css';
import { Featured, Item } from '../featured/featured';

export const NewsEvents = component$(() => {
  const news = useSignal<Item[]>([]);
  const events = useSignal<Item[]>([]);

  useVisibleTask$(() => {
    console.log('Visible: News Events');

    news.value = [
      {
        text: 'NSE 2023: UvA-studenten scoren de UvA 3,86 uit 5',
        image:
          'https://d2csxpduxe849s.cloudfront.net/media/9E3E0032-62BD-4694-A3CCB1BC17CA3CAF/A84CCA4D-F764-41D5-B9AEE021EFBAC697/34436712-FE50-45F7-8D83F3A1F0D7A1E1/Studentensite%20hero%20desktop-Afbeelding%20Nationale%20Studenten%20Enqu-te.jpg',
      },
      {
        text: 'Uitslag studentenraadsverkiezingen 2023',
        image:
          'https://d2csxpduxe849s.cloudfront.net/media/9E3E0032-62BD-4694-A3CCB1BC17CA3CAF/944A3BD0-716E-4927-86A6CE7469DB5A95/A8BA5349-91E8-4056-ADC581EF6A3E5F63/Studentensite%20hero%20desktop-sr-uva.jpg',
      },
      {
        text: 'Consultatie kaderbrief 2024 van start gegaan',
        image:
          'https://d2csxpduxe849s.cloudfront.net/media/9E3E0032-62BD-4694-A3CCB1BC17CA3CAF/F441C615-D155-4EF3-B58AD58CAC9A1CF9/Studentensite%20hero%20desktop-uva%20lisa-6614.jpg',
      },
      {
        text: 'Relive Intree: Mentoren en crew gezocht!',
        image:
          'https://d2csxpduxe849s.cloudfront.net/media/9E3E0032-62BD-4694-A3CCB1BC17CA3CAF/A151CE0A-B35E-4674-9C2A0AE14900961B/0E558F0C-AEB3-4C3B-BC653F2FB6144844/Studentensite%20hero%20desktop-EC_01829.jpg',
      },
    ];
    events.value = [
      {
        text: 'Persoonlijke voornaamwoorden nu beschikbaar in Canvas en Microsoft 365',
        image:
          'https://d2csxpduxe849s.cloudfront.net/media/9E3E0032-62BD-4694-A3CCB1BC17CA3CAF/B85BD441-6354-4C5A-B73485CDEFDDDE58/1ED290BF-FBF8-4503-A65AFC258F34FD9A/Studentensite%20hero%20desktop-Regenboogvlag.jpg',
      },
      {
        text: 'Eindejaars-BBQ Geschiedenis',
        image:
          'https://d2csxpduxe849s.cloudfront.net/media/9E3E0032-62BD-4694-A3CCB1BC17CA3CAF/3EC9BE81-01E3-495D-A645AF320ECC9DED/4B7251F4-05C6-42CF-B1D4B136D5A8BD8D/Studentensite%20hero%20desktop-Bachelor%20Geschiedenis%20fotograafJane%20Rix%20-shutterstock_1113883469.jpg',
      },
      {
        text: 'Begeleiding na UvA Matching',
        image:
          'https://uva.corsizio.com/uploads/60a6bfaed68d0449607078b8/events/64427be166b7266e3f3396e8/photo-FcOPFiaQ1.jpg',
      },
      {
        text: 'Ren de Damloop met Team UvA',
        image:
          'https://d2csxpduxe849s.cloudfront.net/media/9E3E0032-62BD-4694-A3CCB1BC17CA3CAF/22D5C94C-DD5E-4D96-9F37A3993B4FA05F/FFE3289B-B3BA-4A15-ACC6B344EFF3F866/Studentensite%20hero%20desktop-DSC00318.jpg',
      },
    ];
  });

  return (
    <div class={styles['container']}>
      <div class={styles['label']}>Nieuws</div>
      <Featured items={news.value} />
      <div class={styles['link']}>Alle nieuwsberichten</div>
      <div class={styles['label']}>Events</div>
      <Featured items={events.value} />
      <div class={styles['link']}>Alle events</div>
    </div>
  );
});
