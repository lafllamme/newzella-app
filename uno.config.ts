import { defineConfig, presetWind4 } from 'unocss'

const newzellaPreset = presetWind4({
  preflights: {
    reset: true,
  },
})

export default defineConfig({
  presets: [newzellaPreset],
  theme: {
    colors: {
      newzella: {
        yellow: '#ffe123',
        burgundy: '#8b0e13',
        espresso: '#24130e',
        brown: '#4d281b',
        cream: '#fff5e6',
        paper: '#f3e5d3',
      },
    },
  },
})
