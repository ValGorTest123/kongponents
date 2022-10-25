import { defineUserConfig, defaultTheme, viteBundler } from 'vuepress'
import { path } from '@vuepress/utils'
import { searchPlugin } from '@vuepress/plugin-search'
import autoprefixer from 'autoprefixer'

const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig({
  base: '/',

  head: [
    ['meta', { name: 'theme-color', content: '#1456cb' }],
    ['meta', { name: 'msapplication-TileColor', content: '#1456cb' }],
    ['meta', { name: 'application-name', content: 'Kongponents' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'Kongponents' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  ],

  alias: {
    // Alias src directory for @/components/{KongponentName} imports
    '@': path.resolve(__dirname, '../../src/'),
    '@mocks': path.resolve(__dirname, '../../mocks/'),
  },
  // when using vuepress-vite package, you can omit this field
  // because vite is the default bundler
  bundler: viteBundler({
    viteOptions: {
      css: {
        postcss: {
          plugins: [
            autoprefixer,
          ]
        },
      }
    },
    vuePluginOptions: {},
  }),

  // site config
  lang: 'en-US',
  title: 'Kongponents',
  description: 'Kong UI Components & Style Guide',

  // theme and its config
  theme: defaultTheme({
    repo: 'kong/kongponents',

    logo: '/img/kong-logomark.png',

    docsDir: 'docs',

    docsBranch: 'main',

    editLink: true,

    lastUpdated: true,

    navbar: [
      {
        text: `v8.x`,
        children: [
          {
            text: 'v7.x',
            link: 'https://legacy.kongponents.konghq.com',
          },
        ],
      },
    ],

    sidebar: [
      {
        text: 'Guide',
        children: [
          '/',
          '/guide/theming.md',
          {
            text: 'Styles',
            children: [
              '/style-guide/colors.md',
              '/style-guide/type.md',
              '/style-guide/forms.md',
              '/style-guide/utilities.md',
              '/style-guide/usage.md',
            ]
          },
          '/guide/vue-3-migration-guide.md',
        ]
      },
      {
        text: 'Kongponents',
        children: [
          {
            text: 'Components',
            children: [
              '/components/alert.md',
              '/components/badge.md',
              '/components/breadcrumbs.md',
              '/components/button.md',
              '/components/card.md',
              '/components/catalog.md',
              '/components/checkbox.md',
              '/components/codeblock.md',
              '/components/collapse.md',
              '/components/datetime-picker.md',
              '/components/dropdown-menu.md',
              '/components/empty-state.md',
              '/components/file-upload.md',
              '/components/icon.md',
              '/components/inline-edit.md',
              '/components/input.md',
              '/components/input-switch.md',
              '/components/label.md',
              '/components/menu.md',
              '/components/modal.md',
              '/components/modal-fullscreen.md',
              '/components/pagination.md',
              '/components/popover.md',
              '/components/prompt.md',
              '/components/radio.md',
              '/components/segmented-control.md',
              '/components/select.md',
              '/components/skeleton.md',
              '/components/slideout.md',
              '/components/stepper.md',
              '/components/table.md',
              '/components/tabs.md',
              '/components/textarea.md',
              '/components/toaster.md',
              '/components/tooltip.md',
              '/components/view-switcher.md',
            ]
          },
          {
            text: 'Renderless',
            children: [
              '/components/renderless/clipboard-provider.md',
              '/components/renderless/toggle.md',
              '/components/renderless/k-component.md',
            ]
          }
        ]
      },
      {
        text: 'Contributing',
        children: [
          '/contributing/getting-started.md',
          '/contributing/adding-icons-to-kicon.md',
        ]
      },
    ],

    contributors: false,

    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
    },
  }),

  markdown: {
    code: {
      lineNumbers: false,
    }
  },

  plugins: [
    searchPlugin({
      hotKeys: ['/'],
      locales: {
        '/': {
          placeholder: 'Search...',
        },
      },
    }),
    // Currently disabled until VuePress 2 support is added
    // ['sitemap', {
    //   hostname: 'https://kongponents.konghq.com'
    // }],
  ],

  port: 4022,
})