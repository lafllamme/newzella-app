# Newzella Floating Variant Switcher

## Ziel

Die vier Newzella-Designvarianten sollen aus jeder Seite heraus erreichbar sein, damit der visuelle Vergleich nicht über manuelle URL-Eingabe erfolgen muss.

## UX-Konzept

- Ein kleiner, fixer Bubble sitzt links unterhalb des oberen Navigationsbereichs.
- Der Bubble ist standardmäßig kompakt und zeigt beim Öffnen ein Panel mit vier direkten Routen.
- Jede Route erhält eine klare Nummer und einen kurzen Namen: `01 Laib & Leben`, `02 Backstube`, `03 Raum & Anlass`, `04 Geschmack beginnt`.
- Die aktuell aktive Variante wird visuell markiert und mit `aria-current="page"` ausgezeichnet.
- Der Button ist per Tastatur bedienbar, besitzt einen sichtbaren Fokuszustand, unterstützt `Escape` zum Schließen und nutzt `aria-expanded`/`aria-controls`.
- Auf kleinen Viewports bleibt der Switcher links und nimmt nur so viel Platz ein, dass der Seiteninhalt nicht horizontal überläuft.

## Architektur

- `NewzellaRouteSwitcher.vue` wird einmal in `app/app.vue` neben `<NuxtPage />` gerendert.
- Die Navigation nutzt `NuxtLink`, damit der Wechsel über Nuxt-Routing ohne Vollreload funktioniert.
- Die vier Designkomponenten bleiben unverändert und behalten ihre eigenen visuellen Systeme.
- Die Switcher-Oberfläche erhält eine bewusst neutrale Newzella-Ausprägung aus Cream, Espresso, Burgundy und Gelb, damit sie auf hellen und dunklen Varianten funktioniert.

## Prüfung

- Typecheck und Produktions-Build müssen erfolgreich bleiben.
- Desktop und Mobile werden auf horizontales Overflow geprüft.
- Alle vier Varianten müssen über die sichtbaren Switcher-Links erreichbar sein.
