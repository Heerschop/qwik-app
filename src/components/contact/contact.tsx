import { component$, useSignal } from "@builder.io/qwik";
import styles from "./styles.module.css";

export const Contact = component$(() => {
  const selected = useSignal(-1);

  return (
    <>
      <div class={styles["container"]}>
        <div class={styles["left"]}>
          <div class={styles["head"]}>Contact</div>
          <div class={styles["title"]}>
            <b>Central Student Service Desk (CSSD)</b>
          </div>
          <div class={styles["text"]}>
            Heb je algemene vragen over studeren aan de UvA, zoals over in- of
            uitschrijven of collegegeld? Neem contact op met de CSSD. Wil je
            iets aanvragen of laten ondertekenen? Gebruik het contactformulier
            met UvAnetID loginExterne link. Of stel je vraag zonder UvAnetID
            loginExterne link.
          </div>
        </div>
        <div class={styles["right"]}>
          <div class={styles["contact"]}>
            <svg
              class={styles["balloon"]}
              aria-hidden="true"
              focusable="false"
              data-prefix="fal"
              data-icon="comments"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path
                fill="currentColor"
                d="M32 176c0-74.8 73.7-144 176-144s176 69.2 176 144s-73.7 144-176 144c-15.3 0-30.6-1.9-46.3-5c-3.5-.7-7.1-.2-10.2 1.4c-6.1 3.1-12 6-18 8.7c-28.4 12.9-60.2 23.1-91.5 26c14.9-19 26.8-39.7 37.6-59.9c3.3-6.1 2.3-13.6-2.5-18.6C50 244.2 32 213.1 32 176zM208 0C93.1 0 0 78.9 0 176c0 44.2 19.8 80.1 46 110c-11.7 21-24 40.6-39.5 57.5l0 0-.1 .1c-6.5 7-8.2 17.1-4.4 25.8C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.9-2.2 9.6-4.5 14.3-6.8c15.3 2.8 30.9 4.6 47 4.6c114.9 0 208-78.9 208-176S322.9 0 208 0zM447.4 160.5C541.6 167 608 233 608 304c0 37.1-18 68.2-45.1 96.6c-4.8 5-5.8 12.5-2.5 18.6c10.9 20.2 22.7 40.8 37.6 59.9c-31.3-3-63.2-13.2-91.5-26c-6-2.7-11.9-5.6-18-8.7c-3.2-1.6-6.8-2.1-10.2-1.4c-15.6 3.1-30.9 5-46.3 5c-68.2 0-123.6-30.7-153.1-73.3c-11 3-22.3 5.2-33.8 6.8C279 439.8 349.9 480 432 480c16.1 0 31.7-1.8 47-4.6c4.6 2.3 9.4 4.6 14.3 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.7 2-18.9-4.4-25.8l-.1-.1 0 0c-15.5-17-27.8-36.5-39.5-57.5c26.2-29.9 46-65.8 46-110c0-94.4-87.8-171.5-198.2-175.8c2.8 10.4 4.7 21.2 5.6 32.3z"
              ></path>
            </svg>
            Stel je vraag via het contactformulier
            <svg
              class={styles["arrow"]}
              aria-hidden="true"
              focusable="false"
              data-prefix="fal"
              data-icon="chevron-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M299.3 244.7c6.2 6.2 6.2 16.4 0 22.6l-192 192c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L265.4 256 84.7 75.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l192 192z"
              ></path>
            </svg>
          </div>
          <div class={styles["info"]}>
            <div>Contactgegevens</div>
            <div class={styles["info-buttons"]}>
              <button
                onClick$={() => {
                  selected.value = selected.value === 0 ? -1 : 0;
                }}
              >
                <div class={styles["button-text"]}>
                  <div>Whatsapp</div>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="chevron-down"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M267.3 395.3c-6.2 6.2-16.4 6.2-22.6 0l-192-192c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L256 361.4 436.7 180.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-192 192z"
                    ></path>
                  </svg>
                </div>
              </button>
              {selected.value === 0 && (
                <div class={styles["button-content"]}>
                  De CSSD is bereikbaar op maandag t/m vrijdag tussen 09:00 en
                  17:00 uur. Bellen of sms'en is niet mogelijk naar dit nummer.
                  <button>Start een whatsappgesprek</button>
                  +31 (0)6 48 34 76 69{" "}
                </div>
              )}
              <hr />
              <button
                onClick$={() => {
                  selected.value = selected.value === 1 ? -1 : 1;
                }}
              >
                <div class={styles["button-text"]}>
                  Telefoon
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="chevron-down"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M267.3 395.3c-6.2 6.2-16.4 6.2-22.6 0l-192-192c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L256 361.4 436.7 180.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-192 192z"
                    ></path>
                  </svg>
                </div>
              </button>
              {selected.value === 1 && (
                <div class={styles["button-content"]}>
                  De CSSD is bereikbaar op maandag t/m vrijdag tussen 09:00 en
                  <button>Bellen</button>
                  17:00 uur. +31 (0)20 525 1401{" "}
                </div>
              )}
              <hr />
              <button
                onClick$={() => {
                  selected.value = selected.value === 2 ? -1 : 2;
                }}
              >
                <div class={styles["button-text"]}>
                  Langskomen
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="chevron-down"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M267.3 395.3c-6.2 6.2-16.4 6.2-22.6 0l-192-192c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L256 361.4 436.7 180.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-192 192z"
                    ></path>
                  </svg>
                </div>
              </button>
              {selected.value === 2 && (
                <div class={styles["button-content"]}>
                  De balie van de CSSD is open op maandag t/m vrijdag tussen
                  09:00 en 17:00 uur. We zijn te vinden in de centrale hal op de
                  begane grond (REC-E).
                  <button>Bezoekadres (Maps)</button>
                  Gebouw E, Roetersstraat 11, Amsterdam. (Let op: dit is geen
                  postadres). Link naar praktische informatie
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
