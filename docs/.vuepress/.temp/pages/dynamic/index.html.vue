<template><h1 id="dynamic-breakpoints" tabindex="-1"><a class="header-anchor" href="#dynamic-breakpoints" aria-hidden="true">#</a> Dynamic Breakpoints</h1>
<p>Need to change your breakpoint presets on the go? Then good news everyone, Vue3 Mq supports dynamically updating your application's breakpoints.</p>
<p>Simply import or inject the provided function and pass your new configuration object.</p>
<CodeGroup>
  <CodeGroupItem title="Composition API">
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> updateBreakpoints <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue3-mq"</span><span class="token punctuation">;</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">updateBreakpoints</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">breakpoints</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">mobile</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token literal-property property">tablet</span><span class="token operator">:</span> <span class="token number">576</span><span class="token punctuation">,</span>
            <span class="token literal-property property">desktop</span><span class="token operator">:</span> <span class="token number">1200</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>  </CodeGroupItem>
  <CodeGroupItem title="Options API" active>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"updateBreakpoints"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateBreakpoints</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">breakpoints</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">mobile</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token literal-property property">tablet</span><span class="token operator">:</span> <span class="token number">576</span><span class="token punctuation">,</span>
                <span class="token literal-property property">desktop</span><span class="token operator">:</span> <span class="token number">1200</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>   
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>  </CodeGroupItem>
</CodeGroup>
<p>Or you can switch to any of the <RouterLink to="/configure/presets.html">breakpoint presets</RouterLink> available.</p>
</template>
