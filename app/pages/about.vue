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
                    Hover over this card to unleash the power of CSS perspective
                </UiCardItem>
                <UiCardItem :translate-z="100" class="mt-4 w-full">
                    <img
                        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                        :rotate-x="20"
                        :rotate-z="-10"
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
