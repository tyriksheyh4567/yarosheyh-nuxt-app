<script lang="ts" setup>
import { authClient } from "~/lib/auth-client";
const { data: session } = await authClient.useSession(useFetch);
let nickName = "";
if (!session.value) {
    nickName = "странник";
} else {
    nickName = session.value.user.name;
}
await authClient.oneTap();
</script>

<template>
    <h1 class="text-4xl">Привет, {{ nickName }}!</h1>
</template>
