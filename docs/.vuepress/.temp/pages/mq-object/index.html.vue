<template><h1 id="the-mq-object" tabindex="-1"><a class="header-anchor" href="#the-mq-object" aria-hidden="true">#</a> The MQ Object</h1>
<p>Vue3-Mq provides your app with a fully reactive object detailing the environment that it's operating within. This includes the screen size, orientation and OS/browser theme preference (i.e. dark mode).</p>
<MqObject />
<p>Notice that booleans are created for each of your provided breakpoints to allow you to easily respond to different size screens.</p>
<p>You can access this object inside your Vue 3 application like so:</p>
<CodeGroup>
  <CodeGroupItem title="Composition API">
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useMq <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue3-mq"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> mq <span class="token operator">=</span> <span class="token function">useMq</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>  </CodeGroupItem>
  <CodeGroupItem title="Options API" active>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"mq"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>  </CodeGroupItem>
</CodeGroup></template>
