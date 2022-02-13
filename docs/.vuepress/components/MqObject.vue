<template>
	<pre>{{ mq }}</pre>
</template>

<script setup>
import { useMq } from "../../../src";

const mq = useMq();
</script>
