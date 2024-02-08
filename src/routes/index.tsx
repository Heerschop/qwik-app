import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Contact } from '~/components/contact/contact';
import { FeaturedBlock } from '~/components/featured-block/featured-block';
import { Footer } from '~/components/footer/footer';
import { Header } from '~/components/header/header';
import { NewsEvents } from '~/components/news-events/news-events';
import { StudySelector } from '~/components/study-selector/study-selector';
import { Timetable } from '~/components/timetable/timetable';
import { TopicsApp } from '~/components/topics-app/topics-app';
import styles from './styles.module.css';

// margin-left: auto;
// margin-right: auto;

export default component$(() => {
  return (
    <div class={styles['container']}>
      <Header />
      <StudySelector />
      <FeaturedBlock />
      <Timetable />
      <TopicsApp/>
      <NewsEvents/>
      <Contact />
      <Footer />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welkom op student.uva.nl',
  meta: [
    {
      name: 'description',
      content: 'student.uva.nl',
    },
  ],
};
