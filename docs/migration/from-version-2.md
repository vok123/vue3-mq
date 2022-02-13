# Migrating from Vue3 Mq version 2 to 3

Vue3 MQ version 3 has been rewritten from the ground up to provide a plugin that is custom designed for both Options API and Composition API builds of Vue 3 and in line with best practices.

As such, there've been a fair few changes around here.

## Installation Method

There is no longer a default export from the vue3-mq package. All exports are now named. Therefore, the installation process requires using destructured imports:

```js
import { createApp } from "vue";
import { Vue3Mq } from "vue3-mq";

const app = createApp();
app.use(Vue3Mq);

app.mount('#app');
```

## Now Using Minimum Widths for Breakpoints

Customising your breakpoints in version 2 required setting your breakpoints using a key and the maximum width (in px) that the screen could be in order to be counted as that breakpoint. This tended to be be pretty confusing given it required the use of something along the lines of a `{ xxl: Infinity }` breakpoint. This was also something of an anti-pattern when compared to setting up common CSS frameworks since it was not "mobile-first".

Version 3 requires using the **minimum** width you want a breakpoint to become active on. For example, a custom setup might go like so: 

```js
app.use(Vue3Mq, {
    breakpoints: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1264,
        xl: 1904,
    }
}
```

 This means that from a screen width of 0-599, the `xs` breakpoint is active. From 600-959, the `sm` breakpoint is active and so on. The `xl` breakpoint will be active from 1904 pixels wide and above.

You should **always** have a breakpoint of `0` when declaring custom breakpoints. 

## Removal of Global Properties and Functions

Because of the performance and build-size benefits of tree-shaking, the Vue 3 ecosystem is increasingly embracing the practice of using local imports rather than global functions and properties. As such, $mq has been removed as a global property and must now be injected into components that require it. 


<CodeGroup>
  <CodeGroupItem title="Composition API">
  
```vue
<script setup>
import { computed } from "vue";
import { useMq } from "vue3-mq";
const mq = useMq();

const showElement = computed(() => mq.current === "md");
</script>
```

  </CodeGroupItem>


  <CodeGroupItem title="Options API" active>

```vue
<script>
export default {
    inject: ["mq"],
    computed: {
        showElement() {
            return this.mq.current === "md";
        }
    }   
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

The same goes for the `updateBreakpoints` function. This should also be injected or imported into your component. 

<CodeGroup>
  <CodeGroupItem title="Composition API">
  
```vue
<script setup>
import { updateBreakpoints } from "vue3-mq";

const switchToVuetify = () => {
    updateBreakpoints({ preset: "vuetify" })
}
</script>
```

  </CodeGroupItem>


  <CodeGroupItem title="Options API" active>

```vue
<script>
export default {
    inject: ["updateBreakpoints"],
    methods: {
        switchToVuetify() {
            this.updateBreakpoints({ preset: "vuetify" });
        }
    }   
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

## Component `<MqLayout>` Becomes `<MqResponsive>` and Goes Local

The Vue3 Mq helper component has changed name from `<mq-layout>` to `<mq-responsive>` to better reflect its function.

Additionally, the prop `mq` – which designated the breakpoints on which the contents should render – is now called `target` to better fit alongside the new orientation / theme functionality. 

```vue
<mq-responsive target="md+" tag="div">
    This will render on "md" and above screens
</mq-responsive>
```

This helper component won't automatically be available globally in version 3. You must either make it a global component yourself, or import it locally when you want to use it inside a Vue component/application.

<CodeGroup>
  <CodeGroupItem title="Local Import">
  
```vue
<script setup>
import { MqResponsive } from "vue3-mq";

export default {
    components: {
        MqResponsive
    }   
}
</script>
```

  </CodeGroupItem>


  <CodeGroupItem title="Global Installation" active>

```js
import { createApp } from "vue";
import { Vue3Mq, MqResponsive } from "vue3-mq";

const app = createApp();
app.use(Vue3Mq);
app.component('mq-responsive', MqResponsive);

app.mount('#app');
```

  </CodeGroupItem>
</CodeGroup>

## MQ Changes to a Reactive Object

 In version 2, calling `this.$mq` simply told you the current breakpoint. In version 3, injecting `mq` gives you access to a far more powerful reactive object that can instantly tell your app information about the browser environment. New boolean properties allow you to easily make calculations using the likes of `mq.lgPlus` or `mq.mdMinus`.

This is the current reactive data for your browser window based on the Bootstrap 5 preset:

<MqObject />