<template>
    <header>
        <nav class="py-8">
            <ul class="flex h-0 items-center justify-center text-2xl font-bold">
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
        </nav>
        <div class="flex items-center justify-center">
            <ModeToggle />
        </div>
    </header>
</template>
