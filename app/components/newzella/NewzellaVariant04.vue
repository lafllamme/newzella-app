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
  <div ref="root" class="n4">
  <!-- THESIS: Newzella is a living bakery poster where product, place and daily rhythm share one field, not a quiet row of interchangeable cards. OWN-WORLD: espresso field, cream type, brand yellow and burgundy with organic photo cutouts, pill navigation and poster-scale typography. STORY: discover the four product worlds, feel the handwork behind them, locate a Fachgeschäft and continue into current stories or a special request. FIRST VIEWPORT: a centered cream pill nav sits above a huge cream-and-yellow claim over a dark bakery image, followed by a real-time-feeling product ticker. FORM: Loafly-poster grammar, grounded direction position 7, seed 296ff61f. FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md -->
    <a class="skip-link" href="#main-content">Zum Inhalt springen</a>
    <header class="site-header">
      <div class="wrap header-inner">
        <a class="brand-lockup" href="#top" aria-label="Newzella Startseite"><img :src="'/images/newzella-logo.png'" alt="Newzella Bäckerei Konditorei" width="654" height="218"></a>
        <nav class="nav-pill" aria-label="Hauptnavigation">
          <a href="#sortiment" aria-current="page">Sortiment</a><a href="#handwerk">Handwerk</a><a href="#standorte">Orte</a><a href="#aktuelles">Journal</a>
        </nav>
        <a class="header-action" href="#kontakt">Kontakt</a>
      </div>
    </header>
  
    <main id="main-content">
      <section class="poster-hero" id="top">
        <div class="hero-center">
          <span class="hero-kicker">Bäckerei · Konditorei · Köln</span>
          <h1>Wo Geschmack <span>beginnt.</span></h1>
          <p>Vom ersten Brötchen am Morgen bis zum besonderen Tortenmoment: täglich frisch gebacken, natürlich von Hand.</p>
          <a class="button button-yellow" href="#sortiment">Entdecke die Produktwelten <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h11M10 4l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
        </div>
        <figure class="hero-image"><img :src="'/images/hero-back.jpeg'" alt="Frische Brote und Gebäck in einer Bäckerei-Auslage" width="2048" height="1152"></figure>
        <span class="orbit-word one">Seit 1896</span><span class="orbit-word two">Natürlich von Hand</span>
      </section>
  
      <div class="ticker" aria-label="Newzella Sortiment">
        <div class="ticker-track"><span>Brote</span><span>Brötchen</span><span>Torten</span><span>Feingebäck</span><span>Newzella</span><span>Brote</span><span>Brötchen</span><span>Torten</span><span>Feingebäck</span><span>Newzella</span></div>
      </div>
  
      <section class="catalog" id="sortiment">
        <div class="wrap">
          <div class="catalog-head"><div><span class="eyebrow">Was heute Freude macht</span><h2 class="catalog-title">Gebäck mit Charakter.</h2></div><p class="catalog-intro">Von knusprig bis sahnig: Newzella ist wie gebacken für Spezialitäten. Wähle eine Produktwelt und lerne unsere Klassiker kennen.</p></div>
          <div class="loaf-grid">
            <a class="loaf-card reveal" href="#handwerk"><img :src="'/images/brote.jpeg'" alt="Auswahl verschiedener Brote auf einem Holztisch" width="2048" height="1152" loading="lazy"><div class="loaf-card-copy"><h3>Brote</h3><p>Ausgesuchte Laibe für jeden Tag.</p></div></a>
            <a class="loaf-card reveal" href="#handwerk"><img :src="'/images/broetchen.jpeg'" alt="Verschiedene Brötchen auf einem Holzbrett" width="2048" height="1152" loading="lazy"><div class="loaf-card-copy"><h3>Brötchen</h3><p>Knusprige Vielfalt zum Frühstück.</p></div></a>
            <a class="loaf-card reveal" href="#anlass"><img :src="'/images/torten.jpeg'" alt="Feines Gebäck mit Puderzucker und Orangen" width="2048" height="1081" loading="lazy"><div class="loaf-card-copy"><h3>Torten</h3><p>Für Feiern und besondere Momente.</p></div></a>
            <a class="loaf-card reveal" href="#aktuelles"><img :src="'/images/apfelberliner.jpeg'" alt="Goldbraune Apfelberliner mit Äpfeln" width="2048" height="1152" loading="lazy"><div class="loaf-card-copy"><h3>Feingebäck</h3><p>Ein bisschen Glück aus der Konditorei.</p></div></a>
          </div>
        </div>
      </section>
  
      <section class="manifesto" id="handwerk">
        <div class="wrap manifesto-grid">
          <div class="reveal"><span class="eyebrow">Die Backstube im Hintergrund</span><h2>Mehl. Zeit. <span>Seele.</span></h2><p>Wir backen Brot täglich und das macht uns sehr stolz. Schon in der vierten Generation fertigt die Familie Newzella diese gesunde Köstlichkeit und vieles mehr – aus der zentralen Backstube in Köln-Heimersdorf.</p><a class="button button-yellow" href="#standorte">Newzella kennenlernen <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h11M10 4l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></a></div>
          <figure class="manifesto-media reveal"><img :src="'/images/brotbild.jpeg'" alt="Brot und Backwaren aus der Newzella Backstube" width="2048" height="1152" loading="lazy"><figcaption class="manifesto-stamp">Natürlich<br>von Hand<br>seit 1896</figcaption></figure>
        </div>
      </section>
  
      <section class="visit" id="standorte">
        <div class="wrap">
          <div class="visit-head"><div><span class="eyebrow">Köln · Leverkusen · Pulheim</span><h2 class="visit-title">Komm vorbei.</h2></div><p class="visit-intro">Frische auf dem Weg durch den Tag. Finde deinen nächsten Newzella-Standort und mach den guten Umweg zur Backstube.</p></div>
          <div class="visit-grid">
            <div class="visit-list">
              <div class="visit-item"><div><strong>Köln-Heimersdorf</strong><span>Backstube &amp; Fachgeschäft</span></div><a href="#kontakt">Entdecken</a></div>
              <div class="visit-item"><div><strong>Köln-Seeberg</strong><span>Fachgeschäft</span></div><a href="#kontakt">Entdecken</a></div>
              <div class="visit-item"><div><strong>Köln-Weidenpesch</strong><span>Fachgeschäft</span></div><a href="#kontakt">Entdecken</a></div>
              <div class="visit-item"><div><strong>Leverkusen-Alkenrath</strong><span>Café Newzella</span></div><a href="#kontakt">Entdecken</a></div>
              <div class="visit-item"><div><strong>Leverkusen-Wiesdorf</strong><span>Fachgeschäft</span></div><a href="#kontakt">Entdecken</a></div>
              <div class="visit-item"><div><strong>Pulheim Marktplatz</strong><span>Café am Marktplatz</span></div><a href="#kontakt">Entdecken</a></div>
            </div>
            <aside class="visit-card"><h3>Ein guter Tag beginnt in der Auslage.</h3><p>Geh kurz rein, nimm dir Zeit und finde dein Stück Newzella.</p><a class="button button-light" href="#kontakt">Fachgeschäft finden <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h11M10 4l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></a></aside>
          </div>
        </div>
      </section>
  
      <section class="journal" id="aktuelles">
        <div class="wrap">
          <div class="journal-head"><div><span class="eyebrow">Newzella’s Neuigkeiten</span><h2 class="journal-title">Aus der Backstube.</h2></div><a class="button button-outline" href="#kontakt">Alle Themen</a></div>
          <div class="journal-grid">
            <article class="journal-card reveal"><div><span class="eyebrow">Aktuell</span><h3>Was gerade frisch ist.</h3><p>Öffnungszeiten, Feiertage und saisonale Lieblinge auf einen Blick.</p></div><a href="#kontakt">Aktuelles lesen</a></article>
            <article class="journal-card reveal"><div><span class="eyebrow">Karriere</span><h3>Gemeinsam backen.</h3><p>Handwerkstradition, familiäres Miteinander und neue Perspektiven.</p></div><a href="#kontakt">Stellenangebote</a></article>
            <article class="journal-card reveal"><div><span class="eyebrow">Engagement</span><h3>Mehr als eine Tüte.</h3><p>Newzella übernimmt Verantwortung und bleibt nah an den Menschen.</p></div><a href="#kontakt">Unser Engagement</a></article>
          </div>
        </div>
      </section>
  
      <section class="manifesto" id="anlass">
        <div class="wrap manifesto-grid">
          <div class="reveal"><span class="eyebrow">Für besondere Momente</span><h2>Torten für <span>deinen</span> Anlass.</h2><p>Ob Geburtstag, Familienfest oder einfach ein schöner Anlass: Entdecke unsere Konditorei und sprich mit uns über dein Lieblingsstück.</p><a class="button button-yellow" href="mailto:mail@baeckerei-newzella.de">Torte anfragen <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h11M10 4l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></a></div>
          <figure class="manifesto-media reveal"><img :src="'/images/torten.jpeg'" alt="Feines Gebäck mit Puderzucker und Orangen" width="2048" height="1081" loading="lazy"><figcaption class="manifesto-stamp">Für<br>besondere<br>Momente</figcaption></figure>
        </div>
      </section>
  
      <footer class="footer" id="kontakt">
        <div class="wrap footer-top"><div><h2>Mit Liebe<br>zum<br>Handwerk.</h2></div><div><h3>Kontakt</h3><p><a href="mailto:mail@baeckerei-newzella.de">mail@baeckerei-newzella.de</a><br><a href="https://www.baeckerei-newzella.de/">baeckerei-newzella.de</a></p></div><div><h3>Entdecken</h3><p><a href="#sortiment">Backwaren</a><br><a href="#standorte">Fachgeschäfte</a><br><a href="#handwerk">Über uns</a></p></div><div><h3>Mitmachen</h3><p><a href="#aktuelles">Aktuelles</a><br><a href="#kontakt">Karriere</a><br><a href="#kontakt">Engagement</a></p></div></div>
        <div class="wrap footer-bottom"><span>Newzella · Köln, Leverkusen &amp; Pulheim</span><span>Bäckerei · Konditorei · Seit 1896</span></div>
      </footer>
    </main>
  </div>
</template>
