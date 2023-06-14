import { component$ } from '@builder.io/qwik';
import styles from './styles.module.css';

export type Item = { text: string; image: string };

const FeatureItem = component$(({ text, image }: Item) => {
  return (
    <div class={styles['feature-container']}>
      <div class={styles['feature-item']}>
        <img src={image}></img>
        <div>{text}</div>
      </div>
    </div>
  );
});

export const Featured = component$(({ items }: { items: Item[] }) => {
  return (
    <div class={styles['featured']}>
      {items.map(({ text, image }) => {
        return <FeatureItem text={text} image={image}></FeatureItem>;
      })}
    </div>
  );
});
