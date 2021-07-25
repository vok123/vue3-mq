import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
	root: "demo",
	base: "/vue3-mq/",
	plugins: [vue()],
	define: {
		__VUE_OPTIONS_API__: false,
	},
});
