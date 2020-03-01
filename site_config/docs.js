export default {
  'en-us': {
    sidemenu: [
      {
        title: 'Docs List',
        children: [
          {
            title: 'About me',
            link: '/en-us/docs/me.html',
          },
          {
            title: 'Resources',
            children: [
              {
                title: 'My Wechat-public-account',
                link: '/en-us/docs/wechat.html',
              },
            ],
          },
        ],
      },
    ],
    barText: 'Articles',
  },
  'zh-cn': {
    sidemenu: [
      {
        title: '文章列表',
        children: [
          {
            title: '关于我',
            link: '/zh-cn/docs/me.html',
          },
          {
            title: '资源中心',
            children: [
              {
                title: '我的微信公众号',
                link: '/zh-cn/docs/wechat.html',
              },
            ],
          },
        ],
      },
    ],
    barText: '文章',
  },
};
