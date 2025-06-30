// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import eslintConfigPrettier from "eslint-config-prettier";
import oxlint from "eslint-plugin-oxlint";
import { globalIgnores } from "eslint/config";

export default withNuxt(
	eslintConfigPrettier,
	globalIgnores(["app/components/ui/"]),
	...oxlint.configs["flat/recommended"]
);
