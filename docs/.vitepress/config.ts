import { defineConfig, DefaultTheme, MarkdownOptions } from 'vitepress'

const navConfig: DefaultTheme.NavItem[] = [
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
]

const sidebarConfig: DefaultTheme.Sidebar = {
    '/': [
        {
            text: '目录一',
            items: [
                {
                    text: 'web前端',
                    link: '/front-end/demo'
                }
            ]
        }
    ],
    '/front-end/': [
        {
            text: 'Web前端',
            collapsible: true,
            collapsed: false,
            items: [
                {
                    text: '介绍',
                    link: '/front-end/demo',
                }
            ]
        },
        {
            text: '前端项目优化',
            items: [
                {
                    text: '介绍',
                    link: '/front-end/demo'
                }
            ]
        }
    ],
    '/back-end/': [
        {
            text: 'Web前端',
            collapsible: true,
            items: [
                {
                    text: '介绍',
                    link: '/front-end/demo',
                }
            ]
        },
        {
            text: '前端项目优化',
            items: [
                {
                    text: '介绍',
                    link: '/front-end/demo'
                }
            ]
        }
    ],
    '/blockchain/': [
        {
            text: '什么是区块链',
            collapsible: true,
            items: [
                {
                    text: '介绍',
                    link: '/front-end/demo',
                }
            ]
        },
        {
            text: 'solidity',
            items: [
                {
                    text: '介绍',
                    link: '/front-end/demo'
                }
            ]
        }
    ]
}

const socialLinksConfig: DefaultTheme.SocialLink[] = [
    {
        icon: 'github',
        link: 'https://github.com/shlyn/shlyn.github.io'
    }
]

const editLinkConfig: DefaultTheme.EditLink = {
    pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    text: '一起来编辑吧'
}

// 当设置了sidebar时footer不会出现
const footerConfig: DefaultTheme.Footer = {
    message: 'Released under the MIT license',
    copyright: 'copyright 2022 shlyn'
}

// 广告
const carbonAdsConfig: DefaultTheme.CarbonAdsOptions = {
    code: 'your carbo code',
    placement: 'your carbon placement'
}

/**
 * Configre Markdown parser options.
 * VitePress uses Markdown-it as the parser, and Shiki to highlight language syntax.
 * Inside this option, you may pass various Markdown related options to fit your needs.
 */
const markdownConfig: MarkdownOptions = {
    theme: 'material-palenight',
    lineNumbers: true
    // anchor 
    // attrs
    // toc
    // config
}

export default defineConfig({
    lang: 'en-US',
    title: 'shlynn',
    titleTemplate: '前端开发笔记',

    /**
     * Description for the site.
     * This will render as a <meta> tag in the page HTML.
     */
    description: '前端开发笔记',

    // dark mode
    appearance: true,

    themeConfig: {
        logo: './logo.png', // 左侧小标题icon
        siteTitle: '目录导航',// 左侧小标题
        outlineTitle: 'outlines',// 右侧小标题
        nav: navConfig, // 顶上导航菜单
        sidebar: sidebarConfig, // 左侧边栏
        socialLinks: socialLinksConfig,
        // footer: footerConfig,
        editLink: editLinkConfig,
        lastUpdatedText: '更新时间'
        // carbonAds: carbonAdsConfig
    },

    // the base URL the site will be deployed default '/'
    // base: '/frontend.github.io',

    /**
     * Use git commit to get the timestamp.
     * This option enables the default theme to display the page's last updated time.
     * You can customize the text via themeConfig.lastUpdatedText option.
     */
    lastUpdated: true,

    markdown: markdownConfig
})
