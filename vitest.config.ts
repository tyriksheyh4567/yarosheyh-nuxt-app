import { defineVitestConfig } from "@nuxt/test-utils/config";
import { fileURLToPath } from "node:url";

export default defineVitestConfig({
    test: {
        environmentOptions: {
            nuxt: {
                rootDir: fileURLToPath(new URL("./app/tests", import.meta.url)),
                domEnvironment: "happy-dom",
            },
        },
    },
});
