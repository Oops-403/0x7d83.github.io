import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'en-US',
    title: 'shlynn',
    titleTemplate: '开发笔记',
    // Description for the site. This will render as a <meta> tag in the page HTML.
    description: '前端开发博客笔记',

    // dark mode
    appearance: true, 

    // theme config
    themeConfig: {
        logo: './logo.png',
        // 左侧小标题
        siteTitle: '目录导航',
        // 右侧小标题
        outlineTitle: '当前页面导航',
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
                text: 'Web前端',
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
    // base: '/',
    base: '/frontend.github.io',

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
