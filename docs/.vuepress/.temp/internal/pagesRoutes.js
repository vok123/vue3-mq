import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"Home"},["/index.html","/README.md"]],
  ["v-2caf91c9","/dynamic/",{"title":"Dynamic Breakpoints"},["/dynamic/index.html","/dynamic/README.md"]],
  ["v-f856a638","/changelog/v2.1.0.html",{"title":"v2.1.0: Update Breakpoints"},["/changelog/v2.1.0","/changelog/v2.1.0.md"]],
  ["v-28944c7a","/changelog/v2.2.0.html",{"title":"v2.2.0: New <MqLayout> Minus and Range Prop Selectors"},["/changelog/v2.2.0","/changelog/v2.2.0.md"]],
  ["v-539706a2","/changelog/v2.3.0.html",{"title":"v2.3.0 Breakpoint slots for the MqLayout component"},["/changelog/v2.3.0","/changelog/v2.3.0.md"]],
  ["v-58b5907f","/changelog/v2.3.3.html",{"title":"v2.3.3 Bug Fixes"},["/changelog/v2.3.3","/changelog/v2.3.3.md"]],
  ["v-103cf124","/changelog/v3.0.0.html",{"title":"v3.0.0: The Reimagining"},["/changelog/v3.0.0","/changelog/v3.0.0.md"]],
  ["v-13a6a262","/changelog/v3.0.2.html",{"title":"Version 3.0.2"},["/changelog/v3.0.2","/changelog/v3.0.2.md"]],
  ["v-155b7b01","/changelog/v3.0.3.html",{"title":"Version 3.0.3"},["/changelog/v3.0.3","/changelog/v3.0.3.md"]],
  ["v-952a5aea","/component/",{"title":"MQ-Responsive Component"},["/component/index.html","/component/README.md"]],
  ["v-6eb18398","/component/props.html",{"title":"MQ Responsive Props"},["/component/props","/component/props.md"]],
  ["v-00fc36e2","/component/slots.html",{"title":"MqResponsive Group slots"},["/component/slots","/component/slots.md"]],
  ["v-08a5d2dc","/installation/",{"title":"Installation"},["/installation/index.html","/installation/README.md"]],
  ["v-9415e8b0","/installation/cdn.html",{"title":"Install Vue3-MQ using a CDN"},["/installation/cdn","/installation/cdn.md"]],
  ["v-5458b4e3","/installation/ssr.html",{"title":"Server Side Rendering"},["/installation/ssr","/installation/ssr.md"]],
  ["v-01b549c2","/configure/",{"title":"Configuring the Plugin"},["/configure/index.html","/configure/README.md"]],
  ["v-ce7b72b2","/configure/presets.html",{"title":"Available presets"},["/configure/presets","/configure/presets.md"]],
  ["v-7446a652","/faq/",{"title":"Frequently Asked Questions"},["/faq/index.html","/faq/README.md"]],
  ["v-25392160","/mq-object/",{"title":"The MQ Object"},["/mq-object/index.html","/mq-object/README.md"]],
  ["v-8399c236","/migration/from-version-2.html",{"title":"Migrating from Vue3 Mq version 2 to 3"},["/migration/from-version-2","/migration/from-version-2.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
