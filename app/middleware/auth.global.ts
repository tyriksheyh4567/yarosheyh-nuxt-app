import { authClient } from "~/lib/auth-client";

export default defineNuxtRouteMiddleware(async (to) => {
	const { data: session } = await authClient.useSession(useFetch);
	if (!session.value) {
		if (to.path === "/dashboard") {
			alert("Войдите в систему, прежде чем попасть на эту страницу!");
			return navigateTo("/");
		}
	}
});
