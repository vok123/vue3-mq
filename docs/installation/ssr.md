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

Nuxt will then autoload the plugin and allow you to import the MQ object or component within your pages as shown throughout the documentation. 

:: warn
This does not register any global functions or objects on your app. You must `import { useMq } from "vue3-mq"` (Composition API) or `inject: ["mq"]` (Options API) or likewise import the component as shown in the usage instructions.
:::
