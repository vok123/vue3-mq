import { Vue3Mq } from "../../src";
import AutoLink from "@vuepress/theme-default/lib/client/components/AutoLink.vue";

export default ({ app, router, siteData }) => {
	app.use(Vue3Mq);
	app.component("AutoLink", AutoLink);
};
