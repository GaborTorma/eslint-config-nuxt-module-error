import { defineNuxtPlugin, useNuxtApp } from '#app'

export default defineNuxtPlugin({
  name: 'nuxt-dayjs-i18n-provide-format-plugin',
  hooks: {
    'app:created': function () {
      console.log('Plugin injected by my-module!')
      const nuxtApp = useNuxtApp()

      nuxtApp.provide('any', (template: string): string => {
        return `any: ${template}`
      })
    },
  },
})
