import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
	root: "demo",
	base: "",
	plugins: [vue()],
	define: {
		__VUE_OPTIONS_API__: false,
	},
});
