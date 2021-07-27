# Vue 3 MQ (Media Query)
Define your breakpoints and build responsive design semantically and declaratively in a mobile-first way with Vue 3.

See the [Vue3-MQ Website](https://vue3-mq.info) for a more detailed usage guide.

Use with `vue@^3.x.x`

Not compatible with Vue 2. Use [vue-mq](https://www.npmjs.com/package/vue-mq) if you require Vue 2 support.


## Table of Contents

- [Migration Guide](#migration-guide)
- [Installation](#installation)
- [Usage](#usage)
- [Browser Support](#browser-support)
- [Support](#support)

## <a id="migration-guide">Migration Guide from vue3-mq version 2</a>

See https://vue3-mq.info/#/migration-guide-v2-to-v3 for a guide on upgrading from version 2 to 3 of this plugin.

## <a id="installation">Installation</a>

#### **Using NPM**

```sh
npm install vue3-mq
```

#### **Using yarn**

```sh
yarn add vue3-mq
```

## <a id="usage">Usage</a>

### 1.) Add plugin to Vue

```js
import { createApp } from "vue";
import { Vue3Mq } from "vue3-mq";

const app = createApp({});

app.use(Vue3Mq)

app.mount('#app');
```

### 2.) Plugin Configuration

By default, the plugin will use the `bootstrap5` breakpoints preset. Other presets include:

* bootstrap4
* bootstrap3
* vuetify
* tailwind
* devices

See the [presets.js](https://github.com/craigrileyuk/vue3-mq/tree/main/src/presets.js) file for ones currently available.

You can set a preset either when installing the plugin, or via the `updateBreakpoints` method.

```js
app.use(Vue3Mq, {
    preset: "vuetify"
})
```

Define your own custom breakpoints by passing `breakpoints` option. This lets you name the breakpoints as you want as well as defining the minimum pixel width before it becomes active.

**Eg**:

`{ phone: 0, tablet: 500, other: 1200 }`

`{ small: 0, large: 500, whatever: 1200 }`

`{ xs: 0, s: 300, m: 500, l: 800, xl: 1200 }`

```js
app.use(Vue3Mq, {
  breakpoints: { 
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400
  }
})
```

> **Plugin Configuration Options**

| Name               | Type    | Default      | Description                                                                                     |
| ------------------ | ------- | ------------ | ----------------------------------------------------------------------------------------------- |
| preset             | String  | "bootstrap5" | Use breakpoints preset. Options are: bootstrap3, bootstrap4, vuetify, tailwind or devices.      |
| breakpoints        | Object  | null         | Custom breakpoints config. Object keys and values = breakpoint name and min-width respectively. |
| defaultBreakpoint  | String  | null         | Screen breakpoint to use before browser window is available (i.e. in SSR)                       |
| defaultOrientation | String  | null         | Screen orientation to use before browser window is available.                                   |
| defaultTheme       | String  | null         | OS / browser theme to use before browser window is available.                                   |

### 3.) Use the `mq` reactive object
After installing the plugin, you can inject the `mq` object into any component.

```html
<template>
    <div>{{ mq.current }}</div>
</template>
```

```js
// Options API
export default {
    inject: ["mq"]
}
```

```js
// Composition API
<script setup>
import { useMq } from "vue-mq";

const mq = useMq();
</script>
```


Based on the above breakpoints, you would give you in a browser window with a width of 1000px:

```js
{
    current: "lg",
    xs: false,
    sm: false,
    smMinus: false,
    smPlus: true,
    md: false,
    mdMinus: false,
    mdPlus: true,
    lg: true,
    lgMinus: true,
    lgPlus: true,
    xl: false,
    xlMinus: true,
    xlPlus: false,
    xxl: false,
    orientation: "landscape",
    isLandscape: true,
    isPortrait: false,
    theme: "light",
    isLight: true,
    isDark: false
}
```

### 4.) Use `mq` with a computed property

The `mq` property is fully reactive, so feel free to use it in a computed.

```js
export default {
    inject: ["mq"],
    computed: {
        displayText() {
            return this.mq.current === 'sm' ? 'I am small' : 'I am large'
        }
    },
    template: `
        <h1>{{ displayText }}</h1>
    `,
}
```

### 5.) Update breakpoints

A function is available via Vue's `provide` method which allows you to dynamically change the breakpoints which are responded to. Simply `inject` it into any component where it's needed.

```js
import { inject, onMounted } from "vue";

setup() {
    const updateBreakpoints = inject("updateBreakpoints");

    onMounted() {
      updateBreakpoints({
            xs: 0,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1400,
            xxl: 1920
        })
    }
}
```

### 6.) \<mq-responsive\> component
In addition to `mq` reactive object, this plugin provide a wrapper component to facilitate conditional rendering with media queries.

> **Usage**:
```html
<mq-responsive target="lg">
  <span> Display on lg </span>
</mq-responsive>
<mq-responsive target="md+">
  <span> Display on md and larger </span>
</mq-responsive>
<mq-responsive :target="['sm', 'lg']" tag="span">
  Display on sm and lg
</mq-responsive>
```

> **Props**

| Name      | Type             | Default | Description                                                                   |
| --------- | ---------------- | ------- | ----------------------------------------------------------------------------- |
| target    | String \| Array  | null    | Which breakpoints to render the component on (see below for further details). |
| tag       | String           | "div"   | The HTML tag to use for the rendered component.                               |
| portrait  | Boolean          | false   | Only render component in portrait orientation.													       |
| landscape | Boolean          | false   | Only render component in landscape orientation.	                             |
| dark      | Boolean          | false   | Only render component when user prefers dark mode.	                           |
| light     | Boolean          | false   | Only render component when user prefers light mode.                           |
| group     | Boolean          | false   | Render children as part of a Vue Transition Group.                            |
| list-tag  | String           | "div"   | The HTML tag to use for list items in group mode.                             |

#### **Target prop: no modifier**
Renders the component only on screens matching your mq value
```html
<mq-responsive target="lg">
  <span> Display on lg </span>
</mq-responsive>
```

#### **Target prop: plus modifier**
Appending a `+` to your target property will make the component render on that breakpoint and any *above*
```html
<mq-responsive target="lg+" tag="span">I will render on large and above screen sizes</mq-responsive>
```

#### **Target prop: minus modifier**
Appending a `-` to your mq property will make the component render on that breakpoint and any *below*
```html
<mq-responsive target="md-" tag="span">I will render on medium and below screen sizes</mq-responsive>
```

#### **Target prop: range modifier**
Placing a `-` between two breakpoints in your mq property will make the component render on any breakpoints in that range
```html
<mq-responsive target="sm-lg">I will render on small, medium and large screen sizes</mq-responsive>
```

#### **Target prop: array of breakpoints**
Will render the component if the current screen size matches any of the breakpoints in the array. Remember that you'll need to precede the property with a ```:``` in your template.
```html
<mq-responsive :target="['sm', 'lg']" tag="span">
  Display on sm and lg
</mq-responsive>
```

#### **Using named slots in \<mq-responsive\>**
The use of named slots is another to quickly render one or more items from a list. If you want multiple items to show at once, use the `group` prop on the component. This switches to using a `TransitionGroup` component as a wrapper.

The name of your slot should comprise its render conditions, for example:
```html
<mq-responsive>
  <template #sm>
    This is a small screen
  </template>
  <template #md>
    This is a medium screen
  </template>
  <template #lg>
    This is a large screen
  </template>
</mq-responsive>
```

You can also combine multiple conditions by separating them with a `:` (colon)
```html
<mq-responsive>
  <template #lg+:dark>
    This is a large or greater screen which prefers dark mode
  </template>
  <template #md:portrait>
    This is a medium screen in portrait orientation mode
  </template>
  <template #xs:dark:portrait>
    This is an extra small screen that prefers dark mode and portrait orientation
  </template>
</mq-responsive>
```

If you need to use the same options twice, append a number to the end of the slot name:
```html
<mq-responsive tag="ul" list-tag="li" group>
  <template #sm>
    This is a small screen
  </template>
  <template #sm:2>
    This is also a small screen
  </template>
  <template #sm:3>
    This is yet another small screen
  </template>
  <template #md+>
    This is a medium or larger screen
  </template>
</mq-responsive>
```


## <a id="browser-support">Browser Support</a>
Since Vue3 will never support Internet Explorer, this browser is not supported.

If your browser doesn't support the MatchMedia API, you will need to use a polyfill to add support:

Paul Irish: [matchMedia polyfill](https://github.com/paulirish/matchMedia.js)

## <a id="support">Bugs / Support</a>

Please [open an issue](https://github.com/craigrileyuk/vue3-mq/issues/new) for support.
