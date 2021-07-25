<template>
    <article>
        <section class="container py-4">
            <h2 class="mb-3">Migrating from Vue3 MQ version 2 to 3</h2>
            <p>Vue3 MQ version 3 has been rewritten from the ground up to provide a plugin that is custom designed for both Options API and Composition API builds of Vue 3 and in line with best practices.</p>
            <p>As such, there've been a fair few changes around here.</p>
        </section>
        <section class="bgc-yellow container-fluid">
            <div class="container py-4">
                <h3 class="text-uppercase">Installation Method</h3>
                <p>There is no longer a default export from the vue3-mq package. All exports are now named. Therefore, the installation process requires using destructured imports:</p>
                <div class="code-container rounded">
                    <PrismComponent :code="installationCode" language="js" />
                </div>
            </div>
        </section>
        <section class="container py-4">
            <h3 class="text-uppercase c-vue-blue">Now Using Minimum Widths for Breakpoints</h3>
            <p>
                Customising your breakpoints in version required setting your breakpoints using a key and the
                <strong>maximum</strong> width (in px) that the screen could be to be counted and that breakpoint. This tended to be be pretty confusing given it required the use of something along the lines of a
                <code
                    class="inline-code"
                >{ xxl: Infinity }</code> breakpoint. This was also something of an anti-pattern when compared to setting up common CSS frameworks.
            </p>
            <p>
                Version 3 requires using the
                <strong>minimum</strong> width you want a breakpoint to become active on. For example, a custom setup might go like so:
            </p>
            <div class="code-container rounded">
                <PrismComponent :code="customBreakpointsCode" language="js" />
            </div>
            <p class="mt-4">
                This means that from a screen width of 0-599, the
                <code class="inline-code">xs</code> breakpoint is active. From 600-959, the
                <code class="inline-code">sm</code> breakpoint is active and so on. The
                <code class="inline-code">xl</code> breakpoint will be active from 1904 pixels wide and above.
            </p>
            <p>
                You should
                <strong>always</strong> have a breakpoint of
                <code class="inline-code">0</code> when declaring custom breakpoints.
            </p>
        </section>
        <section class="bgc-yellow container-fluid">
            <div class="container py-4">
                <h3 class="text-uppercase c-vue-blue">Removal of Global Properties / Functions</h3>
                <p>
                    Because of the performance and build-size benefits of tree-shaking, the Vue 3 ecosystem is increasingly embracing the practice of using local imports rather than global functions and properties. As such,
                    <code
                        class="inline-code"
                    >$mq</code> has been removed as a global object and must now be injected into components that require it.
                </p>
                <div class="d-flex flex-column align-items-end" style="min-height: 175px">
                    <CodeExample :code="injectMqCode" alignment="right" />
                </div>
                <p class="mt-4">
                    The same goes for the
                    <code class="inline-code">updateBreakpoints</code> function. This should also be injected or imported into your component.
                </p>
                <div class="d-flex flex-column align-items-end" style="min-height: 175px">
                    <CodeExample :code="injectUpdateBreakpointsCode" alignment="right" />
                </div>
            </div>
        </section>
        <section class="container py-4">
            <h3
                class="text-uppercase c-vue-blue"
            >Component &lt;mq-layout&gt; Becomes &lt;mq-responsive&gt; and goes local</h3>
            <p>
                The Vue3 Mq helper component has changed name from
                <code
                    class="inline-code"
                >&lt;mq-layout&gt;</code> to
                <code class="inline-code">&lt;mq-responsive&gt;</code> to better reflect its function.
            </p>
            <p>
                Additionally, the prop
                <code class="inline-code">mq</code> – which designates the breakpoints on which the contents should render – is now called
                <code
                    class="inline-code"
                >target</code> to better fit alongside the new orientation / theme functionality.
            </p>
            <div class="code-container rounded">
                <PrismComponent :code="mqResponsiveExample" language="html" />
            </div>
            <p
                class="mt-4"
            >This helper component won't automatically be available globally in version 3. You must either make it a global component yourself, or import it locally when you want to use it inside a Vue component/application.</p>
            <div class="d-flex flex-column align-items-end" style="min-height: 175px">
                <CodeExample :code="usingMqResponsive" alignment="right" />
            </div>
        </section>
        <section class="bgc-yellow container-fluid">
            <div class="container py-4">
                <h3 class="text-uppercase c-vue-blue">MQ Changes to a Reactive Object</h3>
                <p>
                    In version 2, calling
                    <code class="inline-code">this.$mq</code> simply told you the current breakpoint. In version 3, injecting
                    <code
                        class="inline-code"
                    >mq</code> gives you access to a far more powerful reactive object that can instantly tell your app information about the browser environment. New boolean properties allow you to easily make calculations using the likes of
                    <code
                        class="inline-code"
                    >mq.lgPlus</code> or
                    <code class="inline-code">mq.mdMinus</code>.
                </p>
                <p>This is the current reactive data for your browser window based on the Bootstrap 5 preset:</p>
                <div class="text-centre">
                    <div
                        class="code-container rounded c-white d-inline-block p-4 text-left"
                        style="width: auto;"
                    >
                        <pre v-text="mqOutput"></pre>
                    </div>
                </div>
            </div>
        </section>
        <section class="container py-4 text-right">
            <router-link tag="button" class="btn primary" :to="{ name: 'home' }">Return to Main Page</router-link>
        </section>
    </article>
