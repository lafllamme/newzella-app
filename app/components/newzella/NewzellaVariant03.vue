<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const root = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | undefined

onMounted(() => {
  const elements = [...(root.value?.querySelectorAll<HTMLElement>('.reveal') ?? [])]

  if (elements.length === 0) return

  if (!('IntersectionObserver' in window)) {
    elements.forEach((element) => element.classList.add('in', 'is-visible'))
    return
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in', 'is-visible')
          observer?.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.14 },
  )

  elements.forEach((element) => observer?.observe(element))
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <div ref="root" class="n3">
  <!-- THESIS: Newzella becomes a warm local editorial about the things people bring home and bring together, not a sparse product landing page. OWN-WORLD: cream paper, deep toasted brown, burgundy and brand yellow in rounded rooms with deliberate split compositions. STORY: choose a product world, understand the family craft, plan a nearby visit and reach out for a special occasion. FIRST VIEWPORT: rounded cream navigation over a two-room hero with bread photography on the left and a burgundy welcome panel with the primary action on the right. FORM: Raum & Anlass, grounded direction position 7, seed 296ff61f. FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md -->
    <a class="skip-link" href="#main-content">Zum Inhalt springen</a>
    <header class="site-header">
      <div class="wrap header-inner">
        <a class="brand-lockup" href="#top" aria-label="Newzella Startseite">
          <img :src="'/images/newzella-logo.png'" alt="Newzella Bäckerei Konditorei" width="654" height="218">
        </a>
        <nav class="site-nav" aria-label="Hauptnavigation">
          <a href="#sortiment">Sortiment</a>
          <a href="#geschichte">Über uns</a>
          <a href="#standorte">Fachgeschäfte</a>
          <a class="button button-yellow" href="#anlass">Torten anfragen</a>
        </nav>
      </div>
    </header>
  
    <main id="main-content">
      <section class="hero" id="top">
        <div class="wrap hero-grid">
          <figure class="hero-media reveal"><img :src="'/images/hero-back.jpeg'" alt="Frische Backwaren in einer warm beleuchteten Bäckerei" width="2048" height="1152"></figure>
          <div class="hero-panel reveal">
            <div class="hero-mark"><span>Bäckerei · Konditorei</span><span aria-hidden="true"></span></div>
            <div><h1>Gebäck mit <em>Charakter.</em></h1><p>Täglich frisch gebacken, natürlich von Hand. Newzella begleitet deinen Tag – vom ersten Brötchen bis zum besonderen Tortenmoment.</p><div class="hero-action"><a class="button button-yellow" href="#sortiment">Sortiment entdecken <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h11M10 4l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></a><a class="button button-outline" href="#standorte">Shop finden</a></div></div>
            <div class="hero-foot"><span>Köln · Leverkusen · Pulheim</span><span>Seit 1896</span></div>
          </div>
        </div>
      </section>
  
      <section class="catalog" id="sortiment">
        <div class="wrap">
          <div class="catalog-head"><div><span class="eyebrow">Unsere Produktwelten</span><h2 class="section-title">Was darf es heute sein?</h2></div><p class="section-intro">Von knusprig bis sahnig: Newzella ist wie gebacken für Spezialitäten. Wähle eine Produktwelt und lerne unsere Klassiker kennen.</p></div>
          <div class="catalog-grid">
            <article class="catalog-card reveal"><img :src="'/images/brote.jpeg'" alt="Auswahl verschiedener Brote" width="2048" height="1152" loading="lazy"><div class="catalog-copy"><h3>Brote</h3><p>Ausgesuchte Laibe für jeden Tag.</p><a href="#geschichte">Mehr erfahren</a></div></article>
            <article class="catalog-card reveal"><img :src="'/images/broetchen.jpeg'" alt="Auswahl verschiedener Brötchen" width="2048" height="1152" loading="lazy"><div class="catalog-copy"><h3>Brötchen</h3><p>Knusprige Vielfalt zum Frühstück.</p><a href="#geschichte">Mehr erfahren</a></div></article>
            <article class="catalog-card reveal"><img :src="'/images/torten.jpeg'" alt="Kuchenstück mit Puderzucker und Orangen" width="2048" height="1081" loading="lazy"><div class="catalog-copy"><h3>Torten</h3><p>Für Feiern und besondere Momente.</p><a href="#anlass">Anlass planen</a></div></article>
            <article class="catalog-card reveal"><img :src="'/images/apfelberliner.jpeg'" alt="Apfelberliner mit goldbrauner Kruste" width="2048" height="1152" loading="lazy"><div class="catalog-copy"><h3>Feingebäck</h3><p>Ein bisschen Glück aus der Konditorei.</p><a href="#aktuelles">Aktuelles ansehen</a></div></article>
          </div>
        </div>
      </section>
  
      <section class="story" id="geschichte">
        <div class="wrap story-grid">
          <div class="story-note reveal"><strong>Familienbetrieb in vierter Generation</strong><p>Aus der zentralen Backstube in Köln-Heimersdorf.</p></div>
          <div class="story-copy reveal"><span class="eyebrow">Vom Laib mit Seele</span><h2>So beliebt wie kaum ein anderes Lebensmittel: das Brot.</h2><p>Wir backen es täglich und das macht uns sehr stolz. Schon in der vierten Generation fertigt die Familie Newzella diese gesunde Köstlichkeit und vieles mehr.</p><p class="quote">„Natürlich von Hand. Mehrfach prämiert.“</p><a class="button button-dark" href="#standorte">Newzella kennenlernen <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h11M10 4l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></a><figure class="story-image"><img :src="'/images/brotbild.jpeg'" alt="Brot und Backwaren aus der Newzella Backstube" width="2048" height="1152" loading="lazy"></figure></div>
        </div>
      </section>
  
      <section class="atlas" id="standorte">
        <div class="wrap">
          <div class="atlas-head"><div><span class="eyebrow">Dein Weg zu Newzella</span><h2 class="section-title">Drei Regionen.<br>Ein Handwerk.</h2></div><p class="section-intro">Frische auf dem Weg durch den Tag. Finde deinen nächsten Newzella-Standort mit Öffnungszeiten und Kontaktdaten.</p></div>
          <div class="atlas-layout">
            <div class="atlas-list">
              <div class="atlas-item"><span class="atlas-index">K</span><div><strong>Köln-Heimersdorf</strong><small>Backstube &amp; Fachgeschäft</small></div><a href="#kontakt">Details</a></div>
              <div class="atlas-item"><span class="atlas-index">K</span><div><strong>Köln-Seeberg</strong><small>Fachgeschäft</small></div><a href="#kontakt">Details</a></div>
              <div class="atlas-item"><span class="atlas-index">K</span><div><strong>Köln-Weidenpesch</strong><small>Fachgeschäft</small></div><a href="#kontakt">Details</a></div>
              <div class="atlas-item"><span class="atlas-index">L</span><div><strong>Leverkusen-Alkenrath</strong><small>Café Newzella</small></div><a href="#kontakt">Details</a></div>
              <div class="atlas-item"><span class="atlas-index">L</span><div><strong>Leverkusen-Wiesdorf</strong><small>Fachgeschäft</small></div><a href="#kontakt">Details</a></div>
              <div class="atlas-item"><span class="atlas-index">P</span><div><strong>Pulheim Marktplatz</strong><small>Café am Marktplatz</small></div><a href="#kontakt">Details</a></div>
            </div>
            <div class="atlas-card"><h3>Dein Fachgeschäft um die Ecke.</h3><p>Einsteigen, auswählen, mitnehmen. In unseren Fachgeschäften treffen Nähe und täglich frische Backwaren zusammen.</p></div>
          </div>
        </div>
      </section>
  
      <section class="occasion" id="anlass">
        <div class="wrap occasion-grid">
          <div class="reveal"><span class="eyebrow">Für besondere Momente</span><h2>Eine Torte sagt mehr als tausend Worte.</h2><p>Ob Geburtstag, Familienfest oder einfach ein schöner Anlass: Entdecke unsere Konditorei und sprich mit uns über dein Lieblingsstück.</p><a class="button button-dark" href="mailto:mail@baeckerei-newzella.de">Torte anfragen <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h11M10 4l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></a></div>
          <div class="occasion-stack reveal"><figure class="occasion-image"><img :src="'/images/torten.jpeg'" alt="Feines Gebäck mit Puderzucker und Orangen" width="2048" height="1081" loading="lazy"></figure><div class="occasion-tag"><strong>Mit Liebe gemacht.</strong><span>Für deinen Moment aus der Newzella Konditorei.</span></div></div>
        </div>
      </section>
  
      <section class="news" id="aktuelles">
        <div class="wrap">
          <div class="news-head"><div><span class="eyebrow">Newzella’s Neuigkeiten</span><h2 class="section-title">Frisch aus der Redaktion.</h2></div><a class="button button-outline" href="#kontakt">Alle Themen</a></div>
          <div class="news-grid">
            <article class="news-card reveal"><span class="eyebrow">Aktuell</span><h3>Was gerade aus der Backstube kommt.</h3><p>Öffnungszeiten, Feiertage und saisonale Lieblinge auf einen Blick.</p><a href="#kontakt">Aktuelles lesen</a></article>
            <article class="news-card reveal"><span class="eyebrow">Karriere</span><h3>Gemeinsam backen.</h3><p>Handwerkstradition, familiäres Miteinander und neue Perspektiven.</p><a href="#kontakt">Stellenangebote</a></article>
            <article class="news-card reveal"><span class="eyebrow">Engagement</span><h3>Mehr als eine Tüte.</h3><p>Newzella übernimmt Verantwortung und bleibt nah an den Menschen.</p><a href="#kontakt">Unser Engagement</a></article>
          </div>
        </div>
      </section>
  
      <section class="footer" id="kontakt">
        <div class="wrap footer-main">
          <div><h2>Bis morgen<br>in der<br>Backstube.</h2></div>
          <div><h3>Kontakt</h3><p><a href="mailto:mail@baeckerei-newzella.de">mail@baeckerei-newzella.de</a><br><a href="https://www.baeckerei-newzella.de/">baeckerei-newzella.de</a></p></div>
          <div><h3>Entdecken</h3><p><a href="#sortiment">Backwaren</a><br><a href="#standorte">Fachgeschäfte</a><br><a href="#geschichte">Über uns</a></p></div>
          <div><h3>Mitmachen</h3><p><a href="#aktuelles">Aktuelles</a><br><a href="#kontakt">Karriere</a><br><a href="#kontakt">Engagement</a></p></div>
        </div>
        <div class="wrap footer-bottom"><span>Newzella · Köln, Leverkusen &amp; Pulheim</span><span>Mit Liebe zum Handwerk · Seit 1896</span></div>
      </section>
    </main>
  </div>
</template>
