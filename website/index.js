import html from 'html-template-tag'
import googleAnalytics from 'docute-google-analytics'
import Docute from '../src'
import prismLanguages from '../src/utils/prismLanguages'
import ColorBox from './components/ColorBox.vue'

const PatreonIcon = {
  template: html`
    <svg
      width="569px"
      height="546px"
      viewBox="0 0 569 546"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Patreon logo</title>
      <g>
        <circle
          fill="rgb(249, 104, 84)"
          id="Oval"
          cx="362.589996"
          cy="204.589996"
          r="204.589996"
        ></circle>
        <rect
          fill="rgb(5, 45, 73)"
          id="Rectangle"
          x="0"
          y="0"
          width="100"
          height="545.799988"
        ></rect>
      </g>
    </svg>
  `
}

new Docute({
  target: 'app',
  title: 'Docute',
  layout: 'wide',
  highlight: ['typescript', 'bash', 'json', 'markdown'],
  plugins: [
    process.env.NODE_ENV === 'production' && googleAnalytics('UA-54857209-11')
  ].filter(Boolean),
  editLinkBase: 'https://github.com/egoist/docute/tree/master/website/docs',
  editLinkText: 'Edit this page on GitHub',
  router: {
    mode: 'history'
  },
  darkThemeToggler: true,
  sourcePath: '/',
  componentMixins: [
    {
      data() {
        return {
          builtinLanguages: prismLanguages.builtin,
          deps: __DEPS__
        }
      },
      methods: {
        insertCustomFontsCSS() {
          const ID = 'custom-fonts-css'
          const existing = document.getElementById(ID)
          if (existing) {
            existing.parentNode.removeChild(existing)
          } else {
            const style = document.createElement('style')
            style.id = ID
            style.textContent = `
            /* Import desired font from Google fonts */
            @import url('https://fonts.googleapis.com/css?family=Lato');

            /* Apply the font to body (to override the default one) */
            body {
              font-family: Lato, sans-serif;
            }
            `
            document.head.appendChild(style)
          }
        }
      },
      components: {
        ColorBox
      }
    }
  ],
  // 주제별로 쓸 것이고 한 주제에 대한 버전은 필요 없어서 주석처리
  // versions: {
  //   'v4 (Latest)': {
  //     link: '/'
  //   },
  //   'v3': {
  //     link: '/'
  //   }
  // },
  nav: [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'GitHub',
      link: 'https://github.com/egoist/docute'
    }
  ],
  sidebar: [
    {
      title: 'Guide',
      links: [
        {
          title: 'Customization',
          link: '/guide/customization'
        },
        {
          title: 'Markdown Features',
          link: '/guide/markdown-features'
        },
        {
          title: 'Use Vue in Markdown',
          link: '/guide/use-vue-in-markdown'
        },
        {
          title: 'Internationalization',
          link: '/guide/internationalization'
        },
        {
          title: 'Plugin',
          link: '/guide/plugin'
        },
        {
          title: 'Deployment',
          link: '/guide/deployment'
        }
      ]
    },
    {
      title: 'Advanced',
      links: [
        {
          title: 'Use With Bundlers',
          link: '/guide/use-with-bundlers'
        },
        {
          title: 'Offline Support',
          link: '/guide/offline-support'
        }
      ]
    },
    {
      title: 'References',
      links: [
        {
          title: 'Options',
          link: '/options'
        },
        {
          title: 'Built-in Components',
          link: '/builtin-components'
        },
        {
          title: 'Plugin API',
          link: '/plugin-api'
        }
      ]
    },
    {
      title: 'Misc',
      links: [
        {
          title: 'Credits',
          link: '/credits'
        }
      ]
    }
  ],
  overrides: {
    '/': {
      language: 'English'
    },
    '/kr/': {
      language: 'Docute 한국어 문서',
      editLinkText: 'GitHub 에서 수정하기',
      nav: [
        {
          title: '홈',
          link: '/kr/'
        },
        {
          title: 'GitHub',
          link: 'https://github.com/egoist/docute'
        }
      ],
      sidebar: [
        {
          title: '가이드',
          links: [
            {
              title: '커스텀화',
              link: '/kr/guide/customization'
            },
            {
              title: 'Markdown 기능',
              link: '/kr/guide/markdown-features'
            },
            {
              title: 'Markdown 안에서 Vue 사용',
              link: '/kr/guide/use-vue-in-markdown'
            },
            {
              title: '다국어화',
              link: '/kr/guide/internationalization'
            },
            {
              title: '플러그인',
              link: '/kr/guide/plugin'
            },
            {
              title: '배포',
              link: '/kr/guide/deployment'
            }
          ]
        },
        {
          title: '진보',
          links: [
            {
              title: '번들러와 함께 사용',
              link: '/kr/guide/use-with-bundlers'
            },
            {
              title: '오프라인 지원',
              link: '/kr/guide/offline-support'
            }
          ]
        },
        {
          title: '참조',
          links: [
            {
              title: '옵션',
              link: '/kr/options'
            },
            {
              title: '내장 컴포넌트',
              link: '/kr/builtin-components'
            },
            {
              title: '플러그인 API',
              link: '/kr/plugin-api'
            }
          ]
        },
        {
          title: '기타',
          links: [
            {
              title: '크레딧',
              link: '/kr/credits'
            }
          ]
        }
      ]
    }
  },
  footer: `
  &copy; ${new Date().getFullYear()} Made by <a href="https://egoist.sh">EGOIST</a> While Watching Anime.
  `,
  banner: {
    template: html`
      <div class="docute-banner">
        <note :label="false"
          ><PatreonIcon width="16" height="16" style="position:relative;top:2px;margin-right:8px;" />Support Docute development by
          <a href="https://patreon.com/egoist" target="_blank"
            >becoming a patron or one-time donation <ExternalLinkIcon /></a
          >.</note
        >
      </div>
    `,
    components: {
      PatreonIcon
    }
  }
})

Vue.component('ReverseText', {
  props: {
    text: {
      type: String,
      required: true
    }
  },
  template: html`
    <div class="reverse-text">
      {{ reversedText }}
      <v-style>
      .reverse-text {
        border: 1px solid var(--border-color);
        padding: 20px;
        font-weight: bold;
        border-radius: 4px;
      }
      </v-style>
    </div>
  `,
  computed: {
    reversedText() {
      return this.text
        .split('')
        .reverse()
        .join('')
    }
  }
})

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
}
