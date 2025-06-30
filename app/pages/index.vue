<script lang="ts" setup>
import { toast } from "vue-sonner";
import { authClient } from "~/lib/auth-client";
const { data: session } = await authClient.useSession(useFetch);
let nickName = "";
if (!session.value) {
	nickName = "странник";
} else {
	nickName = session.value.user.name;
}
</script>

<template>
	<main class="flex flex-col items-center justify-center gap-3">
		<h1 class="text-4xl">Привет, {{ nickName }}!</h1>
		<UiButton
			@click="
				() =>
					toast.error('Ошибка!', {
						description: 'Успех!',
						action: { label: 'О, как!' },
					})
			"
		>
			Кликни сюда!
		</UiButton>
	</main>
</template>
