<template>
	<main>
		<Header></Header>
		<router-view></router-view>
		<footer class="py-5 container-fluid">
			<div class="container">
				<div class="row">
					<div class="col-12">
						Vue3-MQ was developed by Craig Riley and is released
						under an MIT licence. Originally based on a project by
						Alexandre Bonaventure Geissmann.
					</div>
				</div>
			</div>
		</footer>
		<div class="breakpoint-box">{{ mq.current }}</div>
	</main>
</template>

<script setup>
import Header from "./components/Header.vue";
import { useMq } from "./plugin";

const mq = useMq();
</script>

<style lang="scss">
@import "./css/index";
@import "prismjs/themes/prism-okaidia.css";

.console,
code,
pre {
	font-family: "Courier New", Courier, "Lucida Console", monospace;
}

.breakpoint-box {
	position: fixed;
	bottom: 0;
	right: 0;
	color: rgba(0, 0, 0, 0.2);
	padding: 1em;
	text-transform: uppercase;
}

footer {
	background-color: rgba(var(--vue-green-rgb), 0.2);
	color: var(--vue-blue);
	display: flex;
	align-items: center;
	font-size: 0.8em;
	text-align: center;
}

code,
pre {
	background: none !important;
}
.code-container {
	background-color: #1e1e1e;
	display: block;
	font-weight: bold;
	width: 100%;
	overflow: hidden;
	position: relative;
}

.inline-code {
	background-color: #1e1e1e !important;
	color: white !important;
	font-weight: bold;
	border-radius: 6px;
	font-size: 85%;
	margin: 0;
	padding: 0.2em 0.4em;
}
</style>
