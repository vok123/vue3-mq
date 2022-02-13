# Install Vue3-MQ using a CDN

You can add Vue3-MQ to your project using any of the available public open-source CDN providers.

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
</head>

<body>
    <div id="app">
        <div>Current breakpoint: {{ mq.current }}</div>
        <mq-responsive #lg+>This is an LG+ screen</mq-responsive>
    </div>
    <script src="https://unpkg.com/vue@3"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue3-mq@latest"></script>
    <script>
        const { MqResponsive, Vue3Mq: Vue3MqPlugin } = Vue3Mq;
        const app = Vue.createApp({
            inject: ["mq"]
        });
        app.use(Vue3MqPlugin);
        app.component('MqResponsive', MqResponsive);
        app.mount('#app')
    </script>
</body>

</html>
```