<script setup lang="ts">
import { authClient } from "~/lib/auth-client";
const { data: session } = await authClient.useSession(useFetch);
</script>

<template>
	<div class="no-visible-scrollbar min-h-[80vh] overflow-hidden px-6 md:px-0">
		<UiCard class="w-[350px]">
			<UiCardHeader>
				<UiCardTitle> Пользователь </UiCardTitle>
			</UiCardHeader>
			<UiCardContent>
				<div class="flex items-center gap-2">
					<div>
						<p class="text-sm">
							{{ session?.user?.name }}
						</p>
						<p class="text-xs">
							{{ session?.user?.email }}
						</p>
					</div>
				</div>
			</UiCardContent>
			<UiCardFooter>
				<UiButton
					variant="secondary"
					@click="
						async () => {
							await authClient.signOut();
							useRouter().push('/');
						}
					"
				>
					Выйти из системы
				</UiButton>
			</UiCardFooter>
		</UiCard>
	</div>
</template>
