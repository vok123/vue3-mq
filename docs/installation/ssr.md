# Server Side Rendering

## Nuxt 3

If you haven't already got one, create a `plugins` folder in the root of your project, then create a file called `vue3-mq.js`.

```js
import { defineNuxtPlugin } from "#app";
import { Vue3Mq } from "vue3-mq";

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(Vue3Mq, {
		defaultBreakpoint: "xxl",
	});
});
```