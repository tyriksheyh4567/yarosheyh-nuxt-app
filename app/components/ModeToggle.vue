<script lang="ts" setup>
const colorMode = useColorMode();
</script>

<template>
    <UiButton
        variant="outline"
        size="icon"
        class="group/toggle size-8"
        @click="
            colorMode.preference =
                colorMode.preference === 'light' ? 'dark' : 'light'
        "
    >
        <Icon
            name="radix-icons:moon"
            class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
        />
        <Icon
            name="radix-icons:sun"
            class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
        />
        <span class="sr-only">Toggle theme</span>
    </UiButton>
</template>
