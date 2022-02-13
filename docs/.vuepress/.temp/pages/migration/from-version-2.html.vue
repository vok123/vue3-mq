<template><h1 id="migrating-from-vue3-mq-version-2-to-3" tabindex="-1"><a class="header-anchor" href="#migrating-from-vue3-mq-version-2-to-3" aria-hidden="true">#</a> Migrating from Vue3 Mq version 2 to 3</h1>
<p>Vue3 MQ version 3 has been rewritten from the ground up to provide a plugin that is custom designed for both Options API and Composition API builds of Vue 3 and in line with best practices.</p>
<p>As such, there've been a fair few changes around here.</p>
<h2 id="installation-method" tabindex="-1"><a class="header-anchor" href="#installation-method" aria-hidden="true">#</a> Installation Method</h2>
<p>There is no longer a default export from the vue3-mq package. All exports are now named. Therefore, the installation process requires using destructured imports:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Vue3Mq <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue3-mq"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vue3Mq<span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="now-using-minimum-widths-for-breakpoints" tabindex="-1"><a class="header-anchor" href="#now-using-minimum-widths-for-breakpoints" aria-hidden="true">#</a> Now Using Minimum Widths for Breakpoints</h2>
<p>Customising your breakpoints in version 2 required setting your breakpoints using a key and the maximum width (in px) that the screen could be in order to be counted as that breakpoint. This tended to be be pretty confusing given it required the use of something along the lines of a <code>{ xxl: Infinity }</code> breakpoint. This was also something of an anti-pattern when compared to setting up common CSS frameworks since it was not &quot;mobile-first&quot;.</p>
<p>Version 3 requires using the <strong>minimum</strong> width you want a breakpoint to become active on. For example, a custom setup might go like so:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vue3Mq<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">breakpoints</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">xs</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token literal-property property">sm</span><span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span>
        <span class="token literal-property property">md</span><span class="token operator">:</span> <span class="token number">960</span><span class="token punctuation">,</span>
        <span class="token literal-property property">lg</span><span class="token operator">:</span> <span class="token number">1264</span><span class="token punctuation">,</span>
        <span class="token literal-property property">xl</span><span class="token operator">:</span> <span class="token number">1904</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>This means that from a screen width of 0-599, the <code>xs</code> breakpoint is active. From 600-959, the <code>sm</code> breakpoint is active and so on. The <code>xl</code> breakpoint will be active from 1904 pixels wide and above.</p>
<p>You should <strong>always</strong> have a breakpoint of <code>0</code> when declaring custom breakpoints.</p>
<h2 id="removal-of-global-properties-and-functions" tabindex="-1"><a class="header-anchor" href="#removal-of-global-properties-and-functions" aria-hidden="true">#</a> Removal of Global Properties and Functions</h2>
<p>Because of the performance and build-size benefits of tree-shaking, the Vue 3 ecosystem is increasingly embracing the practice of using local imports rather than global functions and properties. As such, $mq has been removed as a global property and must now be injected into components that require it.</p>
<CodeGroup>
  <CodeGroupItem title="Composition API">
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useMq <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue3-mq"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> mq <span class="token operator">=</span> <span class="token function">useMq</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> showElement <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> mq<span class="token punctuation">.</span>current <span class="token operator">===</span> <span class="token string">"md"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>  </CodeGroupItem>
  <CodeGroupItem title="Options API" active>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"mq"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">showElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>mq<span class="token punctuation">.</span>current <span class="token operator">===</span> <span class="token string">"md"</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>   
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>  </CodeGroupItem>
</CodeGroup>
<p>The same goes for the <code>updateBreakpoints</code> function. This should also be injected or imported into your component.</p>
<CodeGroup>
  <CodeGroupItem title="Composition API">
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> updateBreakpoints <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue3-mq"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">switchToVuetify</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">updateBreakpoints</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">preset</span><span class="token operator">:</span> <span class="token string">"vuetify"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>  </CodeGroupItem>
  <CodeGroupItem title="Options API" active>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"updateBreakpoints"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">switchToVuetify</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateBreakpoints</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">preset</span><span class="token operator">:</span> <span class="token string">"vuetify"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>   
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>  </CodeGroupItem>
</CodeGroup>
<h2 id="component-mqlayout-becomes-mqresponsive-and-goes-local" tabindex="-1"><a class="header-anchor" href="#component-mqlayout-becomes-mqresponsive-and-goes-local" aria-hidden="true">#</a> Component <code>&lt;MqLayout&gt;</code> Becomes <code>&lt;MqResponsive&gt;</code> and Goes Local</h2>
<p>The Vue3 Mq helper component has changed name from <code>&lt;mq-layout&gt;</code> to <code>&lt;mq-responsive&gt;</code> to better reflect its function.</p>
<p>Additionally, the prop <code>mq</code> – which designated the breakpoints on which the contents should render – is now called <code>target</code> to better fit alongside the new orientation / theme functionality.</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mq-responsive</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>md+<span class="token punctuation">"</span></span> <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>div<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    This will render on "md" and above screens
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mq-responsive</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>This helper component won't automatically be available globally in version 3. You must either make it a global component yourself, or import it locally when you want to use it inside a Vue component/application.</p>
<CodeGroup>
  <CodeGroupItem title="Local Import">
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> MqResponsive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue3-mq"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        MqResponsive
    <span class="token punctuation">}</span>   
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>  </CodeGroupItem>
  <CodeGroupItem title="Global Installation" active>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Vue3Mq<span class="token punctuation">,</span> MqResponsive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue3-mq"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vue3Mq<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'mq-responsive'</span><span class="token punctuation">,</span> MqResponsive<span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>  </CodeGroupItem>
</CodeGroup>
<h2 id="mq-changes-to-a-reactive-object" tabindex="-1"><a class="header-anchor" href="#mq-changes-to-a-reactive-object" aria-hidden="true">#</a> MQ Changes to a Reactive Object</h2>
<p>In version 2, calling <code>this.$mq</code> simply told you the current breakpoint. In version 3, injecting <code>mq</code> gives you access to a far more powerful reactive object that can instantly tell your app information about the browser environment. New boolean properties allow you to easily make calculations using the likes of <code>mq.lgPlus</code> or <code>mq.mdMinus</code>.</p>
<p>This is the current reactive data for your browser window based on the Bootstrap 5 preset:</p>
<MqObject /></template>
