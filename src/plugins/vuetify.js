/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#9155fe',
          secondary: '#56ca01',
          info: '#16b2ff',
          success: '#56ca01',
          error: '#ff4c51',
          yellow: '#ffb401',
          dark: '#89868d',
        },
      },
    },
  },
})
