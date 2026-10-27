document.addEventListener('DOMContentLoaded', () => {
  const views = document.querySelectorAll('.view');
  const mainContent = document.querySelector('.main-content');
  const navItems = document.querySelectorAll('[data-tab]');
  const homeLinks = document.querySelectorAll('[data-target]');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileBackdrop = document.querySelector('.mobile-menu-backdrop');
  const menuToggle = document.querySelector('.menu-toggle');
  const menuClose = document.querySelector('.mobile-menu-close');
  const logoModal = document.getElementById('logoModal');
  const logoTriggers = document.querySelectorAll('.brand-modal-trigger');
  const logoClose = document.querySelector('.logo-modal-close');
  const museumGrid = document.querySelector('.museum-grid');
  const museumFilters = document.querySelectorAll('.museum-filter [data-province]');
  const translate = (source) => window.NorthI18n?.t(source) ?? source;
  const museums = [
    { province: 'Friesland', city: 'Leeuwarden', name: 'Fries Museum', website: 'https://www.friesmuseum.nl/', description: 'Ontdek de geschiedenis en cultuur van Friesland aan de hand van kunst, bijzondere voorwerpen en persoonlijke verhalen.', image: 'image1.jpeg', tag: 'Populair' },
    { province: 'Friesland', city: 'Leeuwarden', name: 'Natuurmuseum Fryslân', website: 'https://www.natuurmuseumfryslan.nl/', description: 'Ontdek de Friese natuur, dieren en landschappen in interactieve tentoonstellingen en ga op onderwateravontuur met de OnderWaterSafari.', image: 'image2.jpeg', tag: 'Nieuw' },
    { province: 'Friesland', city: 'Dokkum', name: 'Museum Dokkum', website: 'https://www.museumdokkum.nl/', description: 'Leer over de geschiedenis van Dokkum en de regio aan de hand van archeologische vondsten, kunst en verhalen uit de stad.', image: 'image3.jpg' },
    { province: 'Friesland', city: 'Sneek', name: 'Nationaal Modelspoor Museum', website: 'https://www.modelspoormuseum.nl/', description: 'Bekijk modelspoorbanen, treinen en miniatuurlandschappen en ontdek hoe modelbouwers hun werelden op schaal maken.', image: 'image4.jpeg' },
    { province: 'Friesland', city: 'Formerum, Terschelling', name: 'Wrakkenmuseum', website: 'https://www.wrakkenmuseum.nl/', description: 'Duik in de maritieme geschiedenis van Terschelling met vondsten uit scheepswrakken, aangespoelde voorwerpen en verhalen van de zee.', image: 'image5.jpeg' },
    { province: 'Friesland', city: 'Gorredijk', name: 'Museum Opsterlân', website: 'https://www.museumopsterlan.nl/', description: 'Maak kennis met de geschiedenis van Opsterland, de turfwinning, het dagelijks leven en de mensen die de streek vormgaven.', image: 'image6.jpg' },
    { province: 'Friesland', city: 'Hollum, Ameland', name: 'Bunkermuseum Ameland', website: 'https://www.bunkermuseumameland.nl/', description: 'Bezoek bunkers uit de Tweede Wereldoorlog en ontdek hoe de Duitse bezetting en de Atlantikwall het leven op Ameland beïnvloedden.', image: 'image7.jpeg' },
    { province: 'Friesland', city: 'Damwâld', name: 'Museum De Sûkerei', website: 'https://www.desukerei.nl/', description: 'Stap binnen in de geschiedenis van de Friese Wouden en bekijk woningen, voorwerpen en verhalen over het leven van vroeger.', image: 'image8.jpeg' },
    { province: 'Friesland', city: 'Sloten', name: 'Museum Sloten', website: 'https://www.museumsloten.nl/', description: 'Ontdek de geschiedenis van Sloten, een van de Friese elf steden, in een museum in het hart van de historische vestingstad.', image: 'image9.jpeg' },
    { province: 'Friesland', city: 'Heerenveen', name: 'Museum Ferdinand Domela Nieuwenhuis', website: 'https://www.museumheerenveen.frl/', description: 'Leer over het leven en de idealen van Ferdinand Domela Nieuwenhuis en de sociale bewegingen die Nederland veranderden.', image: 'image10.jpeg' },
    { province: 'Friesland', city: 'Grou', name: 'Mineralogisch Museum Grou', website: 'https://mineralengrou.nl/', description: 'Bekijk mineralen, kristallen en fossielen uit verschillende delen van de wereld en ontdek hoe deze bijzondere materialen ontstaan.', image: 'image11.jpg' },
    { province: 'Friesland', city: 'Oranjewoud', name: 'Museum Belvédère', website: 'https://www.museumbelvedere.nl/', description: 'Bekijk moderne en hedendaagse kunst van kunstenaars uit Friesland en de noordelijke provincies, in een museum midden in het landschap.', image: 'image12.jpeg', tag: 'Populair' },
    { province: 'Friesland', city: 'Hollum, Ameland', name: 'Cultuurhistorisch Museum Sorgdrager', website: 'https://www.museumameland.nl/', description: 'Ontdek de cultuur en geschiedenis van Ameland in een commandeurshuis met voorwerpen en verhalen over het eiland en zijn bewoners.', image: 'image13.jpeg' },
    { province: 'Friesland', city: 'Franeker', name: 'Eise Eisinga Planetarium', website: 'https://www.eisinga-planetarium.nl/', description: 'Bewonder het werkende planetarium dat Eise Eisinga in de achttiende eeuw in zijn woonkamer bouwde en ontdek hoe het zonnestelsel beweegt.', image: 'image14.jpeg', tag: 'Populair' },
    { province: 'Friesland', city: 'Workum', name: 'Jopie Huisman Museum', website: 'https://www.jopiehuismanmuseum.nl/', description: 'Bekijk de levensechte schilderijen van Jopie Huisman en ontdek de verhalen en mensen achter zijn werk.', image: 'image15.jpeg', tag: 'Populair' },
    { province: 'Groningen', city: 'Groningen', name: 'Universiteitsmuseum Groningen', website: 'https://www.rug.nl/museum/', description: 'Ontdek wetenschap en onderzoek aan de Rijksuniversiteit Groningen met historische collecties en verrassende tentoonstellingen.', image: 'image16.jpeg' },
    { province: 'Groningen', city: 'Groningen', name: 'Groninger Museum', website: 'https://www.groningermuseum.nl/', description: 'Bezoek wisselende tentoonstellingen met moderne en hedendaagse kunst, design en mode en bekijk de opvallende architectuur van het museum.', image: 'image17.jpeg', tag: 'Populair' },
    { province: 'Groningen', city: 'Groningen', name: 'Forum Groningen', website: 'https://forum.nl/', description: 'Verken Storyworld en de andere tentoonstellingen, bezoek de bibliotheek of cinema en geniet vanaf het dakterras van het uitzicht over de stad.', image: 'image18.jpg', tag: 'Populair' },
    { province: 'Groningen', city: 'Bellingwolde', name: 'Museum Westerwolde', website: 'https://www.museumwesterwolde.nl/', description: 'Leer over het landschap, de archeologie en de geschiedenis van Westerwolde in een monumentale omgeving.', image: 'image19.jpeg' },
    { province: 'Groningen', city: 'Uithuizen', name: 'Museum Menkemaborg', website: 'https://www.menkemaborg.nl/', description: 'Bezoek een historische Groninger borg met authentieke kamers, een tuin in oude stijl en verhalen over het leven van de bewoners.', image: 'image20.jpg' },
    { province: 'Groningen', city: 'Zoutkamp', name: 'Visserijmuseum Zoutkamp', website: 'https://www.visserijmuseum.com/', description: 'Ontdek de visserijgeschiedenis van Zoutkamp, de haven en het leven aan de Waddenkust aan de hand van scheepsmodellen en voorwerpen.', image: 'image21.jpeg' },
    { province: 'Groningen', city: 'Veendam', name: 'Veenkoloniaal Museum', website: 'https://www.veenkoloniaalmuseum.nl/', description: 'Ontdek hoe de veenkoloniën zijn ontstaan en bekijk verhalen over turfwinning, scheepvaart, landbouw en het dagelijks leven.', image: 'image22.jpeg' },
    { province: 'Groningen', city: 'Slochteren', name: 'Fraeylemaborg', website: 'https://fraeylemaborg.nl/', description: 'Wandel door een historische borg met rijk ingerichte vertrekken en een uitgestrekt landgoed met park en tuinen.', image: 'image23.jpeg' },
    { province: 'Groningen', city: 'Ezinge', name: 'Museum Wierdenland', website: 'https://www.wierdenland.nl/', description: 'Ontdek de wierden, het wierdenlandschap en de archeologische geschiedenis van Noord-Groningen.', image: 'image24.jpg' },
    { province: 'Groningen', city: 'Warffum', name: 'Openluchtmuseum Het Hoogeland', website: 'https://www.hethoogeland.com/', description: 'Wandel door een historisch Gronings dorp met authentieke huizen, werkplaatsen en verhalen over het leven op het platteland.', image: 'image25.jpeg', tag: 'Populair' },
    { province: 'Groningen', city: 'Groningen', name: 'Wall House #2', website: 'https://www.groningermuseum.nl/museum/locaties/wall-house-2', description: 'Bekijk Wall House #2, een bijzonder architectonisch woonhuis van John Hejduk aan het Hoornsemeer, en ontdek het ontwerp van dichtbij.', image: 'image26.jpeg' },
    { province: 'Groningen', city: 'Groningen', name: 'GRID Grafisch Museum', website: 'https://gridgroningen.nl/', description: 'Ontdek de wereld van grafische vormgeving, druktechnieken, typografie en beeldcultuur in Groningen.', image: 'image27.jpeg' },
    { province: 'Drenthe', city: 'Nieuw-Buinen', name: 'Museum Goedewaagen', website: 'https://www.museumgoedewaagen.nl/', description: 'Bekijk keramiek en aardewerk van de fabriek Goedewaagen en ontdek de geschiedenis van dit Drentse bedrijf.', image: 'image28.jpg' },
    { province: 'Drenthe', city: 'Assen', name: 'Drents Archief', website: 'https://www.drentsarchief.nl/', description: 'Duik in de geschiedenis van Drenthe met archiefstukken, historische verhalen en tentoonstellingen over de provincie.', image: 'image29.jpeg' },
    { province: 'Drenthe', city: 'Zuidwolde', name: 'Streekmuseum De Wemme', website: 'https://www.dewemme.nl/', description: 'Ontdek het leven en werken in Zuidwest-Drenthe met streekgeschiedenis, oude ambachten en een collectie handkarren.', image: 'image30.jpeg' },
    { province: 'Drenthe', city: 'Eelde', name: 'Museum De Buitenplaats', website: 'https://www.museumdebuitenplaats.nl/', description: 'Bekijk figuratieve kunst in een bijzonder museumcomplex met een historische tuin in Eelde.', image: 'image31.jpeg' },
    { province: 'Drenthe', city: 'Dalen', name: 'Museummolen Jan Pol', website: 'https://www.museummolenjanpol.nl/', description: 'Bezoek een werkende korenmolen en leer hoe graan vroeger werd gemalen en hoe een molenaar zijn werk deed.', image: 'image32.jpeg' },
    { province: 'Drenthe', city: 'Eelde', name: 'Internationaal Klompenmuseum', website: 'https://www.klompenmuseum.nl/', description: 'Bekijk klompen en houten schoeisel uit vele landen en ontdek hoe verschillende culturen hout gebruikten om schoenen te maken.', image: 'image33.jpeg' },
    { province: 'Drenthe', city: 'Veenhuizen', name: 'Nationaal Gevangenismuseum', website: 'https://www.gevangenismuseum.nl/', description: 'Ontdek de geschiedenis van straf en gevangenschap in Nederland en leer over het bijzondere verleden van Veenhuizen.', image: 'image34.jpeg', tag: 'Populair' },
    { province: 'Drenthe', city: 'Roden', name: 'Museum Havezate Mensinge', website: 'https://www.mensinge.nl/', description: 'Stap binnen in een historische havezate en bekijk hoe de bewoners vroeger leefden in deze Drentse havezate.', image: 'image35.jpeg' },
    { province: 'Drenthe', city: 'Coevorden', name: 'Stedelijk Museum Coevorden', website: 'https://www.stedelijkmuseumcoevorden.nl/', description: 'Ontdek de geschiedenis van Coevorden als vestingstad en de verhalen over de stad en haar inwoners.', image: 'image36.jpeg' },
    { province: 'Drenthe', city: 'Roden', name: 'Speelgoedmuseum Roden', website: 'https://www.speelgoedmuseumroden.nl/', description: 'Reis door de geschiedenis van speelgoed en bekijk poppen, spellen, bouwsets en ander speelgoed van vroeger.', image: 'image37.jpeg' },
    { province: 'Drenthe', city: 'Assen', name: 'Drents Museum', website: 'https://drentsmuseum.nl/', description: 'Ontdek archeologie, kunst en geschiedenis in tentoonstellingen over Drenthe en bijzondere verhalen uit binnen- en buitenland.', image: 'image38.jpeg', tag: 'Populair' },
    { province: 'Drenthe', city: 'Boschoord', name: 'Het Verhaal van Boschoord', website: 'https://www.drentslandschap.nl/', description: 'Leer over de geschiedenis van Boschoord en de ontwikkeling van het landschap en de gemeenschap in dit bijzondere gebied.', image: 'image39.jpeg' },
    { province: 'Drenthe', city: 'Dwingeloo', name: 'Radiotelescoop Dwingeloo', website: 'https://www.camras.nl/', description: 'Ontdek de radiotelescoop bij Dwingeloo en leer hoe astronomen signalen uit de ruimte opvangen en onderzoeken.', image: 'radiotelescoop-dwingeloo.svg' },
  ];

  museums.forEach((museum) => {
    museum.cost = museum.tag === 'Populair' ? 34000 : museum.tag === 'Nieuw' ? 32000 : 30000;
  });

  function renderMuseums() {
    if (!museumGrid) {
      return;
    }

    const cards = museums.map((museum) => {
      const card = document.createElement('article');
      card.className = `museum-card${museum.tag ? ' featured' : ''}`;
      card.dataset.province = museum.province;
      card.dataset.city = museum.city;
      card.dataset.website = museum.website;
      card.dataset.description = museum.description;

      const imageContainer = document.createElement('div');
      imageContainer.className = `museum-image image-${museum.province.toLowerCase()}`;
      const image = document.createElement('img');
      image.src = `images/musea/${museum.image}`;
      image.alt = museum.name;
      image.loading = 'lazy';
      imageContainer.append(image);
      if (museum.tag) {
        const tag = document.createElement('span');
        tag.className = 'museum-tag';
        tag.textContent = translate(museum.tag);
        imageContainer.append(tag);
      }

      const content = document.createElement('div');
      content.className = 'museum-content';
      const meta = document.createElement('div');
      meta.className = 'museum-meta';
      const province = document.createElement('span');
      province.className = 'museum-province';
      province.textContent = translate(museum.province);
      const cost = document.createElement('span');
      cost.className = 'museum-cost';
      cost.textContent = translate(`${new Intl.NumberFormat('nl-NL').format(museum.cost)} punten`);
      meta.append(province, cost);
      const title = document.createElement('h3');
      title.textContent = museum.name;
      const button = document.createElement('button');
      button.className = 'museum-button';
      button.type = 'button';
      button.append(document.createTextNode(`${translate('Bekijk ontdekking')} `));
      const arrow = document.createElement('span');
      arrow.textContent = '→';
      button.append(arrow);
      content.append(meta, title, button);
      card.append(imageContainer, content);
      return card;
    });

    museumGrid.replaceChildren(...cards);
  }

  renderMuseums();
  const museumCards = document.querySelectorAll('.museum-card[data-province]');
  const museumDetailModal = document.getElementById('museumDetailModal');
  const museumDetailClose = document.querySelector('.museum-detail-close');
  const museumDetailDone = document.querySelector('.museum-detail-done');
  const museumDetailImage = document.getElementById('museumDetailImage');
  const museumDetailTitle = document.getElementById('museumDetailTitle');
  const museumDetailLocation = document.getElementById('museumDetailLocation');
  const museumDetailCost = document.getElementById('museumDetailCost');
  const museumDetailDescription = document.getElementById('museumDetailDescription');
  const museumDetailWebsite = document.getElementById('museumDetailWebsite');
  const museumDetailBalance = document.getElementById('museumDetailBalance');
  const museumDetailRedeem = document.querySelector('.museum-detail-redeem');
  const museumDetailNotice = document.getElementById('museumDetailNotice');
  const accountBalance = document.querySelector('.account-points strong');
  const leaderboardTabs = document.querySelectorAll('.leader-tabs [data-period]');
  const leaderboardPodium = document.getElementById('leaderPodium');
  const leaderboardRanks = document.getElementById('leaderRanks');
  const leaderboardRanksTitle = document.getElementById('leaderRanksTitle');
  const leaderboardPrevious = document.getElementById('leaderboardPrevious');
  const leaderboardNext = document.getElementById('leaderboardNext');
  const mapElement = document.getElementById('north-map');
  const mapStatus = document.getElementById('mapStatus');
  const mapFilterButtons = document.querySelectorAll('.map-filter[data-map-filter]');
  const museumDetailImageContent = document.createElement('img');
  museumDetailImageContent.alt = '';
  museumDetailImageContent.setAttribute('aria-hidden', 'true');
  museumDetailImage?.append(museumDetailImageContent);
  const t = (source) => window.NorthI18n?.t(source) ?? source;
  let rankPage = 0;
  let museumDetailOpener = null;
  let northMap = null;
  let mapMarkers = [];
  let northMapPositioned = false;
  const historyYearPicker = document.getElementById('historyYearPicker');
  const historyActivityRows = document.getElementById('historyActivityRows');
  const historyRecords = [
    { year: 2026, date: '2026-09-16T09:42:00', activity: 'Fietsen', place: 'Reitdiep', distance: 12.4, points: 124 },
    { year: 2026, date: '2026-09-14T16:10:00', activity: 'Wandelen', place: 'De Onlanden', distance: 8, points: 800 },
    { year: 2026, date: '2026-09-12T08:25:00', activity: 'Rennen', place: 'Noorderplantsoen', distance: 6.2, points: 620 },
    { year: 2026, date: '2026-09-10T18:30:00', activity: 'Zwemmen', place: 'Kardinge', distance: 1.2, points: 300 },
    { year: 2026, date: '2026-09-08T11:15:00', activity: 'Fietsen', place: 'Paterswoldsemeer', distance: 20.8, points: 208 },
    { year: 2025, date: '2025-08-21T09:20:00', activity: 'Fietsen', place: 'Lauwersmeer', distance: 32.4, points: 324 },
    { year: 2025, date: '2025-06-14T10:15:00', activity: 'Wandelen', place: 'Drents-Friese Wold', distance: 9.8, points: 980 },
    { year: 2025, date: '2025-07-02T14:35:00', activity: 'Zwemmen', place: 'Sneekermeer', distance: 1.5, points: 375 },
    { year: 2025, date: '2025-05-18T08:40:00', activity: 'Fietsen', place: 'Waddenkust', distance: 41.2, points: 412 },
    { year: 2024, date: '2024-08-09T11:25:00', activity: 'Fietsen', place: 'Greidhoeke', distance: 26.3, points: 263 },
    { year: 2024, date: '2024-05-21T10:05:00', activity: 'Wandelen', place: 'Lauwersmeer', distance: 7.4, points: 740 },
    { year: 2024, date: '2024-07-13T15:20:00', activity: 'Zwemmen', place: 'Paterswoldsemeer', distance: 1.2, points: 300 },
  ];
  const historyIconMarkup = {
    Fietsen: '<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="m6 17 4-8h4l4 8m-8-8 4 8h4m-2-11h3"/>',
    Wandelen: '<circle cx="13" cy="5" r="2"/><path d="m12 8-3 5 4 2 2 5m-6-7-3 5m6-5 4-2"/>',
    Rennen: '<circle cx="15" cy="5" r="2"/><path d="m13 8-4 4 4 2 2 5m-6-7-4 2m8-2 4 1"/>',
    Zwemmen: '<circle cx="18" cy="6" r="2"/><path d="M3 14c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2m-16 4c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2"/>',
  };
  const frisianMonths = ['jannewaris', 'febrewaris', 'maart', 'april', 'maaie', 'juny', 'july', 'augustus', 'septimber', 'oktober', 'novimber', 'desimber'];

  const northMapBounds = [[52.62, 4.55], [53.72, 7.3]];

  function renderHistoryYear() {
    if (!historyYearPicker || !historyActivityRows) {
      return;
    }

    const year = Number(historyYearPicker.value);
    const records = historyRecords
      .filter((record) => record.year === year)
      .sort((a, b) => new Date(b.date) - new Date(a.date));
    const totalDistance = records.reduce((total, record) => total + record.distance, 0);
    const totalPoints = records.reduce((total, record) => total + record.points, 0);
    const longestDistance = records.reduce((longest, record) => Math.max(longest, record.distance), 0);
    const locale = window.NorthI18n?.locale ?? 'nl-NL';
    const numberFormat = new Intl.NumberFormat(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 });

    document.getElementById('historyHeroDistance').textContent = numberFormat.format(totalDistance);
    document.getElementById('historyDistance').textContent = `${numberFormat.format(totalDistance)} km`;
    document.getElementById('historyActivityCount').textContent =
      `${records.length} ${t('activiteiten')} · ${year}`;
    document.getElementById('historyPoints').textContent = `+${new Intl.NumberFormat(locale).format(totalPoints)}`;
    document.getElementById('historyYearLabel').textContent = String(year);
    document.getElementById('historyLongestDistance').textContent = `${numberFormat.format(longestDistance)} km`;
    document.getElementById('historyLongestLabel').textContent = t('Langste route in dit jaar');

    historyActivityRows.replaceChildren();
    records.forEach((record) => {
      const row = document.createElement('div');
      row.className = 'history-row';

      const icon = document.createElement('span');
      const iconClass = { Fietsen: 'bike', Wandelen: 'walk', Rennen: 'run', Zwemmen: 'swim' }[record.activity];
      icon.className = `history-icon ${iconClass}`;
      icon.setAttribute('aria-hidden', 'true');
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.innerHTML = historyIconMarkup[record.activity];
      icon.append(svg);

      const details = document.createElement('div');
      const title = document.createElement('strong');
      title.textContent = `${t(record.activity)} · ${record.place}`;
      const description = document.createElement('small');
      const date = new Date(record.date);
      const dayLabel = new Intl.DateTimeFormat(locale, { day: 'numeric' }).format(date);
      const monthLabel = locale === 'fy-NL'
        ? frisianMonths[date.getMonth()]
        : new Intl.DateTimeFormat(locale, { month: 'long' }).format(date);
      const dateLabel = `${dayLabel} ${monthLabel}`;
      const timeLabel = new Intl.DateTimeFormat(locale, { hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).format(date);
      description.textContent = `${dateLabel} · ${timeLabel} · ${numberFormat.format(record.distance)} km`;
      details.append(title, description);

      const points = document.createElement('b');
      points.textContent = `+${new Intl.NumberFormat(locale).format(record.points)} ${t('punten')}`;
      row.append(icon, details, points);
      historyActivityRows.append(row);
    });
  }
  const mapSpots = [
    { name: 'Lauwersmeer Nationaal Park', category: 'wandelen', city: 'Lauwersoog', lat: 53.397, lng: 6.205, description: 'Wandel langs water, riet en vogelrijke oevers.' },
    { name: 'Drents-Friese Wold', category: 'wandelen', city: 'Appelscha', lat: 52.914, lng: 6.287, description: 'Uitgestrekte bossen, heide en zandverstuivingen.' },
    { name: 'Nationaal Park Dwingelderveld', category: 'wandelen', city: 'Dwingeloo', lat: 52.817, lng: 6.382, description: 'Wandel door een groot heide- en vennengebied.' },
    { name: 'Fochteloërveen', category: 'wandelen', city: 'Fochteloo', lat: 53.011, lng: 6.336, description: 'Rustig hoogveengebied met uitkijkpunten en routes.' },
    { name: 'Nationaal Park Drentsche Aa', category: 'wandelen', city: 'Gasteren', lat: 53.052, lng: 6.679, description: 'Beekdalen, esdorpen en wandelpaden door Drenthe.' },
    { name: 'De Onlanden', category: 'wandelen', city: 'Eelderwolde', lat: 53.175, lng: 6.532, description: 'Natuurgebied met wandelpaden en vogeluitkijkpunten.' },
    { name: 'Alde Feanen', category: 'wandelen', city: 'Eernewoude', lat: 53.115, lng: 5.900, description: 'Wandelroutes door moeras, rietland en petgaten.' },
    { name: 'Noorderplantsoen', category: 'wandelen', city: 'Groningen', lat: 53.224, lng: 6.555, description: 'Een groene stadswandeling door Groningen.' },
    { name: 'Paterswoldsemeer', category: 'zwemmen', city: 'Haren', lat: 53.165, lng: 6.568, description: 'Recreatiegebied met zwemstrand en watersport.' },
    { name: 'Sneekermeer', category: 'zwemmen', city: 'Sneek', lat: 53.035, lng: 5.756, description: 'Populair meer voor zwemmen, varen en suppen.' },
    { name: 'Heegermeer', category: 'zwemmen', city: 'Heeg', lat: 52.965, lng: 5.620, description: 'Fries merengebied met zwem- en watersportplekken.' },
    { name: 'Tjeukemeer', category: 'zwemmen', city: 'Delfstrahuizen', lat: 52.878, lng: 5.795, description: 'Groot meer met recreatiestranden en aanlegplaatsen.' },
    { name: 'Lauwersmeerstrand', category: 'zwemmen', city: 'Lauwersoog', lat: 53.405, lng: 6.205, description: 'Zwemmen en ontspannen aan de rand van het Lauwersmeer.' },
    { name: 'Zuidlaardermeer', category: 'zwemmen', city: 'Kropswolde', lat: 53.112, lng: 6.720, description: 'Recreatiegebied met zwemstrand aan het meer.' },
    { name: 'Schildmeer', category: 'zwemmen', city: 'Steendam', lat: 53.285, lng: 6.900, description: 'Zwemmen en watersport in het Groningse merengebied.' },
    { name: 'Oldambtmeer', category: 'zwemmen', city: 'Blauwestad', lat: 53.165, lng: 7.045, description: 'Ruim meer met strandjes en recreatiemogelijkheden.' },
    { name: 'Fietsen langs de Waddenkust', category: 'fietsen', city: 'Holwerd', lat: 53.369, lng: 5.900, description: 'Fietsroute langs de Friese zeedijk en het Wad.' },
    { name: 'Fietsroute rond het Lauwersmeer', category: 'fietsen', city: 'Zoutkamp', lat: 53.336, lng: 6.303, description: 'Rondje langs dorpen, natuur en uitzicht over het meer.' },
    { name: 'Fietsen door de Greidhoeke', category: 'fietsen', city: 'Franeker', lat: 53.185, lng: 5.541, description: 'Landschappelijke route door het Friese terpengebied.' },
    { name: 'Fietsen langs de Friese meren', category: 'fietsen', city: 'Sneek', lat: 53.032, lng: 5.658, description: 'Water, dorpjes en weidse uitzichten onderweg.' },
    { name: 'Fietsroute Drents-Friese Wold', category: 'fietsen', city: 'Diever', lat: 52.855, lng: 6.318, description: 'Fiets door bos, heide en kleine Drentse dorpen.' },
    { name: 'Fietsen door de Drentsche Aa', category: 'fietsen', city: 'Rolde', lat: 52.984, lng: 6.648, description: 'Rustige route door beekdal en esdorpenlandschap.' },
    { name: 'Fietsroute langs de Dollard', category: 'fietsen', city: 'Termunterzijl', lat: 53.299, lng: 7.033, description: 'Fiets langs dijk, kwelders en de Dollard.' },
    { name: 'Rondje Groningen-stad', category: 'fietsen', city: 'Groningen', lat: 53.207, lng: 6.579, description: 'Ontdek stadsgroen en water op de fiets.' },
    { name: 'Wandelroute door Oranjewoud', category: 'wandelen', city: 'Oranjewoud', lat: 52.949, lng: 5.949, description: 'Wandel door bossen, lanen en historische tuinen van het landgoed Oranjewoud.' },
    { name: 'Rottige Meente', category: 'wandelen', city: 'Munnikeburen', lat: 52.868, lng: 5.890, description: 'Volg wandelpaden door laagveen, rietland en moeras in Zuidoost-Friesland.' },
    { name: 'Wandelroute De Alde Feanen', category: 'wandelen', city: 'Earnewâld', lat: 53.117, lng: 5.900, description: 'Verken wandelpaden langs petgaten, rietvelden en vogelrijke oevers in het Nationaal Park.' },
    { name: 'Boswachterspad Balloërveld', category: 'wandelen', city: 'Balloo', lat: 52.988, lng: 6.655, description: 'Wandel over heide en zandpaden bij een van de grootste archeologische landschappen van Drenthe.' },
    { name: 'Bargerveen', category: 'wandelen', city: 'Weiteveen', lat: 52.690, lng: 7.020, description: 'Ontdek het uitgestrekte hoogveenreservaat via wandelroutes en vlonderpaden.' },
    { name: 'Mantingerveld', category: 'wandelen', city: 'Mantinge', lat: 52.793, lng: 6.603, description: 'Wandel door heide, bos en stuifzand in een afwisselend natuurgebied.' },
    { name: 'Sleenerzand', category: 'wandelen', city: 'Sleen', lat: 52.790, lng: 6.791, description: 'Verken bos en heide en ontdek onderweg hunebedden en sporen uit de prehistorie.' },
    { name: 'Wandelroute Holtingerveld', category: 'wandelen', city: 'Havelte', lat: 52.775, lng: 6.270, description: 'Wandel langs heide, hunebedden en sporen uit de Tweede Wereldoorlog.' },
    { name: 'Westerwolde en Smeerling', category: 'wandelen', city: 'Smeerling', lat: 53.009, lng: 7.082, description: 'Wandel door het coulisselandschap van Westerwolde en het historische esdorp Smeerling.' },
    { name: 'Middag-Humsterland', category: 'wandelen', city: 'Ezinge', lat: 53.304, lng: 6.443, description: 'Ontdek wierdedorpen, kronkelende dijken en het open Groningse terpenlandschap.' },
    { name: 'Pieterburen en de Waddenkust', category: 'wandelen', city: 'Pieterburen', lat: 53.401, lng: 6.458, description: 'Wandel door het kustlandschap en langs dijken en kwelders bij Pieterburen.' },
    { name: 'Bourtange en de vestingwallen', category: 'wandelen', city: 'Bourtange', lat: 53.008, lng: 7.192, description: 'Maak een rondje over de historische vestingwallen en langs het landschap van Westerwolde.' },
    { name: 'Wandelroute Schiermonnikoog', category: 'wandelen', city: 'Schiermonnikoog', lat: 53.480, lng: 6.160, description: 'Ontdek duinen, strand en kwelders op het autoluwe Waddeneiland.' },
    { name: 'Wandelroute Terschelling', category: 'wandelen', city: 'West-Terschelling', lat: 53.362, lng: 5.215, description: 'Wandel door duinen en bos en geniet van de natuur en het uitzicht over de Waddenzee.' },
    { name: 'Wandelroute Ameland', category: 'wandelen', city: 'Nes, Ameland', lat: 53.445, lng: 5.770, description: 'Volg paden door duinen en dorpjes op Ameland en ontdek het eiland te voet.' },
    { name: 'Wandelroute De Onlanden', category: 'wandelen', city: 'Peize', lat: 53.154, lng: 6.505, description: 'Wandel door moeras en grasland en speur naar vogels in dit waterrijke natuurgebied.' },
    { name: 'Wandelroute De Weerribben', category: 'wandelen', city: 'Kalenberg', lat: 52.790, lng: 5.938, description: 'Verken rietlanden, vaarten en moerasbossen in Nationaal Park Weerribben-Wieden.' },
    { name: 'Rondje fietsen door Westerwolde', category: 'fietsen', city: 'Sellingen', lat: 52.947, lng: 7.150, description: 'Fiets langs beekdalen, bossen en karakteristieke dorpen in het zuidoosten van Groningen.' },
    { name: 'Fietsroute Hunebed Highway', category: 'fietsen', city: 'Borger', lat: 52.923, lng: 6.793, description: 'Volg de Hunebed Highway langs hunebedden, brinkdorpen en het Drentse Hondsruglandschap.' },
    { name: 'Fietsroute langs de Drentse hunebedden', category: 'fietsen', city: 'Borger', lat: 52.925, lng: 6.790, description: 'Combineer een fietstocht door Drenthe met een bezoek aan prehistorische hunebedden.' },
    { name: 'Fietsen rond het Zuidlaardermeer', category: 'fietsen', city: 'Zuidlaren', lat: 53.105, lng: 6.700, description: 'Fiets langs het meer, door groene dorpen en over de grens van Groningen en Drenthe.' },
    { name: 'Fietsroute langs de Drentsche Aa', category: 'fietsen', city: 'Anloo', lat: 53.042, lng: 6.737, description: 'Volg rustige wegen en fietspaden door beekdalen en oude Drentse esdorpen.' },
    { name: 'Fietsroute door het Drents-Friese Wold', category: 'fietsen', city: 'Diever', lat: 52.854, lng: 6.319, description: 'Fiets door bos en heide en maak onderweg een stop in een van de brinkdorpen.' },
    { name: 'Fietsen langs de Friese Elfsteden', category: 'fietsen', city: 'Bolsward', lat: 53.066, lng: 5.531, description: 'Ontdek historische stadjes, vaarten en open landschap op een route door Friesland.' },
    { name: 'Fietsroute langs de Friese IJsselmeerkust', category: 'fietsen', city: 'Makkum', lat: 53.055, lng: 5.402, description: 'Fiets langs de kust, de Afsluitdijk en historische havenplaatsen aan het IJsselmeer.' },
    { name: 'Fietsen door Nationaal Park Dwingelderveld', category: 'fietsen', city: 'Dwingeloo', lat: 52.818, lng: 6.374, description: 'Fiets over rustige paden langs heide, bos en schaapskooien.' },
    { name: 'Fietsroute rond het Tjeukemeer', category: 'fietsen', city: 'Lemmer', lat: 52.871, lng: 5.758, description: 'Maak een rondje langs Friese meren, dorpen en weidse uitzichten.' },
    { name: 'Fietsen langs de Friese Waddenkust', category: 'fietsen', city: 'Harlingen', lat: 53.175, lng: 5.423, description: 'Volg de kust en de zeedijk langs terpdorpen en het UNESCO Werelderfgoed Waddenzee.' },
    { name: 'Fietsroute door het Oldambt', category: 'fietsen', city: 'Winschoten', lat: 53.145, lng: 7.035, description: 'Ontdek herenboerderijen, graanvelden en dorpen in het Groningse Oldambt.' },
    { name: 'Fietsen langs de Groningse wierden', category: 'fietsen', city: 'Winsum', lat: 53.331, lng: 6.520, description: 'Fiets langs wierdedorpen, oude kerken en het open landschap van Noord-Groningen.' },
    { name: 'Fietsroute door het Reitdiepgebied', category: 'fietsen', city: 'Zoutkamp', lat: 53.335, lng: 6.303, description: 'Volg het Reitdiep langs dijken, dorpen en weidse uitzichten richting het Lauwersmeer.' },
    { name: 'Fietsroute rond het Schildmeer', category: 'fietsen', city: 'Steendam', lat: 53.284, lng: 6.900, description: 'Fiets langs het Schildmeer en door het rustige Groningse landschap.' },
    { name: 'Fietsen langs de Hunze', category: 'fietsen', city: 'Annerveenschekanaal', lat: 53.066, lng: 6.795, description: 'Ontdek het veenkoloniale landschap en natuur langs de Hunze op de fiets.' },
    { name: 'Fietsroute door Nationaal Park Lauwersmeer', category: 'fietsen', city: 'Lauwersoog', lat: 53.397, lng: 6.205, description: 'Fiets langs water, rietvelden en vogelgebieden in Nationaal Park Lauwersmeer.' },
    { name: 'Fietsen langs de Koloniën van Weldadigheid', category: 'fietsen', city: 'Frederiksoord', lat: 52.843, lng: 6.166, description: 'Fiets langs historische koloniedorpen en het landelijke landschap van West-Drenthe.' },
    { name: 'Fietsroute door het Friese merengebied', category: 'fietsen', city: 'Joure', lat: 52.965, lng: 5.803, description: 'Fiets langs meren, vaarten en dorpen in het waterrijke hart van Friesland.' },
    { name: 'Hoornseplas', category: 'zwemmen', city: 'Groningen', lat: 53.171, lng: 6.559, description: 'Zwemstrand en recreatie aan het Hoornsemeer. Controleer voor vertrek de actuele zwemwaterkwaliteit en voorzieningen.' },
    { name: 'Kardingeplas', category: 'zwemmen', city: 'Groningen', lat: 53.239, lng: 6.598, description: 'Recreatieplas met strand in Groningen. Controleer voor vertrek de actuele zwemwaterkwaliteit en eventuele seizoenssluiting.' },
    { name: 'Strandheem', category: 'zwemmen', city: 'Opende', lat: 53.166, lng: 6.252, description: 'Recreatieplas met strand in het grensgebied van Groningen en Friesland. Controleer de actuele zwemwaterkwaliteit.' },
    { name: 'Strand Nijstad', category: 'zwemmen', city: 'Hoogeveen', lat: 52.704, lng: 6.494, description: 'Recreatieplas met strand bij Hoogeveen. Controleer de actuele zwemwaterkwaliteit en toegangsinformatie.' },
    { name: 'Baggelhuizerplas', category: 'zwemmen', city: 'Assen', lat: 52.986, lng: 6.505, description: 'Recreatieplas bij Assen met strand en zwemzone. Controleer de actuele zwemwaterkwaliteit.' },
    { name: 'Het Nije Hemelriek', category: 'zwemmen', city: 'Gasselte', lat: 52.966, lng: 6.789, description: 'Bekende zwemplas met zandstrand in het bos bij Gasselte. Bekijk vooraf actuele waterkwaliteit en toegangsregels.' },
    { name: 'De Potten', category: 'zwemmen', city: 'Offingawier', lat: 53.022, lng: 5.733, description: 'Recreatiegebied aan het Sneekermeer met strand en watersport. Controleer de actuele zwemwaterkwaliteit.' },
    { name: 'Lemmerstrand', category: 'zwemmen', city: 'Lemmer', lat: 52.847, lng: 5.696, description: 'Zwemstrand aan het IJsselmeer bij Lemmer. Controleer voor vertrek de actuele zwemwaterkwaliteit.' },
    { name: 'Makkumerstrand', category: 'zwemmen', city: 'Makkum', lat: 53.055, lng: 5.405, description: 'Strand aan het IJsselmeer met recreatiemogelijkheden. Controleer de actuele zwemwaterkwaliteit en strandregels.' },
    { name: 'Strand aan het Lauwersmeer', category: 'zwemmen', city: 'Lauwersoog', lat: 53.405, lng: 6.205, description: 'Recreatiestrand aan het Lauwersmeer. Controleer voor vertrek de actuele zwemwaterkwaliteit en voorzieningen.' },
    { name: 'Strand van Schiermonnikoog', category: 'zwemmen', city: 'Schiermonnikoog', lat: 53.485, lng: 6.170, description: 'Breed Noordzeestrand op Schiermonnikoog. Zwem alleen waar dat veilig is en let op stroming en waarschuwingen.' },
    { name: 'Strand van Ameland', category: 'zwemmen', city: 'Nes, Ameland', lat: 53.448, lng: 5.758, description: 'Noordzeestrand op Ameland. Let op stroming, vlaggen en aanwijzingen van de strandwacht.' },
    { name: 'Badstrand Terschelling', category: 'zwemmen', city: 'West-Terschelling', lat: 53.365, lng: 5.210, description: 'Noordzeestrand bij West-Terschelling. Let op stroming, vlaggen en aanwijzingen van de strandwacht.' },
  ];

  const museumCityCoordinates = {
    'Leeuwarden': [53.201, 5.799],
    'Dokkum': [53.325, 5.996],
    'Sneek': [53.032, 5.661],
    'Formerum, Terschelling': [53.392, 5.286],
    'Gorredijk': [53.005, 6.064],
    'Hollum, Ameland': [53.440, 5.638],
    'Damwâld': [53.291, 5.998],
    'Sloten': [52.895, 5.645],
    'Heerenveen': [52.960, 5.924],
    'Grou': [53.095, 5.837],
    'Oranjewoud': [52.949, 5.949],
    'Franeker': [53.185, 5.541],
    'Workum': [52.980, 5.447],
    'Groningen': [53.219, 6.568],
    'Bellingwolde': [53.111, 7.164],
    'Uithuizen': [53.408, 6.672],
    'Zoutkamp': [53.335, 6.303],
    'Veendam': [53.106, 6.880],
    'Slochteren': [53.220, 6.803],
    'Ezinge': [53.305, 6.442],
    'Warffum': [53.392, 6.559],
    'Nieuw-Buinen': [52.956, 6.953],
    'Assen': [52.993, 6.562],
    'Zuidwolde': [52.673, 6.428],
    'Eelde': [53.135, 6.563],
    'Dalen': [52.699, 6.755],
    'Veenhuizen': [53.033, 6.394],
    'Roden': [53.138, 6.427],
    'Coevorden': [52.661, 6.741],
    'Boschoord': [52.882, 6.206],
    'Dwingeloo': [52.834, 6.370],
  };
  const museumCityVisits = new Map();
  const museumMapSpots = museums.map((museum) => {
    const [lat, lng] = museumCityCoordinates[museum.city];
    const visit = museumCityVisits.get(museum.city) ?? 0;
    museumCityVisits.set(museum.city, visit + 1);
    const offsets = [[0, 0], [0.003, 0.003], [-0.003, 0.003], [0.003, -0.003], [-0.003, -0.003], [0.006, 0], [-0.006, 0], [0, 0.006]];
    const [latOffset, lngOffset] = offsets[visit % offsets.length];
    return {
      name: museum.name,
      category: 'musea',
      city: museum.city,
      lat: lat + latOffset,
      lng: lng + lngOffset,
      description: museum.description,
    };
  });
  const allMapSpots = [...mapSpots, ...museumMapSpots];
  const mapSpotCount = document.getElementById('mapSpotCount');
  if (mapSpotCount) {
    mapSpotCount.textContent = new Intl.NumberFormat(window.NorthI18n?.locale ?? 'nl-NL').format(allMapSpots.length);
  }

  function createAdditionalRanks(names, startRank, startPoints, pointStep, startActivities) {
    const colors = ['mint', 'blue', 'pink', 'coral'];
    return names.map((name, index) => {
      const rank = startRank + index;
      const initials = name.split(/[.\s]+/).filter(Boolean).map((part) => part[0]).join('').slice(0, 2).toUpperCase();
      return {
        rank,
        initials,
        name,
        activities: Math.max(1, startActivities - Math.floor(index / 2)),
        points: startPoints - index * pointStep,
        color: colors[index % colors.length],
      };
    });
  }

  const requestedLeaderboardNames = [
    'MORRIS.DV', 'JENS.M', 'SANDER.B', 'JILDAU.R', 'GERKO.V', 'ALANKE.V', 'ATE.V',
    'SASKIA.M', 'KING.M', 'TESSA.B', 'JARNO', 'DAAN.B', 'GERMA.V', 'MATS.M',
    'ALISTAIR.VB', 'PATRICK.P', 'LARS.B', 'MEHMET.C', 'NIELS.M',
  ];
  const leaderboardFillers = [
    'EMMA V.', 'ROOS H.', 'NIELS K.', 'JULIA D.', 'TIM B.', 'LOTTE K.', 'BRAM M.',
    'SOFIE V.', 'PIETER D.', 'ANNA M.', 'FINN K.', 'EVI B.', 'TIMO W.', 'JADE M.',
    'NOAH K.', 'LIEKE S.', 'DAAN V.', 'MILA B.', 'SEM R.', 'AMIR V.', 'LARS D.',
    'FENNA K.', 'MILAN S.', 'NINA V.', 'JASPER B.', 'LOTTE W.', 'TESS R.', 'MEES H.',
    'YARA M.', 'BRAM V.', 'SARA D.',
  ];

  function createLeaderboard(period, topPoints, namedPointStep, fillerPointStep, topActivities, isAllTime = false) {
    const colors = ['yellow', 'blue', 'coral', 'mint', 'pink'];
    const self = {
      rank: 1,
      initials: 'MB',
      name: 'Jij, Mercedes B.',
      activities: topActivities + 10,
      points: topPoints,
      color: 'yellow',
      self: true,
    };
    const namedPeople = requestedLeaderboardNames.map((name, index) => ({
      rank: index + 2,
      initials: name.split(/[.\s]+/).filter(Boolean).map((part) => part[0]).join('').slice(0, 2),
      name,
      activities: Math.max(2, topActivities - (index + 1) * (isAllTime ? 10 : 2)),
      points: topPoints - namedPointStep * (index + 1),
      color: colors[(index + 1) % colors.length],
    }));
    const fillerStartPoints = namedPeople[namedPeople.length - 1].points - fillerPointStep;
    const fillers = createAdditionalRanks(
      leaderboardFillers,
      namedPeople.length + 2,
      fillerStartPoints,
      fillerPointStep,
      Math.max(2, topActivities - namedPeople.length * (isAllTime ? 10 : 2)),
    )
      .filter((person) => person.rank <= 50)
      .map((person) => ({ ...person, name: person.name.toUpperCase() }));
    const data = {
      podium: [self, ...namedPeople.slice(0, 2)],
      ranks: [...namedPeople.slice(2), ...fillers],
      self,
    };
    return [period, data];
  }

  const leaderboardData = Object.fromEntries([
    createLeaderboard('month', 12000, 200, 100, 60),
    createLeaderboard('all-time', 120000, 2000, 1000, 1200, true),
  ]);

  function formatPoints(points) {
    return new Intl.NumberFormat(window.NorthI18n?.locale ?? 'nl-NL').format(points);
  }

  function renderLeaderboard(period, resetRankPage = false) {
    if (resetRankPage) {
      rankPage = 0;
    }
    const data = leaderboardData[period];
    if (!data || !leaderboardPodium || !leaderboardRanks) {
      return;
    }

    leaderboardPodium.replaceChildren();

    [1, 0, 2].forEach((personIndex) => {
      const person = data.podium[personIndex];
      const rankClass = ['first', 'second', 'third'][personIndex];
      const podiumPerson = document.createElement('div');
      podiumPerson.className = `podium-person ${rankClass}`;

      const medal = document.createElement('span');
      medal.className = 'podium-medal';
      medal.setAttribute('aria-label', `${t('Medaille voor plaats')} ${personIndex + 1}`);
      medal.textContent = String(personIndex + 1);
      const avatar = document.createElement('div');
      avatar.className = `leader-avatar ${person.color}`;
      avatar.textContent = person.initials;
      const name = document.createElement('strong');
      name.textContent = person.self ? t('Jij, Mercedes B.') : person.name;
      const points = document.createElement('small');
      points.textContent = `${formatPoints(person.points)} ${t('pnt')}`;
      podiumPerson.append(medal, avatar, name, points);
      leaderboardPodium.append(podiumPerson);
    });

    const createRankRow = (person) => {
      const row = document.createElement('div');
      row.className = `rank-row${person.self ? ' self' : ''}`;
      const rank = document.createElement('span');
      rank.textContent = String(person.rank);
      const avatar = document.createElement('div');
      avatar.className = `leader-avatar small ${person.color ?? ''}`.trim();
      avatar.textContent = person.initials;
      const name = document.createElement('strong');
      name.textContent = person.self ? t('Jij, Mercedes B.') : person.name;
      const activities = document.createElement('span');
      activities.className = 'rank-activity';
      activities.textContent = `⌁ ${person.activities} ${t('activiteiten')}`;
      const points = document.createElement('b');
      points.append(document.createTextNode(`${formatPoints(person.points)} `));
      const unit = document.createElement('small');
      unit.textContent = t('pnt');
      points.append(unit);
      row.append(rank, avatar, name, activities, points);
      return row;
    };

    leaderboardRanks.replaceChildren();
    const firstVisibleRank = 4 + rankPage * 7;
    const lastVisibleRank = Math.min(firstVisibleRank + 6, 50);
    const rankedPeople = [...data.ranks, data.self]
      .filter((person) => person.rank >= firstVisibleRank && person.rank <= lastVisibleRank)
      .sort((first, second) => first.rank - second.rank);
    rankedPeople.forEach((person) => leaderboardRanks.append(createRankRow(person)));

    const yourScoreSection = document.getElementById('yourScoreSection');
    const leaderboardSelf = document.getElementById('leaderSelf');
    const profileRank = document.querySelector('.profile-mini > div > span');
    const accountRank = document.querySelector('.account-rank');
    const rankLabel = t('Rang #12').replace('12', String(data.self.rank));
    if (profileRank) {
      profileRank.textContent = rankLabel;
    }
    if (accountRank) {
      accountRank.textContent = rankLabel;
    }
    if (leaderboardRanksTitle) {
      leaderboardRanksTitle.textContent = rankPage === 0
        ? t('Top 10')
        : `${t('Posities')} ${firstVisibleRank}–${lastVisibleRank}`;
    }
    if (leaderboardPrevious) {
      leaderboardPrevious.disabled = rankPage === 0;
    }
    if (leaderboardNext) {
      leaderboardNext.disabled = lastVisibleRank >= 50;
    }
    if (yourScoreSection && leaderboardSelf) {
      yourScoreSection.hidden = false;
      leaderboardSelf.replaceChildren();
      leaderboardSelf.append(createRankRow(data.self));
    }
  }

  function initializeNorthMap() {
    if (!mapElement || northMap) {
      return;
    }
    if (!window.L) {
      if (mapStatus) {
        mapStatus.textContent = t('De kaart kan niet worden geladen. Controleer je internetverbinding en probeer opnieuw.');
        mapStatus.hidden = false;
      }
      return;
    }

    const mapBounds = L.latLngBounds(northMapBounds);
    northMap = L.map(mapElement, {
      zoomControl: false,
      maxZoom: 17,
      maxBounds: mapBounds,
      maxBoundsViscosity: 1,
      scrollWheelZoom: true,
    });
    L.control.zoom({ position: 'topright' }).addTo(northMap);

    const categoryIcons = {
      wandelen: { symbol: 'W', className: 'walk' },
      zwemmen: { symbol: 'Z', className: 'swim' },
      fietsen: { symbol: 'F', className: 'cycle' },
      musea: { symbol: 'M', className: 'museum' },
    };

    mapMarkers = allMapSpots.map((spot) => {
      const category = categoryIcons[spot.category];
      const icon = L.divIcon({
        className: `map-pin-icon map-pin-icon--${category.className}`,
        html: `<span aria-hidden="true">${category.symbol}</span>`,
        iconSize: [34, 34],
        iconAnchor: [17, 17],
        popupAnchor: [0, -16],
      });
      const marker = L.marker([spot.lat, spot.lng], {
        icon,
        title: `${spot.name} — ${spot.city}`,
        alt: `${category.symbol}: ${spot.name}`,
        riseOnHover: true,
      });
      const popup = document.createElement('div');
      const title = document.createElement('strong');
      title.textContent = spot.name;
      const details = document.createElement('small');
      details.textContent = `${spot.city} · ${t(spot.category[0].toUpperCase() + spot.category.slice(1))}`;
      const description = document.createElement('div');
      description.textContent = t(spot.description);
      popup.append(title, document.createElement('br'), details, document.createElement('br'), description);
      marker.bindPopup(popup);
      marker.addTo(northMap);
      return { marker, category: spot.category, spot };
    });

    const tiles = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri — Source: Esri, TomTom, Garmin, FAO, NOAA, USGS, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, and the GIS User Community',
      maxZoom: 19,
    }).addTo(northMap);
    tiles.on('tileerror', () => {
      if (mapStatus) {
        mapStatus.textContent = t('Sommige kaarttegels konden niet laden. Controleer je internetverbinding.');
        mapStatus.hidden = false;
      }
    });
    window.setTimeout(fitNorthMapToViewport, 0);
  }

  function fitNorthMapToViewport() {
    if (!northMap) {
      return;
    }
    northMap.invalidateSize({ pan: false });
    const mapBounds = L.latLngBounds(northMapBounds);
    const fitZoom = northMap.getBoundsZoom(mapBounds, false, [16, 16]);
    northMap.setMinZoom(fitZoom);
    if (!northMapPositioned || northMap.getZoom() < fitZoom) {
      northMap.fitBounds(mapBounds, { padding: [16, 16], maxZoom: fitZoom });
      northMapPositioned = true;
    }
  }

  function filterNorthMap(category) {
    if (!northMap) {
      return;
    }
    mapMarkers.forEach(({ marker, category: markerCategory }) => {
      if (category === 'all' || markerCategory === category) {
        marker.addTo(northMap);
      } else {
        northMap.removeLayer(marker);
      }
    });
  }

  function setActiveView(id) {
    views.forEach((view) => {
      view.classList.toggle('active', view.id === id);
    });
    mainContent?.classList.toggle('main-content--ai', id === 'ai');
    window.scrollTo(0, 0);
    if (id === 'kaart') {
      initializeNorthMap();
      window.setTimeout(fitNorthMapToViewport, 0);
    }

    navItems.forEach((item) => {
      const active = item.dataset.tab === id;
      item.classList.toggle('active', active);
    });
  }

  function openMobileMenu() {
    mobileMenu?.classList.add('is-open');
    mobileBackdrop?.classList.add('is-visible');
    menuToggle?.setAttribute('aria-expanded', 'true');
  }

  function closeMobileMenu() {
    mobileMenu?.classList.remove('is-open');
    mobileBackdrop?.classList.remove('is-visible');
    menuToggle?.setAttribute('aria-expanded', 'false');
  }

  function openLogoModal() {
    logoModal?.classList.add('is-open');
    logoModal?.setAttribute('aria-hidden', 'false');
  }

  function closeLogoModal() {
    logoModal?.classList.remove('is-open');
    logoModal?.setAttribute('aria-hidden', 'true');
  }

  function closeMuseumDetail() {
    museumDetailModal?.classList.remove('is-open');
    museumDetailModal?.setAttribute('aria-hidden', 'true');
    museumDetailOpener?.focus();
  }

  function createMuseumPhotoCredit(image) {
    if (!image.dataset.photoCredit) {
      return null;
    }

    const credit = document.createElement('span');
    credit.className = 'museum-photo-credit';
    const author = document.createElement('a');
    author.href = image.dataset.photoSource;
    author.target = '_blank';
    author.rel = 'noopener noreferrer';
    author.textContent = image.dataset.photoCredit;
    const license = document.createElement('a');
    license.href = image.dataset.photoLicenseUrl;
    license.target = '_blank';
    license.rel = 'noopener noreferrer';
    license.textContent = image.dataset.photoLicense;
    credit.append(author, document.createTextNode(' · '), license);
    return credit;
  }

  museumCards.forEach((card) => {
    const image = card.querySelector('.museum-image img');
    const credit = createMuseumPhotoCredit(image);
    if (credit) {
      image.parentElement.append(credit);
    }
  });

  function updateMuseumDetail(card) {
    museumDetailTitle.textContent = card.querySelector('h3').textContent;
    museumDetailLocation.textContent = `${card.dataset.city} · ${t(card.dataset.province)}`;
    museumDetailCost.textContent = t(card.querySelector('.museum-cost').textContent);
    museumDetailDescription.textContent = t(card.dataset.description);
    museumDetailBalance.textContent = accountBalance?.textContent.trim() ?? '1.240';
    museumDetailWebsite.textContent = t('Bezoek de museumwebsite ↗');
    museumDetailRedeem.textContent = t('Punten inruilen');
    const image = card.querySelector('.museum-image img');
    museumDetailImageContent.src = image.src;
    museumDetailImage.querySelector('.museum-photo-credit')?.remove();
    const credit = createMuseumPhotoCredit(image);
    if (credit) {
      museumDetailImage.append(credit);
    }
  }

  museumFilters.forEach((filter) => {
    filter.addEventListener('click', () => {
      const province = filter.dataset.province;

      museumFilters.forEach((option) => {
        const isSelected = option === filter;
        option.classList.toggle('active', isSelected);
        option.setAttribute('aria-pressed', String(isSelected));
      });

      museumCards.forEach((card) => {
        card.hidden = province !== 'all' && card.dataset.province !== province;
      });
    });
  });

  museumGrid?.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    const button = event.target.closest('.museum-button');
    const card = button?.closest('.museum-card');
    if (!card) {
      return;
    }

    museumDetailOpener = button;
    updateMuseumDetail(card);
    museumDetailNotice.hidden = true;
    museumDetailNotice.textContent = '';
    if (card.dataset.website) {
      museumDetailWebsite.href = card.dataset.website;
      museumDetailWebsite.hidden = false;
    } else {
      museumDetailWebsite.removeAttribute('href');
      museumDetailWebsite.hidden = true;
    }
    museumDetailModal.classList.add('is-open');
    museumDetailModal.setAttribute('aria-hidden', 'false');
    museumDetailClose?.focus();
  });

  museumDetailClose?.addEventListener('click', closeMuseumDetail);
  museumDetailRedeem?.addEventListener('click', () => {
    museumDetailNotice.textContent = t('Punten inruilen is in deze demo nog niet actief. Je punten worden niet afgeschreven.');
    museumDetailNotice.hidden = false;
  });
  museumDetailModal?.addEventListener('click', (event) => {
    if (event.target instanceof Element && event.target.closest('[data-close-museum-modal]')) {
      closeMuseumDetail();
    }
  });

  leaderboardTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      leaderboardTabs.forEach((option) => {
        const isSelected = option === tab;
        option.classList.toggle('active', isSelected);
        option.setAttribute('aria-pressed', String(isSelected));
      });
      renderLeaderboard(tab.dataset.period, true);
    });
  });
  const changeLeaderboardPage = (direction) => {
    rankPage = Math.max(0, Math.min(6, rankPage + direction));
    const activePeriod = document.querySelector('.leader-tabs [data-period].active')?.dataset.period;
    if (activePeriod) {
      renderLeaderboard(activePeriod);
    }
  };
  leaderboardPrevious?.addEventListener('click', () => changeLeaderboardPage(-1));
  leaderboardNext?.addEventListener('click', () => changeLeaderboardPage(1));

  mapFilterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      mapFilterButtons.forEach((option) => {
        const isSelected = option === button;
        option.classList.toggle('active', isSelected);
        option.setAttribute('aria-pressed', String(isSelected));
      });
      filterNorthMap(button.dataset.mapFilter);
    });
  });

  document.addEventListener('noord-language-change', () => {
    renderHistoryYear();
    const activePeriod = document.querySelector('.leader-tabs [data-period].active')?.dataset.period;
    if (activePeriod) {
      renderLeaderboard(activePeriod);
    }
    mapMarkers.forEach(({ marker, spot }) => {
      const popup = document.createElement('div');
      const title = document.createElement('strong');
      title.textContent = spot.name;
      const details = document.createElement('small');
      details.textContent = `${spot.city} · ${t(spot.category[0].toUpperCase() + spot.category.slice(1))}`;
      const description = document.createElement('div');
      description.textContent = t(spot.description);
      popup.append(title, document.createElement('br'), details, document.createElement('br'), description);
      marker.setPopupContent(popup);
    });
    if (museumDetailModal?.classList.contains('is-open') && museumDetailOpener) {
      const card = museumDetailOpener.closest('.museum-card');
      if (card) {
        updateMuseumDetail(card);
      }
    }
  });

  historyYearPicker?.addEventListener('change', renderHistoryYear);
  navItems.forEach((item) => {
    item.addEventListener('click', () => {
      const tab = item.dataset.tab;
      if (tab) {
        setActiveView(tab);
      }
      closeMobileMenu();
    });
  });

  homeLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const target = link.dataset.target;
      if (target) {
        setActiveView(target);
      }
      closeMobileMenu();
    });
  });

  logoTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      openLogoModal();
    });

    trigger.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openLogoModal();
      }
    });
  });

  logoClose?.addEventListener('click', closeLogoModal);
  logoModal?.addEventListener('click', (event) => {
    if (event.target.closest('[data-close-logo-modal]') || event.target === logoModal) {
      closeLogoModal();
    }
  });

  menuToggle?.addEventListener('click', () => {
    const isOpen = mobileMenu?.classList.contains('is-open');
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  menuClose?.addEventListener('click', closeMobileMenu);
  mobileBackdrop?.addEventListener('click', closeMobileMenu);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMobileMenu();
      closeLogoModal();
      closeMuseumDetail();
    }
  });

  renderLeaderboard('month');
  renderHistoryYear();
  setActiveView('home');
});
