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
const pwaIsInstalled = () => {
    toast("Ура!", { description: "Это PWA!" });
};
const pwaIsNotInstalled = () => {
    toast("Нет!", {
        description: "Это не PWA! Установите срочно!",
        action: { label: "О, как!" },
    });
};
</script>

<template>
    <main class="flex-col">
        <h1 class="text-4xl">Привет, {{ nickName }}!</h1>
        <UiButton
            @click="
                if ($pwa?.isPWAInstalled === true) {
                    pwaIsInstalled();
                } else {
                    pwaIsNotInstalled();
                }
            "
        >
            Это PWA?
        </UiButton>
    </main>
</template>
