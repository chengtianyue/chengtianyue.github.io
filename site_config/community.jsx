import React from 'react';

export default {
  'en-us': {
    barText: 'Community',
    events: {
      title: 'Latest Blogs',
      list: [
        {
          img: 'http://mmbiz.qpic.cn/mmbiz_jpg/TsKul87IC1sWkcl1K50LDDzwxe8mq7NbqgicQaoPKXJGib1Bl5pghlnXVLrK8lvfNzkQ6icL8Z0l3sSk95L4CasVQ/0?wx_fmt=jpeg',
          title: 'A quick Linux Startup (for especially High School Students)',
          content: 'A brief introduction to set up a Linux environment',
          dateStr: 'May 17th，2019',
          link: '/en-us/blog/linux-tutorial.html',
        },
      ]
    },
    contacts: {
      title: 'Contact Me',
      desc: 'Feel free to contact me via the following channel.',
      list: [
        {
          img: '/img/mailinglist.png',
          imgHover: '/img/mailinglist_hover.png',
          title: 'Email',
          link: 'mailto:tianyue.cheng2002@gmail.com'
        },
        {
          img: '/img/alibaba.png',
          imgHover: '/img/alibaba_hover.png',
          title: 'gitter',
          link: 'https://gitter.im/charliecheng-ga/community',
        },
        {
          img: '/img/wechat.png',
          imgHover: '/img/wechat_hover.png',
          title: 'Wechat Public Account',
          link: '/en-us/docs/wechat_public_qr.html'
        },
        {
          img: '/img/weibo.png',
          imgHover: '/img/weibo_hover.png',
          title: 'weibo',
          link: 'https://www.weibo.com/5853994036/profile?rightmod=1&wvr=6&mod=personinfo',
        },
      ],
    },
    contributorGuide: {
      title: 'Contributor Guide',
      desc: 'contact me if anything goes wrong',
      list: [
        {
          img: '/img/mailinglist.png',
          title: 'Email',
          content: <span>the fastest me to contact me</span>,
        },
        {
          img: '/img/issue.png',
          title: 'Issue',
          content: <span>send am issue on Github</span>,
        },
        {
          img: '/img/wechat.png',
          title: 'Wechat-public-account',
          content: <span>leave a note at my Wechat-public-account</span>,
        },
        {
          img: '/img/pullrequest.png',
          title: 'Pull Request',
          content: <span>pull request in github</span>,
        },
      ],
    },
    ecos: {
      title: 'My mini programs',
      list: [
        {
          title: 'Github urls',
          tags: [
            {
              text: 'Happy New Year (Wechat profile photo cropper)',
              link: 'https://github.com/chengtianyue/HappyNewYear-',
              bgColor: '#FF0000',
            },
            {
              text: 'Steve\'s Low AP 4 Generator',
              link: 'https://github.com/chengtianyue/Steve-s-lowAP4-generator',
              bgColor: '#7FFF00',
            },
          ],
        },
      ],
    },
  },
  'zh-cn': {
    barText: '社区',
    events: {
      title: '最新博客',
      list: [
        {
          img: 'http://mmbiz.qpic.cn/mmbiz_jpg/TsKul87IC1sWkcl1K50LDDzwxe8mq7NbqgicQaoPKXJGib1Bl5pghlnXVLrK8lvfNzkQ6icL8Z0l3sSk95L4CasVQ/0?wx_fmt=jpeg',
          title: '高中生都可以看懂的linux安装教程',
          content: 'Linux入门简单介绍',
          dateStr: '2019年3月17日',
          link: '/zh-cn/blog/linux-tutorial.html',
        },
      ]
    },
    contacts: {
      title: '联系我',
      desc: '请通过一下方式联系我',
      list: [
        {
          img: '/img/mailinglist.png',
          imgHover: '/img/mailinglist_hover.png',
          title: '邮件',
          link: 'mailto:tianyue.cheng2002@gmail.com'
        },
        {
          img: '/img/alibaba.png',
          imgHover: '/img/alibaba_hover.png',
          title: 'gitter',
          link: 'https://gitter.im/charliecheng-ga/community',
        },
        {
          img: '/img/wechat.png',
          imgHover: '/img/wechat_hover.png',
          title: '微信公众号',
          link: '/en-us/docs/wechat_public_qr.html'
        },
        {
          img: '/img/weibo.png',
          imgHover: '/img/weibo_hover.png',
          title: '微博',
          link: 'https://www.weibo.com/5853994036/profile?rightmod=1&wvr=6&mod=personinfo',
        },
      ],
    },
    contributorGuide: {
      title: '问题反馈',
      desc: '可以通过一下渠道向我反映问题',
      list: [
        {
          img: '/img/mailinglist.png',
          title: '邮件',
          content: <span>最快能够联系我的方式</span>,
        },
        {
          img: '/img/issue.png',
          title: '发issue',
          content: <span>在github上创建issue</span>,
        },
        {
          img: '/img/wechat.png',
          title: '微信公众号留言',
          content: <span>定期会去查看留言</span>,
        },
        {
          img: '/img/pullrequest.png',
          title: 'Pull Request',
          content: <span>github上发pull request</span>,
        },
      ],
    },
     ecos: {
      title: '我的小程序',
      list: [
        {
          title: 'Github链接',
          tags: [
            {
              text: '新年微信头像整合小程序',
              link: 'https://github.com/chengtianyue/HappyNewYear-',
              bgColor: '#FF0000',
            },
            {
              text: 'Low AP 4 作文生成器',
              link: 'https://github.com/chengtianyue/Steve-s-lowAP4-generator',
              bgColor: '#7FFF00',
            },
          ],
        },
      ],
    },
  },
};
