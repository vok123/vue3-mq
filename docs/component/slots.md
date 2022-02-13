# MqResponsive Group slots

::: tip
Group slots become available when `<MqResponsive>` has the `group` prop applied.
:::

When using an MqResponsive group, you can create complex lists which can factor in breakpoints, orientation or theme to decide whether to render the slot's content.

Slot names are created dynamically based upon your provided breakpoints.

```vue
<template>
    <MqResponsive group>
        <template #xs>This list element will render on x-small screens with an 'li' tag</template>
        <template #sm>This list element will render on small screens with an 'li' tag</template>
        <template #md>This list element will render on medium screens with an 'li' tag</template>
        <template #lg>This list element will render on large screens with an 'li' tag</template>
        <template #xl>This list element will render on x-large screens with an 'li' tag</template>
        <template #dark>This list element will render when dark mode is preferred</template>
        <template #light>This list element will render when light mode is preferred</template>
        <template #portrait>This list element will render when in portrait mode</template>
        <template #landscape>This list element will render when in light mode</template>
    </MqResponsive>
</template>
```

## Chaining props

You can chain props onto your slot names by using the `:` separator.

```vue
<template>
    <MqResponsive group>
        <template #xs:dark:portrait>Shown on x-small, portrait screens in dark mode</template>
        <template #sm:light>Shown on small screens in light mode</template>
        <template #sm-lg:portrait>Shown on small to large screens in portrait orientation</template>
    </MqResponsive>
</template>
```

## Multiple slots on same breakpoint

Since Vue doesn't allow multiple slots with the same name, we can workaround this by adding a number as a suffix

```vue
<template>
    <MqResponsive group>
        <template #xs>Shown on x-small screens</template>
        <template #sm:light>Shown on small screens in light mode</template>
        <template #xs:2>Shown on x-small screens as well</template>
    </MqResponsive>
</template>
```

