# The MQ Object

Vue3-Mq provides your app with a fully reactive object detailing the environment that it's operating within. This includes the screen size, orientation and OS/browser theme preference (i.e. dark mode).

<MqObject />

Notice that booleans are created for each of your provided breakpoints to allow you to easily respond to different size screens.

You can access this object inside your Vue 3 application like so:

<CodeGroup>
  <CodeGroupItem title="Composition API">
  
```vue
<script setup>
import { useMq } from "vue3-mq";

const mq = useMq();
</script>
```

  </CodeGroupItem>


  <CodeGroupItem title="Options API" active>

```vue
<script>
export default {
    inject: ["mq"]
}
</script>
```

  </CodeGroupItem>
</CodeGroup>