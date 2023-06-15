import { component$ } from "@builder.io/qwik";
import styles from "./styles.module.css";

export const Timetable = component$(() => {
  return (
    <>
      <div class={styles["container"]}>
        <div class={styles["title"]}>Rooster</div>
        <div class={styles["rooster"]}>
          <div>Log in om je rooster te bekijken.</div>
          <button>Inloggen</button>
        </div>
      </div>
    </>
  );
});
