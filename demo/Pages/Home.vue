<template>
    <article>
        <div class="container-lg px-0 py-4">
            <div class="row">
                <div class="col-12 col-lg-6 py-2 px-4 pa-md-4 d-flex flex-column justify-centre">
                    <h2 class="mb-3">
                        Bring fully reactive, responsive design to your Vue 3
                        project with Vue3-MQ, a plugin which allows your
                        components and pages to adapt and react to changes in the browser environment.
                    </h2>
                    <mq-responsive target="sm" tag="div">
                        <span>
                            {{
                                log(
                                    "This will only log to console when a 'sm' breakpoint is detected!"
                                )
                            }}
                        </span>
                    </mq-responsive>
                    <p class="mt-3">
                        Lightweight (only 7k minified), zero dependencies, easy to use, and
                        now available for Vue 3 with all-new features.
                    </p>
                    <ul>
                        <li>
                            <svg-icon type="mdi" :path="mdiTooltipEditOutline" class="mr-4" />Completely customisable breakpoints
                        </li>
                        <li>
                            <svg-icon type="mdi" :path="mdiApplicationCog" class="mr-4" />Includes MQ-Responsive Vue component for unparalleled ease of use
                        </li>
                        <li>
                            <svg-icon type="mdi" :path="mdiAxisArrowInfo" class="mr-4" />Access a fully reactive environment analysis object
                        </li>
                        <li>
                            <svg-icon type="mdi" :path="mdiThemeLightDark" class="mr-4" />Adapt to your users' preference for light or dark themes
                        </li>
                        <li>
                            <svg-icon type="mdi" :path="mdiPhoneRotateLandscape" class="mr-4" />React to changes in screen orientation
                        </li>
                        <li>
                            <svg-icon type="mdi" :path="mdiContentDuplicate" class="mr-4" />Choose from a range of breakpoint presets, including Bootstrap 4, Bootstrap 5, Vuetify or Tailwind
                        </li>
                        <li>
                            <svg-icon type="mdi" :path="mdiViewArrayOutline" class="mr-4" />Render on single breakpoints, arrays of
                            breakpoints or ranges
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-lg-6 d-flex align-items-centre pa-0" :style="imageStyle">
                    <mq-responsive name="fade" mode="out-in">
                        <template #xl+>
                            <img src="../images/desktop.png" />
                        </template>
                        <template #md-lg>
                            <img src="../images/ipad.jpg" />
                        </template>
                        <template #sm->
                            <img src="../images/iphone.jpg" />
                        </template>
                    </mq-responsive>
                </div>
            </div>
        </div>
        <div class="container bgc-vue-green c-white mb-4">
            <h3 class="text-centre rounded py-2">
                Upgrading from Vue3 MQ version 2? See our
                <router-link
                    :to="{ name: 'migrationGuide' }"
                    tag="button"
                    class="btn primary btn-sm"
                >Migration Guide</router-link>
            </h3>
        </div>
        <div class="container-fluid bgc-yellow py-5 my-2">
            <div class="row">
                <div class="col-12 d-flex justify-content-centre">
                    <div class="console">
                        <div>&gt; npm i vue3-mq</div>
                        <div class="mt-3">
                            import { createApp } from "vue";
                            <br />
                            import { Vue3Mq } from "vue3-mq";
                            <br />
                            const app = createApp({});
                            <br />app.use(Vue3Mq);
                            <br />app.mount("#app");
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container py-4">
            <div class="row">
                <div class="col-12 col-xl-6">
                    <h3 class="mb-3">Reactive Object</h3>
                    <p class="mb-2">
                        Import
                        <span class="inline-code">mq</span> anywhere in your
                        application.
                    </p>
                    <p
                        class="mb-2"
                    >Respond instantly to changes in screen size, orientation or theme.</p>
                    <p class="mb-2">
                        In addition to the current breakpoint (
                        <span class="code">mq.current</span> ), you also have access to numerous booleans which allow you to factor the likes of
                        <span
                            class="code"
                        >mq.smPlus</span>,
                        <span class="code">mq.md</span> or
                        <span class="code">mq.lgMinus</span> into your calculations.
                    </p>
                    <p class="mb-2">
                        All new in version 3 is the ability to respond to changes in orientation or theme. Simply call:
                        <span
                            class="code"
                        >mq.orientation</span> or
                        <span class="code">mq.theme</span>. You can also check with booleans using
                        <span class="code">mq.isPortrait</span>,
                        <span class="code">mq.isLandscape</span>,
                        <span class="code">mq.isDark</span> or
                        <span class="code">mq.isLight</span>.
                    </p>
                </div>
                <div class="col-12 col-xl-6 d-flex flex-column align-items-end mt-4 mt-xl-0">
                    <MqObjectExample />
                </div>
            </div>
            <div class="row mt-5">
                <div
                    class="col-12 col-xl-6 d-flex flex-column align-items-start mt-4 mt-xl-0 order-2 order-xl-1"
                    style="min-height: 175px"
                >
                    <HelperComponentExample />
                </div>
                <div class="col-12 col-xl-6 order-1">
                    <h3 class="mb-3">Helper Component</h3>
                    <p class="mb-2">
                        For unparalleled ease-of-use, use the included
                        <span
                            class="code"
                        >&lt;mq-responsive&gt;</span>
                        component.
                    </p>
                    <p class="mb-2">
                        For more complex layouts, named slots allow you combine with transition
                        groups and render lists on the fly based on numerous factors.
                    </p>
                    <p class="mb-2">
                        Breakpoints, plus modifiers, minus modifiers and
                        ranges are all available in slots once you've
                        registered them with the plugin. You can even have
                        multiple slots render at the same time when using
                        the
                        <span
                            class="code"
                        >group</span> prop on the
                        element.
                    </p>
                    <p class="mb-2">
                        Additionally, you can use any
                        <span class="dark-blue">Transition</span> element
                        props on
                        <span
                            class="code"
                        >&lt;mq-responsive&gt;</span>. See the
                        <a
                            href="https://v3.vuejs.org/api/built-in-components.html#component"
                        >
                            <span class="orange">Vue 3 API Reference</span>
                        </a>
                        for full details.
                    </p>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-12 col-xl-6 order-1">
                    <h3 class="mb-3">Dynamic Breakpoints</h3>
                    <p class="mb-2">
                        Giving you instant control over your breakpoints,
                        Vue3-Mq now supports the dynamic updating of your
                        application's breakpoints.
                    </p>
                    <p class="mb-2">
                        At any time during runtime, you can now update
                        Vue3-Mq's responsive breakpoints via an easy-to-use
                        injected method.
                    </p>
                    <p class="mb-2">
                        You can change both the keys and the values
                        simultaneously
                    </p>
                </div>
                <div
                    class="col-12 col-xl-6 d-flex flex-column align-items-end mt-4 mt-xl-0 order-2 order-xl-1"
                    style="min-height: 175px"
                >
                    <DynamicBreakpointsExample />
                </div>
            </div>
        </div>
    </article>
</template>

<script setup>
import SvgIcon from "vue3-icon";
import { mdiPhoneRotateLandscape, mdiTooltipEditOutline, mdiThemeLightDark, mdiContentDuplicate, mdiViewArrayOutline, mdiApplicationCog, mdiAxisArrowInfo } from "@mdi/js";
import { useMq, MqResponsive } from "../plugin";
import MqObjectExample from "../partials/MqObjectExample.vue";
import HelperComponentExample from "../partials/HelperComponentExample.vue";
import DynamicBreakpointsExample from "../partials/DynamicBreakpointsExample.vue";

import { computed } from "vue";

const mq = useMq();

const imageStyle = computed(() => {
    return ["xs", "sm"].includes(mq.current)
        ? { position: "absolute", opacity: 0.1 }
        : {};
});

const log = (msg) => {
    console.log(msg);
}
</script>

<style lang="scss">
li {
    display: flex;
    align-items: center;
}

.vue3-icon {
    min-width: 24px;
}

p {
    line-height: 1.5;
}
</style>