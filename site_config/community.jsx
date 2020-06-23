import React from 'react';

export default {
  'en-us': {
    barText: 'Community',
    events: {
      title: 'Latest Posts',
      list: [
        {
          img: '/blog/img/linux_tutorial.png',
          title: 'A quick Linux Startup (for especially High School Students)',
          content: 'A brief introduction to set up a Linux environment',
          dateStr: 'May 17th，2019',
          link: '/en-us/blog/linux-tutorial.html',
        },
        {
          img: '/docs/img/Beijing_WTown/1.jpg',
          title: 'Beijing WTown, Photography',
          dateStr: 'Jan 17th，2020',
          link: '/docs/en-us/Beijing WTown.html',
        },
        {
          img: '/docs/img/Seoul/1.jpg',
          title: 'Seoul Street Photography',
          dateStr: 'March 3rd，2020',
          link: '/docs/en-us/Seoul.html',
        },
        {
          img: '/docs/img/dark humor/1.jpg',
          title: 'Dark Humor: Stanford Rich Students, Trump and Iran, Boxing Grannies',
          dateStr: 'March 4th，2020',
          link: '/docs/en-us/Dark Humor.html',
        },
        {
          img: '/docs/img/ptm1/1.jpg',
          title: 'Beijing No.4 High School International Campus parents meeting introduction video ',
          dateStr: 'March 4th，2020',
          link: '/docs/en-us/Parents_meeting_video.html',
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
          link: '/en-us/docs/wechat.html'
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
          content: <span>send an issue on Github</span>,
        },
        {
          img: '/img/wechat.png',
          title: 'Wechat-public-account',
          content: <span>leave a note at my Wechat-public-account</span>,
        },
        {
          img: '/img/pullrequest.png',
          title: 'Leave a comment',
          content: <span>Leave a comment below</span>,
        },
      ],
    },
    ecos: {
      title: 'Programs I had been working on',
      list: [
        {
          title: 'some Github urls',
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
            {
              text: 'Polyhedron Dice Classificator',
              link: 'https://github.com/chengtianyue/PolyhedronDiceClassification_VGG16',
              bgColor: '#4169E1',
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
          img: '/blog/img/linux_tutorial.png',
          title: '高中生都可以看懂的linux安装教程',
          content: 'Linux入门简单介绍',
          dateStr: '2019年3月17日',
          link: '/zh-cn/blog/linux-tutorial.html',
        },
        {
          img: '/docs/img/Beijing_WTown/1.jpg',
          title: '北京古北水镇摄影',
          dateStr: '2020年1月17日',
          link: '/docs/zh-cn/Beijing WTown.html',
        },
        {
          img: '/docs/img/Seoul/1.jpg',
          title: '首尔街拍',
          dateStr: '2020年3月3日',
          link: '/docs/zh-cn/Seoul.html',
        },
        {
          img: '/docs/img/dark humor/1.jpg',
          title: '黑暗讽刺：坦福的有钱学生, 特朗普与伊朗, 拳击的老人们',
          dateStr: '2020年3月4日',
          link: '/docs/zh-cn/Dark Humor.html',
        },
        {
          img: '/docs/img/ptm1/1.jpg',
          title: '北京四中国际校区2021届家长会总结视频(3/07/2019)',
          dateStr: '2020年3月4日',
          link: '/docs/zh-cn/Parents_meeting_video.html',
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
          link: '/zh-cn/docs/wechat.html'
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
          title: '写留言',
          content: <span>页面下方的留言区（大陆用户暂未开放）</span>,
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
            {
              text: '多面体骰子分类器',
              link: 'https://github.com/chengtianyue/PolyhedronDiceClassification_VGG16',
              bgColor: '#4169E1',
            },
          ],
        },
      ],
    },
  },
};
