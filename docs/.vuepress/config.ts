import { defineUserConfig } from 'vuepress'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Docs',
  description: 'Just playing around',
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