import { defineUserConfig } from 'vuepress'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  lang: 'en-US',
  title: 'How-To: Dev Documentation',
  description: 'Web version of HOW TO doc',
  theme: defaultTheme({
    sidebar: [
      // NavbarItem
      {
        text: 'Intro',
        link: '/',
      },
      // NavbarGroup
      {
        text: 'SRAM Development',
        link: '/sram-development',
        children: [
          '/sram-development/sram-environments.md', 
          '/group/bar.md'
      ],
      },
      // string - page file path
      '/bar/README.md',
    ],
  }),
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
