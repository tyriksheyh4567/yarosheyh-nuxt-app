<template>
    <header>
        <nav class="py-8">
            <ul
                class="flex h-0 items-center justify-center gap-2 text-2xl font-bold"
            >
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/sign-in">Sign-in</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/sign-up">Sign-up</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/dashboard">Dashboard</NuxtLink>
                </li>
            </ul>
        </nav>
        <div class="flex items-center justify-center">
            <ModeToggle />
        </div>
    </header>
</template>
