<template><h1 id="v2-2-0-new-mqlayout-minus-and-range-prop-selectors" tabindex="-1"><a class="header-anchor" href="#v2-2-0-new-mqlayout-minus-and-range-prop-selectors" aria-hidden="true">#</a> v2.2.0: New <code>&lt;MqLayout&gt;</code> Minus and Range Prop Selectors</h1>
<p>When using the <code>&lt;mq-layout&gt;</code> component within your Vue 3 app, you'll now be able to use 2 additional selector types:</p>
<ul>
<li>Minus: <code>mq=&quot;lg-&quot;</code> - Will render on lg or below breakpoints... NEW</li>
<li>Range: <code>mq=&quot;xs-md&quot;</code> - Will render on any screen sizes between xs and md... NEW</li>
<li>Plus: <code>mq=&quot;md+&quot;</code> - Renders on any screen sizes above md</li>
<li>Single: <code>mq=&quot;lg&quot;</code> - Only renders on lg screen sizes</li>
<li>Array: <code>:mq=&quot;['xs','sm','xl']&quot;</code> - Renders on xs, sm and xl screen sizes</li>
</ul>
</template>
