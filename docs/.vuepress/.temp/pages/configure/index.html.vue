<template><h1 id="configuring-vue3-mq" tabindex="-1"><a class="header-anchor" href="#configuring-vue3-mq" aria-hidden="true">#</a> Configuring Vue3-Mq</h1>
<p>When installing Vue3-Mq, you can pass a config object with any of the options below:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vue3Mq<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">// config options here</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>preset</td>
<td>String</td>
<td>&quot;bootstrap5&quot;</td>
<td>Use breakpoints preset. Options are: bootstrap3, bootstrap4, vuetify, tailwind or devices.</td>
</tr>
<tr>
<td>breakpoints</td>
<td>Object</td>
<td>null</td>
<td>Custom breakpoints config. Object keys and values = breakpoint name and min-width respectively.</td>
</tr>
<tr>
<td>defaultBreakpoint</td>
<td>String</td>
<td>null</td>
<td>Screen breakpoint to use before browser window is available (i.e. in SSR)</td>
</tr>
<tr>
<td>defaultOrientation</td>
<td>String</td>
<td>null</td>
<td>Screen orientation to use before browser window is available.</td>
</tr>
<tr>
<td>defaultTheme</td>
<td>String</td>
<td>null</td>
<td>OS / browser theme to use before browser window is available.</td>
</tr>
</tbody>
</table>
</template>
