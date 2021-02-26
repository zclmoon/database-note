module.exports = {
    title: '数据库笔记',
    description: '记录数据库相关的知识。',
    themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '笔记文档', link: '/guide/' },
          {
            text: '选择语言',
            ariaLabel: 'Language Menu',
            items: [
              { text: '中文', link: '/language/chinese/' },
              { text: 'English', link: '/language/english/' }
            ]
          },
          { text: '作者博客', link: 'https://zhuchengliang.com' },
        ],
        sidebar: [
            '/',
            '/guide',
            ['/page-b', 'Explicit link text']
          ],
        activeHeaderLinks: true,
        displayAllHeaders: true,
        sidebar: 'auto',
        searchMaxSuggestions: 20,
        // algolia: {
        //     apiKey: '<API_KEY>',
        //     indexName: '<INDEX_NAME>'
        //   },
        lastUpdated: 'Last Updated', // string | boolean
      }
  }