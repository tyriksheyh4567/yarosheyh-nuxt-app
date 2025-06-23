<template>
    <UiFlipCard>
        <template #default>
            <img
                src="https://random.imagecdn.app/640/480"
                alt="Image"
                class="size-full rounded-2xl object-cover shadow-2xl shadow-black/40"
            />
            <div class="absolute bottom-4 left-4 text-xl font-bold">
                Что это за сайт?
            </div>
        </template>
        <template #back>
            <div class="flex min-h-full flex-col gap-2">
                <h1 class="text-xl font-bold">Inspira UI</h1>
                <p
                    class="mt-1 border-t py-4 text-base leading-normal font-medium"
                >
                    Это сайт YaroSheyh. Его написал YaroSheyh. Использую Nuxt 4,
                    Better Auth с базой данных в Turso (sqlite, libSQL).
                </p>
            </div>
        </template>
    </UiFlipCard>
</template>