</template>

<script setup>
import { computed } from "vue";
import PrismComponent from "../components/PrismComponent.js";
import CodeExample from "../components/CodeExample.vue";
import { useMq } from "../plugin/index.js";
const mq = useMq();

const customBreakpointsCode = `app.use(Vue3Mq, {
    breakpoints: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1264,
        xl: 1904,
    }
}`;

const installationCode = `import { createApp } from "vue";
import { Vue3Mq } from "vue3-mq";

const app = createApp();
app.use(Vue3Mq);

app.mount('#app');`;

const injectMqOptions = `export default {
    inject: ["mq"],
    computed: {
        showElement() {
            return this.mq.current === "md";
        }
    }   
}`;
const injectMqComposition = `<script setup>
import { computed } from "vue";
import { useMq } from "vue3-mq";
const mq = useMq();

const showElement = computed(() => mq.current === "md");
<\/script>`;

const injectMqCode = [
    { lang: "js", output: injectMqOptions, id: 0, button: "Options API" },
    { lang: "js", output: injectMqComposition, id: 1, button: "Composition API" },
];

const injectUpdateBreakpointsOptions = `export default {
    inject: ["updateBreakpoints"],
    methods: {
        switchToVuetify() {
            this.updateBreakpoints({ preset: "vuetify" });
        }
    }   
}`;
const injectUpdateBreakpointsComposition = `<script setup>
import { updateBreakpoints } from "vue3-mq";

const switchToVuetify = () => {
    updateBreakpoints({ preset: "vuetify" })
}
<\/script>`;

const injectUpdateBreakpointsCode = [
    { lang: "js", output: injectUpdateBreakpointsOptions, id: 0, button: "Options API" },
    { lang: "js", output: injectUpdateBreakpointsComposition, id: 1, button: "Composition API" },
];

const mqOutput = computed(() => {
    return JSON.stringify(mq, undefined, 2);
})

const mqResponsiveExample = `<mq-responsive target="md+" tag="div">
    This will render on "md" and above screens
</mq-responsive>`;

const usingMqResponsiveLocally = `import { mqResponsive } from "vue3-mq";

export default {
    components: {
        mqResponsive
    }   
}`;

const usingMqResponsiveGlobally = `import { createApp } from "vue";
import { Vue3Mq, mqResponsive } from "vue3-mq";

const app = createApp();
app.use(Vue3Mq);
app.component('mq-responsive', mqResponsive);

app.mount('#app');`;

const usingMqResponsive = [
    { lang: "js", output: usingMqResponsiveLocally, id: 0, button: "Local Import" },
    { lang: "js", output: usingMqResponsiveGlobally, id: 1, button: "Global Installation" },
];
</script>

<style lang="scss">
.rounded {
    border-radius: 4px;
}
</style>

<style lang="scss" scoped>
h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin-bottom: 2rem;
    line-height: 1.5;

    &:not(:first-child):not(p) {
        margin-top: 8rem;
    }
}
</style>