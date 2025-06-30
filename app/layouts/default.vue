<script setup lang="ts">
import HeaderPart from "~/components/HeaderPart.vue";
</script>

<template>
	<main>
		<HeaderPart />
		<div class="flex h-screen flex-col items-center justify-center">
			<slot />
		</div>
	</main>
</template>
