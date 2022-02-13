const path = require("path");
const { sidebar, navbar } = require("./configs");

module.exports = {
	// site config
	lang: "en-GB",
	title: "Vue3-MQ",
	description:
		"Bring fully reactive, responsive design to your Vue 3 project with Vue3-MQ, a plugin which allows your components and pages to adapt and react to changes in the browser environment.",

	head: [["link", { rel: "icon", href: "/images/favicon.png" }]],
	// theme and its config
	theme: "@vuepress/theme-default",
	themeConfig: {
		logo: "/images/logo.png",
		repo: "https://github.com/craigrileyuk/vue3-mq",
		locales: {
			"/": {
				sidebar: sidebar.en,
				navbar: navbar.en,
			},
		},
		docsDir: "docs",
	},
	base: "/",
	plugins: [
		[
			"@vuepress/plugin-register-components",
			{
				componentsDir: path.resolve(__dirname, "./components"),
			},
		],
		[
			"@vuepress/plugin-search",
			{
				locales: {
					"/": {
						placeholder: "Search",
					},
				},
			},
		],
		["@vuepress/plugin-back-to-top"],
	],
};
