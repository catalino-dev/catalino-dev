// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    future: {
        compatibilityVersion: 4,
    },
    devtools: { enabled: true },
    modules: [
        '@nuxt/content',
        '@nuxtjs/tailwindcss',
        '@nuxt/icon',
        '@nuxtjs/color-mode',
        '@nuxthq/studio'
    ],
    colorMode: {
        classSuffix: '',
        preference: 'system',
        fallback: 'dark'
    },
    content: {
        // Content 3 configuration
    },
    studio: {
        repository: {
            provider: 'github',
            owner: 'catalino-dev',
            repo: 'catalino-dev',
            branch: 'main',
        }
    },
    nitro: {
        prerender: {
            routes: ['/'],
            crawlLinks: true
        }
    }
})
