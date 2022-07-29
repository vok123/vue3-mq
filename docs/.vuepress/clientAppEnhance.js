import { VitalMq } from "../../src";
import AutoLink from "@vuepress/theme-default/lib/client/components/AutoLink.vue";

export default ({ app, router, siteData }) => {
	app.use(VitalMq);
	app.component("AutoLink", AutoLink);
};
