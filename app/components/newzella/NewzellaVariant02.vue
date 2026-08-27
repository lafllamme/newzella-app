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
  <div ref="root" class="n2">
  <!-- THESIS: Newzella reads like the first warm signal from a working bakery, not a generic restaurant template. OWN-WORLD: espresso, toasted brown, paper cream and brand yellow in a rounded photographic poster system. STORY: see what is baked, understand the craft, find a nearby shop and choose the next visit. FIRST VIEWPORT: full-bleed backstube photograph, oversized condensed claim at lower left, yellow action and four real intent signals directly below. FORM: Backstuben-Poster, grounded direction position 7, seed 296ff61f. FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md -->
    <a class="skip-link" href="#main-content">Zum Inhalt springen</a>
    <header class="site-header">
      <div class="wrap header-inner">
        <a class="brand-lockup" href="#top" aria-label="Newzella Startseite">
          <img :src="'/images/newzella-logo.png'" alt="Newzella Bäckerei Konditorei" width="654" height="218">
        </a>
        <nav class="site-nav" aria-label="Hauptnavigation">
          <a href="#sortiment">Sortiment</a>
          <a href="#handwerk">Handwerk</a>
          <a href="#standorte">Standorte</a>
          <a href="#aktuelles">Aktuelles</a>
          <a class="button button-yellow" href="#standorte">Fachgeschäft finden</a>
        </nav>
      </div>
    </header>
  
    <main id="main-content">
      <section class="hero" id="top" role="img" aria-label="Frische Backwaren in der Newzella Backstube">
        <div class="hero-content">
          <span class="eyebrow">Bäckerei · Konditorei · Seit 1896</span>
          <h1>Frisch auf den <span>Tisch.</span></h1>
          <p class="hero-copy">Täglich frisch gebacken, natürlich von Hand. Entdecke Brote, Brötchen, feines Gebäck und Torten aus der Newzella Backstube.</p>
          <div class="hero-meta">
            <a class="button button-yellow" href="#sortiment">Unser Sortiment <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h11M10 4l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
            <span class="hero-note">Köln · Leverkusen · Pulheim</span>
          </div>
        </div>
      </section>
  
      <section class="signal-bar" aria-label="Newzella auf einen Blick">
        <div class="wrap signal-inner">
          <div class="signal-cell"><strong>Handwerk</strong><span>Natürlich von Hand</span></div>
          <div class="signal-cell"><strong>4. Generation</strong><span>Familienbetrieb</span></div>
          <div class="signal-cell"><strong>4 Welten</strong><span>Brote bis Feingebäck</span></div>
          <div class="signal-cell"><strong>3 Regionen</strong><span>Dein Fachgeschäft</span></div>
        </div>
      </section>
  
      <section class="dark-section" id="sortiment">
        <div class="wrap">
          <div class="section-head">
            <div><span class="eyebrow">Aus der Auslage</span><h2 class="section-title">Vier Wege zum Lieblingsstück.</h2></div>
            <p class="section-intro">Von knusprig bis sahnig: Newzella ist wie gebacken für Spezialitäten. Wähle eine Produktwelt und lerne unsere Klassiker kennen.</p>
          </div>
          <div class="product-track">
            <a class="poster-product reveal" href="#handwerk"><img :src="'/images/brote.jpeg'" alt="Auswahl verschiedener Brote auf einem Holztisch" width="2048" height="1152" loading="lazy"><div class="poster-product-copy"><h3>Brote</h3><p>Ausgesuchte Laibe für jeden Tag.</p></div></a>
            <a class="poster-product reveal" href="#handwerk"><img :src="'/images/broetchen.jpeg'" alt="Verschiedene Brötchen auf einem Holzbrett" width="2048" height="1152" loading="lazy"><div class="poster-product-copy"><h3>Brötchen</h3><p>Knusprige Vielfalt zum Frühstück.</p></div></a>
            <a class="poster-product reveal" href="#anlass"><img :src="'/images/torten.jpeg'" alt="Kuchenstück mit Puderzucker und Orangen" width="2048" height="1081" loading="lazy"><div class="poster-product-copy"><h3>Torten</h3><p>Für Feiern und besondere Momente.</p></div></a>
            <a class="poster-product reveal" href="#aktuelles"><img :src="'/images/apfelberliner.jpeg'" alt="Goldbraune Apfelberliner mit Äpfeln" width="2048" height="1152" loading="lazy"><div class="poster-product-copy"><h3>Feingebäck</h3><p>Ein bisschen Glück aus der Konditorei.</p></div></a>
          </div>
        </div>
      </section>
  
      <section class="craft-section" id="handwerk">
        <div class="wrap craft-grid">
          <figure class="craft-image reveal"><img :src="'/images/brotbild.jpeg'" alt="Brot und Backwaren aus der Newzella Backstube" width="2048" height="1152" loading="lazy"></figure>
          <div class="craft-copy reveal">
            <span class="eyebrow">Vier Generationen Handwerk</span>
            <h2>So beliebt wie kaum ein anderes Lebensmittel: das Brot.</h2>
            <p>Wir backen es täglich und das macht uns sehr stolz. Schon in der vierten Generation fertigt die Familie Newzella diese gesunde Köstlichkeit und vieles mehr – aus der zentralen Backstube in Köln-Heimersdorf.</p>
            <p class="craft-quote">Wasser, Mehl, Salz, Hefe und viel Liebe zum Handwerk.</p>
            <a class="button button-yellow" href="#werte">Mehr über Newzella <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h11M10 4l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
          </div>
        </div>
      </section>
  
      <section class="place-section" id="standorte">
        <div class="wrap">
          <div class="section-head">
            <div><span class="eyebrow">Köln · Leverkusen · Pulheim</span><h2 class="section-title">Dein Fachgeschäft.</h2></div>
            <p class="section-intro">Frische auf dem Weg durch den Tag. Finde deinen nächsten Newzella-Standort mit Öffnungszeiten und Kontaktdaten.</p>
          </div>
          <div class="place-layout">
            <div class="place-map" role="img" aria-label="Abstrakte Karte der Regionen Köln, Leverkusen und Pulheim">
              <span class="map-label">Nah dran.<br>Frisch da.</span><i class="map-pin one"></i><i class="map-pin two"></i><i class="map-pin three"></i><i class="road"></i><i class="road two"></i>
            </div>
            <div class="location-list">
              <h3>Standorte</h3>
              <div class="location-row"><div><strong>Köln-Heimersdorf</strong><small>Backstube &amp; Fachgeschäft</small></div><a href="#kontakt">Öffnen</a></div>
              <div class="location-row"><div><strong>Köln-Seeberg</strong><small>Fachgeschäft</small></div><a href="#kontakt">Öffnen</a></div>
              <div class="location-row"><div><strong>Köln-Weidenpesch</strong><small>Fachgeschäft</small></div><a href="#kontakt">Öffnen</a></div>
              <div class="location-row"><div><strong>Leverkusen-Alkenrath</strong><small>Café Newzella</small></div><a href="#kontakt">Öffnen</a></div>
              <div class="location-row"><div><strong>Leverkusen-Wiesdorf</strong><small>Fachgeschäft</small></div><a href="#kontakt">Öffnen</a></div>
              <div class="location-row"><div><strong>Pulheim Marktplatz</strong><small>Café am Marktplatz</small></div><a href="#kontakt">Öffnen</a></div>
            </div>
          </div>
        </div>
      </section>
  
      <section class="rhythm-section" id="werte">
        <div class="wrap rhythm-grid">
          <div class="rhythm-copy"><span class="eyebrow">Der Tag in der Backstube</span><h2>Frische<br>kennt<br>keine Pause.</h2><p>Jede Produktwelt hat ihren eigenen Moment. In der Auslage wird aus dem Morgen ein guter Tag.</p></div>
          <div class="rhythm-list" aria-label="Bäckerei-Tagesrhythmus">
            <div class="rhythm-row"><span>Morgens</span><strong>Brötchen &amp; Brot</strong><em>knusprig aus der Backstube</em></div>
            <div class="rhythm-row"><span>Tagsüber</span><strong>Snacks &amp; Feines</strong><em>für die kleine Pause</em></div>
            <div class="rhythm-row"><span>Nachmittags</span><strong>Kuchen &amp; Torten</strong><em>für Kaffee und Besuch</em></div>
            <div class="rhythm-row"><span>Besonders</span><strong>Dein Anlass</strong><em>gemeinsam geplant</em></div>
          </div>
        </div>
      </section>
  
      <section class="news-section" id="aktuelles">
        <div class="wrap">
          <div class="section-head"><div><span class="eyebrow">Newzella’s Neuigkeiten</span><h2 class="section-title">Frisch aus der Redaktion.</h2></div><p class="section-intro">Aktuelle Hinweise, saisonale Angebote und Geschichten aus dem Unternehmen.</p></div>
          <div class="news-grid">
            <article class="news-card reveal"><div><span class="eyebrow">Aktuell</span><h3>Was gerade aus der Backstube kommt.</h3><p>Öffnungszeiten, Feiertage und saisonale Lieblinge auf einen Blick.</p></div><a class="text-link" href="#kontakt">Alle Neuigkeiten</a></article>
            <article class="news-card reveal"><div><span class="eyebrow">Karriere</span><h3>Gemeinsam backen.</h3><p>Handwerkstradition, familiäres Miteinander und neue Perspektiven.</p></div><a class="text-link" href="#kontakt">Stellenangebote</a></article>
            <article class="news-card reveal"><div><span class="eyebrow">Engagement</span><h3>Mehr als eine Tüte.</h3><p>Newzella übernimmt Verantwortung und bleibt nah an den Menschen.</p></div><a class="text-link" href="#kontakt">Unser Engagement</a></article>
          </div>
        </div>
      </section>
  
      <section class="work-section" id="anlass">
        <div class="wrap work-panel">
          <article class="work-card reveal"><span class="eyebrow">Für besondere Momente</span><h2>Torten, die bleiben.</h2><p>Ob Geburtstag, Familienfest oder einfach ein schöner Anlass: Entdecke unsere Konditorei und sprich mit uns über dein Lieblingsstück.</p><a class="button button-dark" href="mailto:mail@baeckerei-newzella.de">Anfrage senden <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h11M10 4l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></a></article>
          <article class="work-card reveal" id="kontakt"><span class="eyebrow">Arbeiten mit Wirkung</span><h2>Dein Platz in der Backstube.</h2><p>Bei Newzella treffen Tradition, Ausbildung, Vielfalt und echtes Miteinander aufeinander.</p><a class="button button-light" href="mailto:mail@baeckerei-newzella.de">Kontakt aufnehmen <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h11M10 4l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></a></article>
        </div>
      </section>
    </main>
  
    <footer class="footer">
      <div class="wrap footer-top">
        <div><h2>Bäckerei.<br>Konditorei.<br>Seit 1896.</h2></div>
        <div><h3>Kontakt</h3><p><a href="mailto:mail@baeckerei-newzella.de">mail@baeckerei-newzella.de</a><br><a href="https://www.baeckerei-newzella.de/">baeckerei-newzella.de</a></p></div>
        <div><h3>Entdecken</h3><p><a href="#sortiment">Backwaren</a><br><a href="#standorte">Fachgeschäfte</a><br><a href="#handwerk">Über uns</a></p></div>
        <div><h3>Hinweise</h3><p><a href="#aktuelles">Aktuelles</a><br><a href="#kontakt">Karriere</a><br><a href="#kontakt">Engagement</a></p></div>
      </div>
      <div class="wrap footer-bottom"><span>Newzella · Köln, Leverkusen &amp; Pulheim</span><span>Mit Liebe zum Handwerk</span></div>
    </footer>
  </div>
</template>
