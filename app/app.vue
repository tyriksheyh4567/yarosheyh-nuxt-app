<template>
    <NuxtLayout>
        <NuxtPwaAssets />
        <NuxtLoadingIndicator />
        <NuxtPage
            :transition="{
                name: 'page',
                mode: 'out-in',
            }"
        />
    </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.3s;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
}
</style>
