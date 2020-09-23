// 全局的一些配置
export default {
  rootPath: '', // 发布到服务器的根目录，需以/开头但不能有尾/，如果只有/，请填写空字符串
  port: 8080, // 本地开发服务器的启动端口
  domain: '', // 站点部署域名，无需协议和path等
  defaultSearch: 'google', // 默认搜索引擎，baidu或者google
  defaultLanguage: 'en-us',
  'en-us': {
    pageMenu: [
      {
        key: 'home', // 用作顶部菜单的选中
        text: 'HOME',
        link: '/en-us/index.html',
      },
      {
        key: 'docs',
        text: 'DOCS',
        link: '/en-us/docs/me_en.html',
      },
      {
        key: 'blog',
        text: 'COVID-19',
        link: 'https://gcgvae.github.io/',
      },
      {
        key: 'community',
        text: 'COMMUNITY',
        link: '/en-us/community/index.html',
      },
    ],
    disclaimer: {
      title: 'Disclaimer',
      content: 'Please do not copy the content without permission',
    },
    documentation: {
      title: 'Documentation',
      list: [
        {
          text: 'Homepage',
          link: '/en-us/index.html',
        },
        {
          text: 'About me',
          link: '/en-us/docs/me.html',
        },
      ],
    },
    resources: {
      title: 'Resources',
      list: [
        {
          text: 'COVID-19',
          link: 'https://gcgvae.github.io/',
        },
        {
          text: 'Community',
          link: '/en-us/community/index.html',
        },
      ],
    },
    copyright: 'Copyright © 2020 Backyard of Charlie Cheng',
  },
  'zh-cn': {
    pageMenu: [
      {
        key: 'home',
        text: '首页',
        link: '/zh-cn/index.html',
      },
      {
        key: 'docs',
        text: '文档',
        link: '/zh-cn/docs/me.html',
      },
      {
        key: 'blog',
        text: '抗疫专栏',
        link: 'https://gcgvae.github.io/',
      },
      {
        key: 'community',
        text: '社区',
        link: '/zh-cn/community/index.html',
      },
    ],
    disclaimer: {
      title: '免责声明',
      content: '未经允许请勿转载',
    },
    documentation: {
      title: '文档',
      list: [
        {
          text: '主页',
          link: '/zh-cn/index.html',
        },
        {
          text: '关于我',
          link: '/zh-cn/docs/me.html',
        },
      ],
    },
    resources: {
      title: '资源',
      list: [
        {
          text: '抗疫专栏',
          link: 'https://gcgvae.github.io/',
        },
        {
          text: '社区',
          link: '/zh-cn/community/index.html',
        },
      ],
    },
    copyright: 'Copyright © 2020 查理的后花园',
  },
};
