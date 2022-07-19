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

const sidebarConfig: DefaultTheme.Sidebar = [
    {
        text: 'Web前端',
        items: [
            {
                text: '介绍',
                link: './indroduction-1'
            }
        ]
    }
]

const socialLinksConfig: DefaultTheme.SocialLink[] = [
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
]

// 当设置了sidebar时footer不会出现
const footerConfig: DefaultTheme.Footer = {}

const editLinkConfig: DefaultTheme.EditLink = {
    pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    text: '一起来编辑吧'
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
    titleTemplate: '开发笔记',

    /**
     * Description for the site.
     * This will render as a <meta> tag in the page HTML.
     */
    description: '前端开发博客笔记',

    // dark mode
    appearance: true,

    themeConfig: {
        logo: './logo.png', // 左侧小标题icon
        siteTitle: '目录导航',// 左侧小标题
        outlineTitle: '当前页面导航',// 右侧小标题
        nav: navConfig, // 顶上导航菜单
        sidebar: sidebarConfig, // 左侧边栏
        socialLinks: socialLinksConfig,
        footer: footerConfig,
        editLink: editLinkConfig,
        lastUpdatedText: '更新时间',
        carbonAds: carbonAdsConfig
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
