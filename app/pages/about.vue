<template>
    <ClientOnly>
        <UiCardContainer>
            <UiCardBody
                class="group/card relative size-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 sm:w-[30rem] dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]"
            >
                <UiCardItem
                    :translate-z="50"
                    class="text-xl font-bold text-neutral-600 dark:text-white"
                >
                    Что это за сайт?
                </UiCardItem>
                <UiCardItem
                    as="p"
                    translate-z="60"
                    class="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
                >
                    Это мой личный веб-сайт.
                </UiCardItem>
                <UiCardItem
                    :translate-z="100"
                    :rotate-x="20"
                    :rotate-z="-10"
                    class="mt-4 w-full"
                >
                    <img
                        src="~/assets/img/about.png"
                        height="1000"
                        width="1000"
                        class="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </UiCardItem>
                <div class="mt-20 flex items-center justify-between">
                    <UiCardItem
                        :translate-z="20"
                        as="a"
                        href="https://inspira-ui.com"
                        target="__blank"
                        class="rounded-xl px-4 py-2 text-xs font-normal dark:text-white"
                    >
                        Inspira UI →
                    </UiCardItem>
                    <UiCardItem
                        :translate-z="20"
                        as="button"
                        class="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
                    >
                        <NuxtLink to="/sign-in">Войти</NuxtLink>
                    </UiCardItem>
                </div>
            </UiCardBody>
        </UiCardContainer>
    </ClientOnly>
</template>
