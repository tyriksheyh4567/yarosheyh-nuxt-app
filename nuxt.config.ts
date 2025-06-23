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
});
