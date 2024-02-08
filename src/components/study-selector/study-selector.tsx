import { component$, useSignal } from '@builder.io/qwik';
import styles from './styles.module.css';

export const StudySelector = component$(() => {
  const studies = useSignal<string[]>([]);

  return (
    <div class={styles['container']}>
      <span>Toon informatie voor opleiding:</span>
      <div class={styles['selector-container']}>
        <button
          onClick$={() => {
            if (studies.value.length === 0) {
              studies.value = [
                'Forensische) Orthopedagogiek (schakelprogramma)',
                'Accountancy and Control (master)',
                'Accountancy and Control (premaster)',
                'Actuarial Science (bachelor)',
                'Actuarial Science and Mathematical Finance (master)',
                'American Studies (master)',
                'Ancient Studies (bachelor)',
                'Arabische taal en cultuur (bachelor)',
                'Archival and Information Studies (duale master)',
                'Art and Performance Research Studies (research master)',
                'Artificial Intelligence (master)',
                'Biological Sciences (master)',
                'Biomedical Sciences (master)',
                'Biomedische wetenschappen (bachelor)',
                'BMS: Cell Biology and Advanced Microscopy (master)',
                'BMS: Cognitive Neurobiology and Clinical Neurophysiology (master)',
                'BMS: Developmental and Therapeutic Biology (master)',
                'BMS: Experimental Internal Medicine (master)',
                'BMS: Infection and Immunity (master)',
                'BMS: Medical Biochemistry and Biotechnology (master)',
                'BMS: Molecular Neurosciences (master)',
                'BMS: Physiology of Synapses and Networks (master)',
                'BMS: Psychopharmacology and Pathophysiology (master)',
                'Boekwetenschap (schakelprogramma)',
                'Brain and Cognitive Sciences (research master)',
                'BS: Ecology and Evolution (master)',
                'BS: Freshwater and Marine Biology (master)',
                'BS: General Biology (master)',
                'BS: Green Life Sciences (master)',
                'Business Administration (bachelor)',
                'Business Administration (master)',
                'Business Administration (premaster)',
                'Business Analytics (bachelor)',
                'Business Economics (master)',
                'Business Economics (premaster)',
                'Chemistry (master, joint degree)',
                'Chemistry: Analytical Sciences (master, joint degree)',
                'Chemistry: Molecular Sciences (master, joint degree)',
                'Chemistry: Science for Energy and Sustainability (master, joint degree)',
                'Child Development and Education (research master)',
                'Classics and Ancient Civilizations (master)',
                'Cognition, Language and Communication (bachelor)',
                'Commerciële rechtspraktijk (master)',
                'Communicatiewetenschap (bachelor)',
                'Communication and Information (duale master)',
                'Communication Science (bachelor)',
                'Communication Science (master)',
                'Communication Science (premaster)',
                'Communication Science (research master)',
                'Comparative Cultural Analysis (master)',
                'Comparative Literature (master)',
                'Computational Science (master, joint degree)',
                'Computational Social Science (bachelor)',
                'Conflict Resolution and Governance (master)',
                'Conservation and Restoration of Cultural Heritage (master)',
                'Cultural Analysis (research master)',
                'Cultural and Social Anthropology (master)',
                'Cultural and Social Anthropology (premaster)',
                'Cultural Anthropology and Development Sociology (bachelor)',
                'Culturele antropologie en ontwikkelingssociologie (bachelor)',
                'Cultuurwetenschappen (bachelor)',
                'Curating Art and Cultures (duale master)',
                'Data Science and Business Analytics (master)',
                'Documentaire en fictie (duale master)',
                'Duits, Educatie en communicatie (master)',
                'Duits, Educatie en communicatie (schakelprogramma)',
                'Duitslandstudies (bachelor)',
                'Duitslandstudies (master)',
                'East European Studies (master)',
                'Economics and Business Economics (bachelor)',
                'Engels, Educatie en communicatie (master)',
                'Engels, Educatie en communicatie (schakelprogramma)',
                'English Language and Culture (bachelor)',
                'English Literature and Culture (master)',
                'Entrepreneurship (master)',
                'ES: Environmental Management (master)',
                'ES: Future Planet Ecosystem Science (master)',
                'ES: Geo-Ecological Dynamics (master)',
                'European Competition Law and Regulation (master)',
                'European Private Law (master)',
                'European Studies (bachelor)',
                'European Studies (premaster)',
                'European Union Law (master)',
                'Europese studies (bachelor)',
                'Exchange programme Economics and Business',
                'Exchange programme Humanities',
                'Exchange programme Law - Amsterdam Law School',
                'Exchange programme PPLE - Politics, Psychology, Law and Economics',
                'Exchange programme Science',
                'Exchange programme Social and Behavioural Sciences',
                'Fiscale Economie (bachelor)',
                'Fiscale Economie (master)',
                'Fiscale Economie (premaster)',
                'Forensic Science (master)',
                'Frans, Educatie en communicatie (master)',
                'Frans, Educatie en communicatie (schakelprogramma)',
                'Franse taal en cultuur (bachelor)',
                'Future Planet Studies (bachelor)',
                'General Linguistics (master)',
                'Geschiedenis (research master)',
                'Geschiedenis (schakelprogramma)',
                'Geschiedenis van de internationale betrekkingen (master)',
                'Geschiedenis, Educatie en communicatie (master)',
                'Gezondheidsrecht (master)',
                'Gezondheidszorgpsychologie (master)',
                'Global Arts, Culture and Politics (bachelor)',
                'Griekse en Latijnse taal en cultuur (bachelor)',
                'Hebreeuwse taal en cultuur (bachelor)',
                'Heritage and Memory Studies (duale master)',
                'Heritage, Memory and Archaeology (research master)',
                'Holocaust and Genocide Studies (master)',
                'Human Geography (premaster)',
                'Human Geography and Planning (bachelor)',
                'Identity and Integration (master)',
                'Informatiekunde (bachelor)',
                'Information Studies (master)',
                'Information Systems (master)',
                'Interdisciplinaire sociale wetenschap (bachelor)',
                'Internationaal en Europees belastingrecht (master)',
                'International and Transnational Criminal Law (master)',
                'International Criminal Law - Joint programme with Columbia Law School (master)',
                'International Development Studies (master)',
                'International Development Studies (premaster)',
                'International Development Studies (research master)',
                'International Dramaturgy (duale master)',
                'International Dramaturgy and Theatre Studies (premaster)',
                'International Tax Law (advanced master)',
                'International Trade and Investment Law (master)',
                'Italië Studies (bachelor)',
                'Jewish Studies (master)',
                'Journalism, Media and Globalisation (Erasmus Mundus Master - joint degree)',
                'Journalistiek en media (duale master)',
                'Kunst, cultuur en politiek (master)',
                'Kunst, cultuur en politiek (schakelprogramma)',
                'Kunstgeschiedenis (bachelor)',
                'Kunstgeschiedenis (master)',
                'Kunstgeschiedenis (schakelprogramma)',
                'Kunstmatige intelligentie (bachelor)',
                'Language and Society (master)',
                'Language, Literature and Education (master)',
                'Language, Literature and Education (premaster)',
                'Latin American Studies (master)',
                'Latin American Studies (premaster)',
                'Lerarenopleidingen',
                'Linguistics and Communication (research master)',
                'Literary and Cultural Analysis (bachelor)',
                'Literary Studies (research master)',
                'Literature Studies (premaster)',
                'Literature, Culture and Society (master)',
                'Media and Culture (bachelor)',
                'Media and Information (bachelor)',
                'Media en cultuur (bachelor)',
                'Media Studies (premaster)',
                'Media Studies (research master)',
                'Medical Anthropology and Sociology (master)',
                'Medical Anthropology and Sociology (premaster)',
                'Medical informatics (master)',
                'Medische informatiekunde (bachelor)',
                'Midden-Oostenstudies (master)',
                'Midden-Oostenstudies (schakelprogramma)',
                'Militaire geschiedenis (master)',
                'Museum Studies (duale master)',
                'Music Studies (premaster)',
                'Muziekwetenschap (bachelor)',
                'Natuurkunde en sterrenkunde (bachelor, joint degree)',
                'Nederlands als tweede taal en meertaligheid (duale master)',
                'Nederlands als tweede taal en meertaligheid (schakelprogramma)',
                'Nederlands, Educatie en communicatie (master)',
                'Nederlands, Educatie en communicatie (schakelprogramma)',
                'Nederlandse taal en cultuur (bachelor)',
                'Nederlandse taal en cultuur (master)',
                'New Media and Digital Culture (master)',
                'Nieuwgriekse taal en cultuur (bachelor)',
                'Onderwijswetenschappen (bachelor)',
                'Onderwijswetenschappen (master)',
                'Onderwijswetenschappen (schakelprogramma)',
                'Oudheidwetenschappen (bachelor)',
                'P&amp;A: Advanced Matter and Energy Physics (master, joint degree)',
                'P&amp;A: Astronomy and Astrophysics (master, joint degree)',
                'P&amp;A: Biophysics and Biophotonics (master, joint degree)',
                'P&amp;A: General Physics and Astronomy (master, joint degree)',
                'P&amp;A: GRAPPA - Gravitation, Astro-, and Particle Physics (master, joint degree)',
                'P&amp;A: Science for Energy and Sustainability (master, joint degree)',
                'P&amp;A: Theoretical Physics (master, joint degree)',
                'Pedagogical Sciences (master)',
                'Pedagogische wetenschappen (bachelor)',
                'Pedagogische wetenschappen (master)',
                'Philosophy (research master)',
                'Philosophy of the Humanities and the Social Sciences (master)',
                'Philosophy of the Humanities and the Social Sciences (schakelprogramma)',
                'Physics and Astronomy (master, joint degree)',
                'Political Science (bachelor)',
                'Political Science (master)',
                'Political Science (premaster)',
                'PPLE - Politics, Psychology, Law and Economics (bachelor)',
                'Preservation and Presentation of the Moving Image (duale master)',
                'Preventieve jeugdhulp en opvoeding (schakelprogramma)',
                'Privaatrechtelijke rechtspraktijk (master)',
                'Psychobiologie (bachelor)',
                'Psychologie (schakelprogramma)',
                'Psychology (research master), EN',
                'Public International Law (master)',
                'Publieksgeschiedenis (master)',
                'Rechtsgeleerdheid (bachelor)',
                'Rechtsgeleerdheid met HBO-vooropleiding (schakelprogramma)',
                'Rechtsgeleerdheid met WO-vooropleiding (schakelprogramma)',
                'Redacteur/editor (duale master)',
                'Religiewetenschappen (bachelor)',
                'Religious Studies (research master)',
                'Russische en Slavische studies (bachelor)',
                'Scandinavië studies (bachelor)',
                'Scheikunde (bachelor, joint degree)',
                'Security and Network Engineering (master)',
                'Sign Language Linguistics (bachelor)',
                'Social Sciences (research master)',
                'Sociale geografie en Planologie (bachelor)',
                'Software Engineering (master)',
                'Spaanse en Latijns-Amerikaanse studies (bachelor)',
                'Spirituality and Religion (master)',
                'Spirituality and Religion (schakelprogramma)',
                'Staats- en bestuursrecht (master)',
                'Stochastics and Financial Mathematics (master)',
                'Taalwetenschappen (bachelor)',
                'Television and Cross-Media Culture (master)',
                'Theaterwetenschap (bachelor)',
                'Universitaire Pabo van Amsterdam (bachelor)',
                'Urban and Regional Planning (master)',
                'Urban and Regional Planning (premaster)',
                'Urban Studies (research master)',
                'Vertalen (schakelprogramma)',
              ];
            } else {
              studies.value = [];
            }
          }}
        >
          <div>American Studies (master)</div>
          <svg
            aria-hidden='true'
            focusable='false'
            data-prefix='fal'
            data-icon='chevron-down'
            class='svg-inline--fa fa-chevron-down '
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
          >
            <path
              fill='currentColor'
              d='M267.3 395.3c-6.2 6.2-16.4 6.2-22.6 0l-192-192c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L256 361.4 436.7 180.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-192 192z'
            ></path>
          </svg>
        </button>
        {studies.value.length > 0 && (
          <div>
            <ul>
              {studies.value.map((item) => (
                <li
                  key={item}
                  onClick$={() => {
                    studies.value = [];
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
});
