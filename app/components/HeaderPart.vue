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
                <li>
                    <NuxtLink to="/dashboard">Панель</NuxtLink>
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
            </ul>
            <div
                v-if="$device.isMobile"
                class="flex flex-col items-center justify-center py-2"
            >
                <ModeToggle />
                <UiButton @click="$pwa?.install()">Установить</UiButton>
            </div>
        </nav>
        <div
            v-if="$device.isDesktopOrTablet"
            class="flex items-center justify-center"
        >
            <ModeToggle />
        </div>
    </header>
</template>
