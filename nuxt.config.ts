// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head: {
            title: 'Nuxt Dojo',
            meta: [
                {name: 'description', content: 'Everything about Nuxt 3'}
            ],
            link: [
                {
                    rel: "stylesheet",
                    href: 'https://material-icons.github.io/material-icons-font/css/all.css'
                }
            ]
        }
    },
    css: ['~/assets/css/tailwind.css'],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
    }
})
