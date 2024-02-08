import { component$ } from "@builder.io/qwik";
import styles from "./styles.module.css";
import { title } from "process";

export const TopicsApp = component$(() => {
  const topics = [
    "E-mail",
    "Je UvAnetID activeren",
    "Printen, kopiëren en scannen",
    "Vakaanmelding",
    "VPN",
    "Wifi",
  ];
  const apps = [
    {
      title: "Canvas",
      image:
        "https://assets-eu-01.kc-usercontent.com:443/ebfc94e1-af35-01d9-96bc-e8359050cb0e/5e0d3e64-a109-4958-bc25-beb42ececa28/canvas.png",
    },
    {
      title: "UvA webmail",
      image:
        "https://assets-eu-01.kc-usercontent.com/ebfc94e1-af35-01d9-96bc-e8359050cb0e/c7fb56fd-a3a4-4485-bc71-56be4d1dad65/webmail.png",
    },
    {
      title: "Studiegids",
      image:
        "https://assets-eu-01.kc-usercontent.com/ebfc94e1-af35-01d9-96bc-e8359050cb0e/ccbd9711-b87b-4e90-b7f8-f3f1e4b1d39d/studiegids.png",
    },
    {
      title: "Studieresultaten",
      image:
        "https://assets-eu-01.kc-usercontent.com/ebfc94e1-af35-01d9-96bc-e8359050cb0e/42244a26-5e0c-4cf4-a143-1cb3cc9ef057/Study%20results.png",
    },
    {
      title: "Catalogus bibliotheek",
      image:
        "https://assets-eu-01.kc-usercontent.com/ebfc94e1-af35-01d9-96bc-e8359050cb0e/6580c4b1-0733-4c61-9fc1-a11ab84fd26f/biep.png",
    },
    {
      title: "Studieplekken",
      image:
        "https://assets-eu-01.kc-usercontent.com/ebfc94e1-af35-01d9-96bc-e8359050cb0e/ee23a347-aa3f-4c96-8d43-171e64bca883/studieplek.png",
    },
    {
      title: "SIS",
      image:
        "https://assets-eu-01.kc-usercontent.com/ebfc94e1-af35-01d9-96bc-e8359050cb0e/34098bb4-f1ec-4d56-bea5-5af28c06723f/results.png",
    },
  ];

  return (
    <>
      <div class={styles["container"]}>
        <div class={styles["topics"]}>
          <div>Belangrijke onderwerpen</div>
          <div class={styles["items"]}>
            {topics.map((item) => (
              <div>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fal"
                  data-icon="chevron-right"
                  class="svg-inline--fa fa-chevron-right fa-fw wish--c-iMVRpC"
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

          <div class={styles["topics-footer"]}>Alle onderwerpen</div>
        </div>
        <div class={styles["apps"]}>
          <div>Meest gebruikte apps</div>

          <div class={styles["apps-items"]}>
            {apps.map(({ title, image }) => (
              <div class={styles["apps-item"]}>
                <img src={image}></img>
                <div>{title}</div>
              </div>
            ))}
          </div>

          <div class={styles["topics-footer"]}>Alle apps</div>
        </div>
      </div>
    </>
  );
});
