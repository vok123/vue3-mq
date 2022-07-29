import vue from "@vitejs/plugin-vue";
import path from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default {
	plugins: [
		vue(),
		viteStaticCopy({
			targets: [
				{
					src: "src/vital-mq.d.ts",
					dest: "",
				},
			],
		}),
	],
	build: {
		lib: {
			entry: path.resolve(__dirname, "src/index.js"),
			name: "VitalMq",
			formats: ["es", "umd", "cjs"],
		},
		rollupOptions: {
			external: ["vue"],
			output: {
				globals: {
					vue: "Vue",
				},
			},
		},
	},
};
