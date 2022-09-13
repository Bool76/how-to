import { defineUserConfig } from 'vuepress'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'

export default defineUserConfig({
  lang: 'en-US',
  title: 'How-To: Dev Documentation',
  description: 'Web version of HOW TO doc',
   plugins: [
    registerComponentsPlugin({
      // options
    //   componentsDir: path.resolve(__dirname, './components')
    components: {
        MyCounter: path.resolve(__dirname, '../components/MyCounter.vue'),
      },
    }),
  ],
})

// module.exports = {
//   theme: 'vuepress-theme-xx'
// }