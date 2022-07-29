# Available presets

Under the `preset` option, you can pass any of the following:

## Bootstrap 5 (default)

```js
app.use(VitalMq, {
    preset: 'bootstrap5'
})
```

| Name  | Minimum width |
| ----- | ------------- |
| xs    | 0             |
| sm    | 576           |
| md    | 768           |
| lg    | 992           |
| xl    | 1200          |
| xxl   | 1400          |

## Bootstrap 4

```js
app.use(VitalMq, {
    preset: 'bootstrap4'
})
```

| Name  | Minimum width |
| ----- | ------------- |
| xs    | 0             |
| sm    | 576           |
| md    | 768           |
| lg    | 992           |
| xl    | 1200          |

## Bootstrap 3

```js
app.use(VitalMq, {
    preset: 'bootstrap3'
})
```

| Name  | Minimum width |
| ----- | ------------- |
| xs    | 0             |
| sm    | 768           |
| md    | 992           |
| lg    | 1200          |

## Vuetify

```js
app.use(VitalMq, {
    preset: 'vuetify'
})
```

| Name  | Minimum width |
| ----- | ------------- |
| xs    | 0             |
| sm    | 600           |
| md    | 960           |
| lg    | 1264          |
| xl    | 1904          |

## Tailwind

```js
app.use(VitalMq, {
    preset: 'tailwind'
})
```

| Name  | Minimum width |
| ----- | ------------- |
| xs    | 0             |
| sm    | 640           |
| md    | 768           |
| lg    | 1024          |
| xl    | 1280          |
| xxl   | 1536          |

## Devices

```js
app.use(VitalMq, {
    preset: 'devices'
})
```

| Name    | Minimum width |
| ------- | ------------- |
| phone   | 0             |
| tablet  | 768           |
| laptop  | 1370          |
| desktop | 1906          |

## Wordpress

```js
app.use(VitalMq, {
    preset: 'wordpress'
})
```

| Name    | Minimum width |
| ------- | ------------- |
| mobile  | 0            |
| small   | 600          |
| medium  | 782          |
| large   | 960          |
| xlarge  | 1080         |
| wide    | 1280         |
| huge    | 1440         |