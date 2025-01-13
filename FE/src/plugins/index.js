/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import router from '@/router/routes'
import vuetify from './vuetify'
import i18n from '@/i18n'

export function registerPlugins (app) {
  app.use(router)
  app.use(i18n)
  app.use(vuetify)
}
