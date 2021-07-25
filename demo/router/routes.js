import Home from "../Pages/Home.vue";

export default [
	{
		path: "/",
		component: Home,
		name: "home",
	},
	{
		path: "/migration-guide-v2-to-v3",
		name: "migrationGuide",
		component: () => import("../Pages/MigrationGuide2to3.vue"),
	},
];
