import React from 'react';

export default {
  'zh-cn': {
    brand: {
      brandName: '查理的后花园',
      briefIntroduction: '科技、生活、我',
      buttons: [
        {
          text: '关于我',
          link: '/zh-cn/docs/me.html',
          type: 'primary',
        },
        {
          text: '查看我的github',
          link: 'https://github.com/chengtianyue',
          type: 'normal',
        },
      ],
    },
    introduction: {
      title: '关于本网站',
      desc: '本网站主要发布个人对于深度学习领域的一些小制作和见解，定期更新一些最新资讯。当然也会有平时生活中的所见所闻和小部分生活视频。',
      img: '/img/logo.jpg',
    },
    features: {
      title: '网站功能',
      list: [
        {
          img: '/img/feature_transpart.png',
          title: '深度学习',
          content: '以神经网络为主',
        },
        {
          img: '/img/feature_loadbalances.png',
          title: '机器学习',
          content: 'kaggle等网站的一些样例',
        },
        {
          img: '/img/feature_service.png',
          title: '数据分析',
          content: 'kaggle热门帖子汇总',
        },
        {
          img: '/img/feature_hogh.png',
          title: '视频剪辑',
          content: '记录生活',
        },
        {
          img: '/img/feature_runtime.png',
          title: '篮球',
          content: '比赛资讯，球星资讯等',
        },
        {
          img: '/img/feature_maintenance.png',
          title: '摄影作品',
          content: '日常所见',
        },
      ],
    },
    start: {
      title: '最新文章',
      desc: '关于我',
      img: '/img/quick_start.png',
      button: {
        text: '关于我',
        link: '/zh-cn/docs/demo1.html',
      },
    },
    users: {
      title: '照片展示',
      desc: <span>关于我的一些照片</span>,
      list: [
        '/img/homepage/1.jpg',
        '/img/homepage/2.jpg',
        '/img/homepage/3.jpg',
        '/img/homepage/4.jpg',
        '/img/homepage/5.jpg',
        '/img/homepage/6.jpg',
        '/img/homepage/7.jpg',
        '/img/homepage/8.jpg',
        '/img/homepage/9.jpg',
        '/img/homepage/10.jpg',
        '/img/homepage/11.jpg',
        '/img/homepage/12.jpg',
        '/img/homepage/13.jpg',
      ],
    },
  },
  'en-us': {
    brand: {
      brandName: 'Charlie Cheng\'s Backyard',
      briefIntroduction: 'AI, Daily Life, myself',
      buttons: [
        {
          text: 'About me',
          link: '/en-us/docs/demo1.html',
          type: 'primary',
        },
        {
          text: 'View on Github',
          link: 'https://github.com/chengtianyue',
          type: 'normal',
        },
      ],
    },
    introduction: {
      title: 'About this website',
      desc: 'The website is about my opinions and ideas toward AI and Computer Science. There are also some interesting things happening around me as well as my vlogs or videos.',
      img: '/img/logo.jpg',
    },
    features: {
      title: 'About this website',
      list: [
        {
          img: '/img/feature_transpart.png',
          title: 'Deep Learning',
          content: 'about Neural Network and its implementation',
        },
        {
          img: '/img/feature_loadbalances.png',
          title: 'Machine Learning',
          content: 'kernals on kaggle',
        },
        {
          img: '/img/feature_service.png',
          title: 'Data Analysing',
          content: 'examples and hot notebooks on kaggle',
        },
        {
          img: '/img/feature_hogh.png',
          title: 'Video clips or vlogs',
          content: 'record my life',
        },
        {
          img: '/img/feature_runtime.png',
          title: 'Sports/Basketball',
          content: 'latest news as well as infos of basketabll stars',
        },
        {
          img: '/img/feature_maintenance.png',
          title: 'Photography',
          content: 'Pictures in my life',
        }
      ]
    },
    start: {
      title: 'About me',
      desc: 'Why I built this site',
      img: '/img/quick_start.png',
      button: {
        text: 'READ MORE',
        link: '/en-us/docs/me.html',
      },
    },
    users: {
      title: 'Pictures',
      desc: <span>Some of my photos</span>,
      list: [
        '/img/homepage/1.jpg',
        '/img/homepage/2.jpg',
        '/img/homepage/3.jpg',
        '/img/homepage/4.jpg',
        '/img/homepage/5.jpg',
        '/img/homepage/6.jpg',
        '/img/homepage/7.jpg',
        '/img/homepage/8.jpg',
        '/img/homepage/9.jpg',
        '/img/homepage/10.jpg',
        '/img/homepage/11.jpg',
        '/img/homepage/12.jpg',
        '/img/homepage/13.jpg',
      ],
    },
  },
};
