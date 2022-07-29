---
title: Installation
---
# Install Vue3-MQ using a package manager

To add Vue3-Mq to your Vue 3 app, first install it using your chosen package manager.

<CodeGroup>
  <CodeGroupItem title="NPM" active>

```bash
npm install vue3-mq
```

  </CodeGroupItem>

  <CodeGroupItem title="Yarn">
  
```bash
yarn add vue3-mq
```

  </CodeGroupItem>
</CodeGroup>

Now add the plugin to your app entry file

```js
import { createApp } from "vue";
import { VitalMq } from "vue3-mq";
const app = createApp({});
app.use(VitalMq);
app.mount("#app");
```