// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts', '@nuxtjs/apollo'],
  googleFonts:{
    families: {
      Roboto: [400, 700],
      'Open+Sans': true
    }
  },
  devServer: {
    port: 8080,
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'http://localhost:3000/graphql',
        httpLinkOptions:{
          headers:{
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMThjMzdjZTItY2QzNC00MzA1LTljYTQtYzE1ZmM3MzZiZWFjIn0.pqWRiyQuvWRVQgIzKvQ85RrBwSF5KxeGZrkFvKt2CG8'
          }
        }
      }
    },
  },
})