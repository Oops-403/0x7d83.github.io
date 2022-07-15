import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'en-US',
    title: 'shlynn',
    titleTemplate: '开发笔记',
    // Description for the site. This will render as a <meta> tag in the page HTML.
    description: 'just a static site generator test',

    // dark mode
    appearance: true, 

    // theme config
    themeConfig: {
        logo: '',
        // 左侧小标题
        siteTitle: 'siteTitle',
        // 右侧小标题
        outlineTitle: 'outline-title',
        // 顶上导航
        nav: [
            {
                text: 'guide',
                link: '/guide'
            },
            {
                text: 'dropdown menu',
                items: [
                    {
                        text: 'Item A',
                        link: '/item-1'
                    }
                ]
            }
        ],
        // 左侧边栏
        sidebar: [
            {
                text: 'Guide111',
                items: [
                    {
                        text: '介绍',
                        link: './indroduction-1'
                    }
                ]
            }
        ],
        // 链接
        socialLinks: [
            {
                icon: 'github',
                link: ''
            },
            {
                icon: 'twitter',
                link: ''
            },
            {
                icon: 'discord',
                link: ''
            },
            {
                icon: 'instagram',
                link: ''
            },
            {
                icon: 'facebook',
                link: ''
            },
            {
                icon: 'youtube',
                link: ''
            }
        ],
        // 当前与sidebar冲突
        footer: {
            message: 'footer----message',
            copyright: 'Copyright © 2019-present'
        },
        editLink: {
            pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
            text: 'edit this page on github'
        },
        lastUpdatedText: '更新时间',
        carbonAds: {
            code: 'your carbo code',
            placement: 'your carbon placement'
        }
    },

    // the base URL the site will be deployed
    base: '/',

    /**
     * Use git commit to get the timestamp.
     * This option enables the default theme to display the page's last updated time.
     * You can customize the text via themeConfig.lastUpdatedText option.
     */
    lastUpdated: true,

    /**
     * Configre Markdown parser options.
     * VitePress uses Markdown-it as the parser, and Shiki to highlight language syntax.
     * Inside this option, you may pass various Markdown related options to fit your needs.
     */
    markdown: {
        theme: 'material-palenight',
        lineNumbers: true
        // anchor 
        // attrs
        // toc
        // config
    }
})
