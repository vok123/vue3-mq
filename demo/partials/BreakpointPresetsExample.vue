<template>
    <CodeExample :code="code" alignment="left"></CodeExample>
</template>

<script setup>
import CodeExample from "../components/CodeExample.vue";
const code1 = `import { createApp } from "vue";

import { Vue3Mq } from "vue3-mq";

const app = createApp({});
app.use(Vue3Mq, {
    preset: "vuetify"
});
app.mount("#app");
`;
const code2 = `import { onMounted, inject } from "vue";
setup() {
    const updateBreakpoints = inject("updateBreakpoints");
    onMounted(() => {
        updateBreakpoints({
            preset: "tailwind"
        })
    })
}`;

const code = [
    { lang: "js", output: code1, id: 0, button: "Plugin Installation" },
    { lang: "js", output: code2, id: 1, button: "Dynamic Update" },
];
</script>
