<template>
    <CodeExample :code="code" alignment="right"></CodeExample>
</template>

<script setup>
import CodeExample from "../components/CodeExample.vue";
const code1 = `export default {
    inject: ["updateBreakpoints"],
    created() {
        this.updateBreakpoints({
            mobile: 0,
            tablet: 576,
            desktop: 1200
        })   
    }
}`;
const code2 = `import { onMounted, inject } from "vue";
setup() {
    const updateBreakpoints = inject("updateBreakpoints");
    onMounted(() => {
        updateBreakpoints({
            mobile: 0,
            tablet: 576,
            desktop: 1200
        })
    })
}`;

const code = [
    { lang: "js", output: code1, id: 0, button: "Options API" },
    { lang: "js", output: code2, id: 1, button: "Composition API" },
];
</script>
