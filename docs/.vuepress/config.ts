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
        children: [
          '/sram-development/sram-dev_dark-theme.md',
          '/sram-development/sram-environments.md', 
          '/sram-development/sram-dev_push-code_backend.md',
          '/sram-development/sram-dev_push-code_frontend.md',
          '/sram-development/sram-dev_slr2_mvc.md',
          '/sram-development/sram-dev_sram-ui_update.md',
      ],
      },
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
