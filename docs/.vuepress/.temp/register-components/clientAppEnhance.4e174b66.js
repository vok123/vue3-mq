import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("HomePageHero", defineAsyncComponent(() => import("/Users/admin/Desktop/vuepress-test/docs/.vuepress/components/HomePageHero.vue")))
}
