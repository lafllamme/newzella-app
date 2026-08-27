export const newzellaImages = {
  logo: 'https://i.imgur.com/CD6BEWM.png',
  heroBack: 'https://i.imgur.com/CMQmIkf.jpeg',
  breads: 'https://i.imgur.com/7TUvlQR.jpeg',
  rolls: 'https://i.imgur.com/ptVzBSD.jpeg',
  cakes: 'https://i.imgur.com/IOIVbyC.jpeg',
  appleFritters: 'https://i.imgur.com/eFqHtpv.jpeg',
  breadDisplay: 'https://i.imgur.com/VYlAEMK.jpeg',
} as const

export const newzellaLocations = [
  { name: 'Köln-Heimersdorf', type: 'Backstube & Fachgeschäft' },
  { name: 'Köln-Seeberg', type: 'Fachgeschäft' },
  { name: 'Köln-Weidenpesch', type: 'Fachgeschäft' },
  { name: 'Leverkusen-Alkenrath', type: 'Café Newzella' },
  { name: 'Leverkusen-Wiesdorf', type: 'Fachgeschäft' },
  { name: 'Pulheim Marktplatz', type: 'Café am Marktplatz' },
] as const

export const newzellaConcepts = {
  variant1: {
    title: 'Newzella — Konzept 01: Laib & Leben',
    description: 'Bäckerei und Konditorei Newzella: täglich frisches Handwerk in Köln, Leverkusen und Pulheim.',
  },
  variant2: {
    title: 'Newzella — Konzept 02: Die Backstube',
    description: 'Newzella Bäckerei und Konditorei: täglich frisches Handwerk in Köln, Leverkusen und Pulheim.',
  },
  variant3: {
    title: 'Newzella — Konzept 03: Gebäck mit Anlass',
    description: 'Newzella Bäckerei und Konditorei in Köln, Leverkusen und Pulheim — handwerklich gebacken seit 1896.',
  },
  variant4: {
    title: 'Newzella — Konzept 04: Wo Geschmack beginnt',
    description: 'Newzella: Brote, Brötchen, Torten und Feingebäck aus der Backstube in Köln.',
  },
} as const

export type NewzellaConcept = keyof typeof newzellaConcepts
