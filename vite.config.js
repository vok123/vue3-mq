import vue from "@vitejs/plugin-vue";
import path from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default {
	plugins: [
		vue({
			reactivityTransform: true,
		}),
		viteStaticCopy({
			targets: [
				{
					src: "src/vital-mq.d.ts",
					dest: "dist",
				},
			],
		})
	],
	resolve: {
		alias: {
			"vital-mq": path.resolve(__dirname, "./src/index.js"),
		},
	},
};
