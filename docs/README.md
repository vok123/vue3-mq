---
title: Home
home: true
heroText: null
tagline: null
footer: MIT Licensed | Copyright © 2020-2022 Craig Riley
---

<HomePageHero />

<div class="hero flex justify-between" style="margin-bottom: 5rem;">
    <AutoLink
    class="action-button primary"
    :item="{ link: '/installation', text: 'Get Started' }"
    />
    <AutoLink class="action-button secondary" :item="{link: 'https://github.com/sponsors/craigrileyuk/', text: 'Sponsor' }" />
</div>


<CodeGroup>
  <CodeGroupItem title="NPM" active>

```bash
npm install vue3-mq
```

  </CodeGroupItem>

  <CodeGroupItem title="Yarn">
  
```bash
yarn add vue3-mq
```

  </CodeGroupItem>
</CodeGroup>

