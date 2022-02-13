<template><h1 id="v3-0-0-the-reimagining" tabindex="-1"><a class="header-anchor" href="#v3-0-0-the-reimagining" aria-hidden="true">#</a> v3.0.0: The Reimagining</h1>
<p>Vue 3 MQ was initially a fork of <a href="https://alexandrebonaventure.github.io/vue-mq" target="_blank" rel="noopener noreferrer">Alexandre Bonaventure's<ExternalLinkIcon/></a> Vue MQ project with a few coding changes to help it to work with Vue 3 complete with a couple of extra features sprinkled on top.</p>
<p>Version 3 is a complete reimagining of the plugin. The code has been re-written from the group up to ensure it takes full advantage of the power of Vue 3 and offers a simple, yet powerful way to respond to vast number of environments your application has to operate in.</p>
<p>See our <RouterLink to="/migration/from-version-2.html">v2-3 migration guide for full details</RouterLink>, but key changes are:</p>
<ul>
<li>Global objects and components have been dropped in favour of imports/injections. This helps your app's size and performance by reducing overhead where it's not needed.</li>
<li>Support for detecting orientation ( landscape / portrait ) and theme ( dark / light)</li>
<li>The helper is now and the mq prop has become target.</li>
<li>mq is no longer a responsive value, but a full-blown reactive object. Quickly react to breakpoints, orientation and theme with a wide range of boolean values. Rendering on a mobile could be as simple as <code>if (mq.mdMinus) { ... }</code></li>
<li>Choose from common presets (Bootstrap, Vuetify, Tailwind) to quickly get Vue3 MQ up and running with your UI of choice.</li>
<li>Full support for both Options API and Composition API builds of Vue3.</li>
</ul>
</template>
