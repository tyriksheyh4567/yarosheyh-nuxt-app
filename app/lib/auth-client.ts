import { createAuthClient } from "better-auth/vue";
import { oneTapClient } from "better-auth/client/plugins";
export const authClient = createAuthClient({
    baseURL: process.env.BETTER_AUTH_URL,
    plugins: [
        oneTapClient({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            cancelOnTapOutside: true,
            autoSelect: false,
            context: "signin",
            promptOptions: {
                baseDelay: 2000,
                maxAttempts: 5,
            },
        }),
    ],
});
