<template><HomePageHero />
<div class="hero" style="margin-bottom: 5rem;">
    <AutoLink
    class="action-button primary"
    :item="{ link: '/installation', text: 'Get Started' }"
    />
</div>
<CodeGroup>
  <CodeGroupItem title="NPM" active>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> vue3-mq
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>  </CodeGroupItem>
  <CodeGroupItem title="Yarn">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> vue3-mq
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>  </CodeGroupItem>
</CodeGroup>
</template>
