<template><h1 id="version-3-0-3" tabindex="-1"><a class="header-anchor" href="#version-3-0-3" aria-hidden="true">#</a> Version 3.0.3</h1>
<ul>
<li>Added Wordpress preset for breakpoints, which provides the following settings:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vue3Mq<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">preset</span><span class="token operator">:</span> <span class="token string">'wordpress'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><table>
<thead>
<tr>
<th>Name</th>
<th>Minimum width</th>
</tr>
</thead>
<tbody>
<tr>
<td>mobile</td>
<td>0</td>
</tr>
<tr>
<td>small</td>
<td>600</td>
</tr>
<tr>
<td>medium</td>
<td>782</td>
</tr>
<tr>
<td>large</td>
<td>960</td>
</tr>
<tr>
<td>xlarge</td>
<td>1080</td>
</tr>
<tr>
<td>wide</td>
<td>1280</td>
</tr>
<tr>
<td>huge</td>
<td>1440</td>
</tr>
</tbody>
</table>
</template>
