import { component$ } from "@builder.io/qwik";
import styles from "./styles.module.css";

export const Footer = component$(() => {
  const content = {
    "Belangrijke onderwerpen": [
      "Afstuderen en diploma",
      "E-mail",
      "Je UvAnetID activeren",
      "Printen, kopiëren en scannen",
      "Studeren in het buitenland",
      "Vakaanmelding",
      "VPN",
      "Wifi",
    ],
    "Direct naar": [
      "Canvas",
      "UvA webmail",
      "Rooster",
      "Studiegids",
      "Catalogus bibliotheek",
      "Studieplek zoeken",
      "Gevonden voorwerpen",
      "Studieresultaten",
      "Vakaanmelding",
      "Website archief",
    ],
    "Informatie voor": [
      "Ingeschreven studenten",
      "Studiekiezers",
      "Alumni",
      "Medewerkers",
    ],
    Contact: [
      "Studieadviseur",
      "Onderwijsbalie",
      "Central Student Service Desk",
      "Bibliotheek UvA",
      "Servicedesk ICT Services",
      "Facility Services",
      "Locaties en gebouwen",
      "Alarmnummer in een noodsituatie",
    ],
  };

  return (
    <>
      <div class={styles["container"]}>
        <div class={styles["content"]}>
          {Object.entries(content).map(([key, value]) => (
            <div class={styles["topic"]}>
              <div class={styles["topic-title"]}>{key}</div>
              {value.map((item) => (
                <div class={styles["topic-item"]}>
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

                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div class={styles["bottom"]}>
          aaaa
        </div>
      </div>
    </>
  );
});
