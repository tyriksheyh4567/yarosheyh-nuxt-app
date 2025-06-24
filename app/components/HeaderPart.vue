<template>
    <header>
        <nav class="py-8">
            <ul
                v-if="$device.isDesktopOrTablet"
                class="flex h-0 items-center justify-center text-2xl font-bold underline"
            >
                <li class="after:m-2 after:content-['|']">
                    <NuxtLink to="/">На главную</NuxtLink>
                </li>
                <li class="after:m-2 after:content-['|']">
                    <NuxtLink to="/about">О сайте</NuxtLink>
                </li>
                <li class="after:m-2 after:content-['|']">
                    <NuxtLink to="/sign-in">Войти</NuxtLink>
                </li>
                <li class="after:m-2 after:content-['|']">
                    <NuxtLink to="/sign-up">Зарегистрироваться</NuxtLink>
                </li>
                <li class="after:m-2 after:content-['|']">
                    <NuxtLink to="/dashboard">Панель</NuxtLink>
                </li>
                <li>
                    <NuxtLink
                        to="https://github.com/tyriksheyh4567/yarosheyh-nuxt-app"
                        target="_blank"
                    >
                        GitHub
                    </NuxtLink>
                </li>
            </ul>
            <ul
                v-if="$device.isMobile"
                class="flex flex-col items-center justify-center text-2xl font-bold underline"
            >
                <li>
                    <NuxtLink to="/">На главную</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">О сайте</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/sign-in">Войти</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/sign-up">Зарегистрироваться</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/dashboard">Панель</NuxtLink>
                </li>
                <li>
                    <NuxtLink
                        to="https://github.com/tyriksheyh4567/yarosheyh-nuxt-app"
                        target="_blank"
                    >
                        GitHub
                    </NuxtLink>
                </li>
            </ul>
        </nav>

        <hr
            class="mx-auto my-1 h-1 w-md rounded-sm border-0 bg-black dark:bg-white"
        />
        <div class="flex flex-col items-center justify-center gap-3">
            <ModeToggle />
            <UiButton @click="$pwa?.install()">Установить</UiButton>
        </div>
    </header>
</template>
