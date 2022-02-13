import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("HomePageHero", defineAsyncComponent(() => import("/Users/admin/Code/vue3/vue3-mq/docs/.vuepress/components/HomePageHero.vue"))),
  app.component("MqObject", defineAsyncComponent(() => import("/Users/admin/Code/vue3/vue3-mq/docs/.vuepress/components/MqObject.vue")))
}
