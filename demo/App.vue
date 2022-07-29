<template>
	<div class="min-h-screen flex flex-col">
		<header class="bg-slate-500 text-white shadow-md p-2">
			<h1 class="text-2xl">vital-mq Sandbox</h1>
		</header>
		<main class="flex-grow">
			<pre>{{ mq }}</pre>
			<MqResponsive>No props</MqResponsive>
			<MqResponsive inert>Reduced motion is preferred</MqResponsive>
			<MqResponsive motion>Normal motion is preferred</MqResponsive>
			<MqResponsive group>
				<template #motion>Motion slot</template>
				<template #inert>Inert slot</template>
			</MqResponsive>
		</main>
		<footer class="">This is a footer</footer>
	</div>
</template>

<script setup>
import { useMq, MqResponsive } from "vital-mq";

const mq = useMq();
</script>
