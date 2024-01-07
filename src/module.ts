import { defineNuxtModule, createResolver } from '@nuxt/kit'
import { defu } from 'defu'
import { fileURLToPath } from 'url'

export interface ModuleOptions {
  url: string
  key: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'catnibdb',
    configKey: 'catnibdb',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  defaults: {
    url: process.env.CATNIBDB_URL as string,
    key: process.env.CATNIBDB_KEY as string
  },
  setup(options, nuxt) {

    nuxt.options.runtimeConfig.public.catnibdb = defu(nuxt.options.runtimeConfig.public.catnibdb, {
      url: options.url,
      key: options.key,
    })

    if (!nuxt.options.runtimeConfig.public.catnibdb.url) {
      // eslint-disable-next-line no-console
      console.warn('Missing catnibdb url, set it either in `nuxt.config.js` or via env variable as CATNIBDB_URL')
    }
    if (!nuxt.options.runtimeConfig.public.catnibdb.key) {
      // eslint-disable-next-line no-console
      console.warn('Missing catnibdb key, set it either in `nuxt.config.js` or via env variable as CATNIBDB_KEY')
    }

    const { resolve } = createResolver(import.meta.url)
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))

    nuxt.hook('imports:dirs', (dirs) => {
      dirs.push(resolve(runtimeDir, 'composables'))
    })
  }
})
