export default defineNuxtConfig({
  modules: ['../src/module'],
  catnibdb: {
    url: 'https://catnibdb.vercel.app',
    key: 'libres_chats_de_bastides',
  },
  devtools: { enabled: true }
})
