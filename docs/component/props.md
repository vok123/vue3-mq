# MQ Responsive Props

## Target

Content inside the component's slot will render when the current breakpoint matches the target

::: tip
This prop accepts either a String or an Array
:::

##### Single breakpoint
```vue
<template>
    <MqResponsive target="md">
        <div>This is an MD Screen</div>
    </MqResponsive>
</template>
```

##### Breakpoint plus range
```vue
<template>
    <MqResponsive target="md+">
        <div>This will show on medium or above screens</div>
    </MqResponsive>
</template>
```

##### Breakpoint minus range
```vue
<template>
    <MqResponsive target="md-">
        <div>This will show on medium or below screens</div>
    </MqResponsive>
</template>
```

##### Breakpoint range
```vue
<template>
    <MqResponsive target="sm-lg">
        <div>This will show on small, medium, or large screens</div>
    </MqResponsive>
</template>
```

##### Breakpoint array
```vue
<template>
    <MqResponsive :target="['xs','lg']">
        <div>This will only show on x-small or large screens</div>
    </MqResponsive>
</template>
```

## Landscape

Will only render when the screen is in landscape mode (i.e. its width is greater than its height)

::: tip
This prop accepts a Boolean
:::

```vue
<template>
    <MqResponsive landscape>
        <div>This screen is in landscape mode</div>
    </MqResponsive>
</template>
```

## Portrait

Will render only when the screen is in portrait mode (i.e. its height is greater than its width)

::: tip
This prop accepts a Boolean
:::

```vue
<template>
    <MqResponsive portrait>
        <div>This screen is in portrait mode</div>
    </MqResponsive>
</template>
```

## Dark

Uses the OS/browser-provided `prefers-color-scheme` media query to render only when dark mode is preferred.

::: tip
This prop accepts a Boolean
:::

```vue
<template>
    <MqResponsive dark>
        <div>This screen is in dark mode</div>
    </MqResponsive>
</template>
```

## Light

Uses the OS/browser-provided `prefers-color-scheme` media query to render only when light mode is preferred.

::: tip
This prop accepts a Boolean
:::

```vue
<template>
    <MqResponsive light>
        <div>This screen is in light mode</div>
    </MqResponsive>
</template>
```

## Inert

Uses the OS/browser-provided `prefers-reduced-motion` media query to render only when reduced motion is preferred.

::: tip
This prop accepts a Boolean
:::

```vue
<template>
    <MqResponsive inert>
        <div>This user prefers reduced motion</div>
    </MqResponsive>
</template>
```

## Motion

Uses the OS/browser-provided `prefers-reduced-motion` media query to render only when no motion preference is stated.

::: tip
This prop accepts a Boolean
:::

```vue
<template>
    <MqResponsive motion>
        <div>This user has no motion preference</div>
    </MqResponsive>
</template>
```

## Tag

Sets the HTML tag to be used to wrap the contained content

::: tip
This prop accepts a String

Default: `div`
:::

```vue
<template>
    <MqResponsive tag="section">
        <div>My parent element will be a 'section' element</div>
    </MqResponsive>
</template>
```

## Group

Creates a transition group which allows advanced use of list [rendering slots](./slots.md).

Since this uses Vue's `TransitionGroup`, it will pass through any props to that component. See the [Vue3 API Reference](https://v3.vuejs.org/api/built-in-components.html#component) for more details.

::: tip
This prop accepts a Boolean
:::

```vue
<template>
    <MqResponsive group>
        <template #sm>This screen is small</template>
    </MqResponsive>
</template>
```

## List Tag

::: tip
This prop accepts a String
:::

```vue
<template>
    <MqResponsive tag="ol" list-tag="li" group>
        <template #xs>This list element will render on x-small screens with an 'li' tag</template>
        <template #sm>This list element will render on small screens with an 'li' tag</template>
        <template #md>This list element will render on medium screens with an 'li' tag</template>
        <template #lg>This list element will render on large screens with an 'li' tag</template>
        <template #xl>This list element will render on x-large screens with an 'li' tag</template>
    </MqResponsive>
</template>
```