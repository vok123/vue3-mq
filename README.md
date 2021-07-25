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

### 2.) Using custom breakpoints or breakpoint presets

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

`target` => optional : [String,Array] - see below

`tag` => optional : String - sets the HTML tag to use for the rendered component (default 'div')

`portrait` => optional : Boolean - only renders in portrait orientation

`landscape` => optional : Boolean - only renders in landscape orientation

`dark` => optional : Boolean - only renders if user prefers dark theme (OS / browser setting)

`light` => optional : Boolean - only renders if user prefers light theme

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

## <a id="browser-support">Browser Support</a>
Since Vue3 will never support Internet Explorer, this browser is not supported.

If your browser doesn't support the MatchMedia API, you will need to use a polyfill to add support:

Paul Irish: [matchMedia polyfill](https://github.com/paulirish/matchMedia.js)

## <a id="support">Bugs / Support</a>

Please [open an issue](https://github.com/craigrileyuk/vue3-mq/issues/new) for support.
