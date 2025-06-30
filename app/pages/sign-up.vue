<script lang="ts" setup>
import { authClient } from "~/lib/auth-client";

const nickName = ref("");
const email = ref("");
const password = ref("");

const handleSignUp = async () => {
	const user = {
		nickName: nickName.value,
		email: email.value,
		password: password.value,
	};
	await authClient.signUp.email({
		email: user.email,
		password: user.password,
		name: user.nickName,
		callbackURL: "/",
		fetchOptions: {
			onError(context) {
				alert(context.error.message);
			},
			onSuccess() {
				useRouter().push("/dashboard");
			},
		},
	});
};
</script>

<template>
	<main>
		<UiCard class="mx-auto max-w-sm">
			<UiCardHeader>
				<UiCardTitle class="text-xl">Зарегистрироваться</UiCardTitle>
				<UiCardDescription
					>Зарегистрируйтесь, чтобы стать полноценным пользователем!</UiCardDescription
				>
			</UiCardHeader>
			<UiCardContent>
				<div class="grid gap-4">
					<div class="grid grid-cols-2 gap-4">
						<div class="grid gap-2">
							<UiLabel for="last-name">Никнейм</UiLabel>
							<UiInput
								id="last-name"
								v-model="nickName"
								placeholder="ivan"
								required
							/>
						</div>
					</div>
					<div class="grid gap-2">
						<UiLabel for="email">Почта</UiLabel>
						<UiInput
							id="email"
							v-model="email"
							type="email"
							placeholder="test@example.com"
							required
						/>
					</div>
					<div class="grid gap-2">
						<UiLabel for="password">Пароль</UiLabel>
						<UiInput id="password" v-model="password" type="password" />
					</div>
					<UiButton type="button" class="w-full" @click="handleSignUp"
						>Создать аккаунт</UiButton
					>
				</div>
				<div class="mt-4 text-center text-sm">
					Уже есть аккаунт?
					<NuxtLink to="/sign-in" class="underline"> Войти </NuxtLink>
				</div>
			</UiCardContent>
		</UiCard>
	</main>
</template>
