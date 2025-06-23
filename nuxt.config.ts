// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: "2025-05-15",
    devtools: { enabled: true },
    modules: [
        "@nuxt/eslint",
        "@nuxt/icon",
        "shadcn-nuxt",
        "motion-v/nuxt",
        "@vueuse/nuxt",
        "@nuxtjs/color-mode",
        "@nuxthub/core",
        "@nuxtjs/turnstile",
        "@vite-pwa/nuxt",
    ],
    vite: { plugins: [tailwindcss()] },
    css: ["~/assets/css/main.css"],
    colorMode: {
        classSuffix: "",
    },
    app: {
        head: {
            title: "YaroSheyh | Nuxt 4",
        },
        pageTransition: {
            name: "page",
            mode: "out-in",
        },
    },
    hub: {
        cache: true,
    },
    nitro: {
        experimental: {
            openAPI: true,
        },
    },
    turnstile: {
        siteKey: process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY,
    },
    runtimeConfig: {
        turnstile: {
            secretKey: process.env.NUXT_TURNSTILE_SECRET_KEY,
        },
    },
    pwa: {
        manifest: {
            name: "YaroSheyh",
            short_name: "YaroSheyh",
            description: "Nuxt 4 PWA by YaroSheyh",
            icons: [
                {
                    src: "icons/icon-36x36.png",
                    sizes: "36x36",
                    type: "image/png",
                },
                {
                    src: "icons/icon-48x48.png",
                    sizes: "48x48",
                    type: "image/png",
                },
                {
                    src: "icons/icon-64x64.png",
                    sizes: "64x64",
                    type: "image/png",
                },
                {
                    src: "icons/icon-72x72.png",
                    sizes: "72x72",
                    type: "image/png",
                },
                {
                    src: "icons/icon-96x96.png",
                    sizes: "96x96",
                    type: "image/png",
                },
                {
                    src: "icons/icon-144x144.png",
                    sizes: "144x144",
                    type: "image/png",
                },
                {
                    src: "icons/icon-384x384.png",
                    sizes: "384x384",
                    type: "image/png",
                },
                {
                    src: "icons/icon-512x512.png",
                    sizes: "512x512",
                    type: "image/png",
                },
            ],
        },
        workbox: {
            navigateFallback: "/",
        },
        devOptions: {
            enabled: true,
            type: "module",
        },
    },
});
