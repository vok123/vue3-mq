<template>
	<div class="hero-thing full-width">
		<div class="container">
			<div class="row">
				<div class="col-12 col-lg-6">
					<h1 class="small-header">
						Bring fully reactive, responsive design to your Vue 3
						project with Vue3-MQ, a plugin which allows your
						components and pages to adapt to changes in the browser
						environment.
					</h1>
					<ul class="list-none">
						<li v-for="bullet in bullets">
							<SvgIcon type="mdi" :path="bullet.icon" />
							<span>{{ bullet.text }}</span>
						</li>
					</ul>
				</div>
				<div
					class="col-12 col-lg-6 flex justify-end items-center"
					:style="imageStyle"
				>
					<mq-responsive name="fade" mode="out-in">
						<template #xxl+>
							<img src="/images/desktop.png" />
						</template>
						<template #lg-xl>
							<img src="/images/macbook.png" />
						</template>
						<template #md>
							<img src="/images/ipad.png" />
						</template>
						<template #sm->
							<img src="/images/iphone.png" />
						</template>
					</mq-responsive>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { computed } from "vue";
import { MqResponsive, useMq } from "../../../src";

import SvgIcon from "vue3-icon";
import {
	mdiPhoneRotateLandscape,
	mdiTooltipEditOutline,
	mdiThemeLightDark,
	mdiContentDuplicate,
	mdiViewArrayOutline,
	mdiApplicationCog,
	mdiAxisArrowInfo,
} from "@mdi/js";

const mq = useMq();

const imageStyle = computed(() => {
	return ["xs", "sm", "md"].includes(mq.current)
		? { position: "absolute", opacity: 0.1, maxHeight: "350px" }
		: {};
});

/* ******************************************
 * BULLETS
 ****************************************** */
const bullets = [
	{
		icon: mdiTooltipEditOutline,
		text: "Completely customisable breakpoints",
	},
	{
		icon: mdiApplicationCog,
		text: "Includes MQ-Responsive Vue component for unparalleled ease of use",
	},
	{
		icon: mdiAxisArrowInfo,
		text: "Access a fully reactive environment analysis object",
	},
	{
		icon: mdiThemeLightDark,
		text: "Adapt to your users' preference for light or dark themes",
	},
	{
		icon: mdiPhoneRotateLandscape,
		text: "React to changes in screen orientation",
	},
	{
		icon: mdiContentDuplicate,
		text: "Choose from a range of breakpoint presets, including Bootstrap 4, Bootstrap 5, Vuetify or Tailwind",
	},
	{
		icon: mdiViewArrayOutline,
		text: "Render on single breakpoints, arrays of breakpoints or ranges",
	},
];
</script>

<style>
.grid {
	display: grid;
}
.grid-cols-2 {
	grid-template-columns: 1fr 1fr;
}
.text-right {
	text-align: right;
}
</style>
