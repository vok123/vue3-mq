<template>
	<CodeExample :code="code" alignment="right"></CodeExample>
</template>

<script setup>
import CodeExample from "../components/CodeExample.vue";
const options = `export default {
	inject: ["mq"],
	computed: {
		renderMyComponent() {
			return this.mq.current === 'sm' ? true : false;
		}
	}
}`;
const composition = `import { inject } from "vue";
import { useMq } from "vue3-mq";
export default {
	setup() {
		const mq = useMq();
		if (mq.current === 'sm') takeAction();
	}
}`;

const code = [
	{ lang: "javascript", output: options, id: 0, button: "Options API" },
	{ lang: "javascript", output: composition, id: 1, button: "Composition API" },
];
</script>
