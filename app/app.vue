<script setup lang="ts">
import "vue-sonner/style.css";
</script>

<template>
    <NuxtLayout>
        <NuxtPwaAssets />
        <NuxtPage
            :transition="{
                name: 'page',
                mode: 'out-in',
                enterActiveClass: 'transition-all duration-300',
                enterFromClass: 'opacity-0',
                leaveActiveClass: 'transition-all duration-300',
                leaveToClass: 'opacity-0',
            }"
        />
        <UiToaster theme="system" />
    </NuxtLayout>
</template>
