import { defineConfig } from "vitepress";

export default defineConfig({
  ignoreDeadLinks: true,
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  lastUpdated: true,
  themeConfig: {
    logo: "/favicon.ico",
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Blog",
        items: [
          { text: "CSS", link: "/blog/css/anchor" },
          { text: "VUE", link: "/blog/vue/gtt" },
          { text: "微前端", link: "/blog/micro/introduce" },
          { text: "服务器", link: "/blog/server/website" },
          { text: "小程序", link: "/blog/vxmp/vxmp-register" },
          { text: "Python", link: "/blog/python/save-file-faster" },
          { text: "Java", link: "/blog/java/translate-name" },
          { text: "Onlyoffice", link: "/blog/onlyoffice/compile" },
        ],
      },
    ],
    sidebar: {
      "/blog/css/": [
        {
          text: "CSS",
          collapsable: false,
          collapsed: true,
          sidebarDepth: 2,
          items: [
            { text: "吸顶效果和锚点定位", link: "/blog/css/anchor" },
            { text: "Landscape animation", link: "/blog/css/animation" },
            { text: "伪元素实现菜单动画", link: "/blog/css/pseudo-elements" },
          ],
        },
      ],
      "/blog/vue/": [
        {
          text: "VUE",
          collapsable: false,
          sidebarDepth: 2,
          items: [
            { text: "如何使用 ECharts 绘制甘特图", link: "/blog/vue/gtt" },
            { text: "Vue3 父子、兄弟组件通信", link: "/blog/vue/vue3" },
            {
              text: "el-table 表头插入 tooltip 及更换背景色",
              link: "/blog/vue/slot-tooltip",
            },
            { text: "如何向日历中添加日程", link: "/blog/vue/calendar" },
            { text: "Vue 动态切换 PC 端与移动端", link: "/blog/vue/pc-ph" },
            {
              text: "Vue3 ：require is not defined",
              link: "/blog/vue/require-not-defined",
            },
            {
              text: "Vue2 自定义指令监听是否点击元素外部",
              link: "/blog/vue/directive-outside",
            },
            {
              text: "Vite+Vue3 加载速度优化",
              link: "/blog/vue/load-optimization",
            },
            { text: "Vue 实现 PDF 导出功能", link: "/blog/vue/pdf-export" },
            {
              text: "如何使用 GoGoCode 一键 Vue2 转换 Vue3",
              link: "/blog/vue/gogocode",
            },
            {
              text: "如何使用 VuePress 搭建博客网站并 Vercel 部署",
              link: "/blog/vue/vuepress",
            },
            { text: "Markdown 常用语法", link: "/blog/vue/markdown" },
          ],
        },
      ],
      "/blog/micro/": [
        {
          text: "微前端",
          collapsable: false,
          sidebarDepth: 2,
          items: [
            { text: "微前端介绍", link: "/blog/micro/introduce" },
            { text: "qiankun 微前端介绍及实现", link: "/blog/micro/qiankun" },
            {
              text: "wujie 微前端实现及三种通信方式介绍",
              link: "/blog/micro/wujie",
            },
          ],
        },
      ],
      "/blog/server/": [
        {
          text: "服务器",
          collapsable: false,
          sidebarDepth: 2,
          items: [
            { text: "如何搭建自己的网站", link: "/blog/server/website" },
            { text: "如何搭建自己的网站（二）", link: "/blog/server/website2" },
            { text: "开源接口", link: "/blog/server/interface" },
            { text: "Nginx 服务器 SSL 证书安装部署", link: "/blog/server/ssl" },
            { text: "Vite+Vue3+IIS 报错 404", link: "/blog/server/IIS-404" },
            {
              text: "如何在 ubuntu 上搭建 minio",
              link: "/blog/server/ubuntu-minio",
            },
            { text: "minio 实现 https 访问", link: "/blog/server/minio-https" },
            {
              text: "ubuntu 重启 MySQL 后无法远程连接",
              link: "/blog/server/mysql-connect",
            },
            {
              text: "WinSCP 脚本实现将 jar 包一键上传 Ubuntu 并 docker 部署",
              link: "/blog/server/winscp-script",
            },
            {
              text: "虚拟机 CentOS7 配置网络 ​",
              link: "/blog/server/virtual-machine-network",
            },
            { text: "ubuntu 服务器代理", link: "/blog/server/clash-for-linux" },
          ],
        },
      ],
      "/blog/vxmp/": [
        {
          text: "小程序",
          collapsable: false, // 左上角大标题“小程序”是否可展开
          sidebarDepth: 2,
          items: [
            { text: "如何注册微信小程序", link: "/blog/vxmp/vxmp-register" },
            { text: "如何开发微信小程序", link: "/blog/vxmp/vxmp-develop" },
            { text: "微信小程序随机头像与昵称", link: "/blog/vxmp/random" },
          ],
        },
      ],
      "/blog/python/": [
        {
          text: "Python",
          collapsable: false,
          sidebarDepth: 2,
          items: [
            {
              text: "Python 爬虫保存文件竟能这么快！",
              link: "/blog/python/save-file-faster",
            },
            {
              text: "Python 爬虫验证码识别",
              link: "/blog/python/spider-captcha",
            },
          ],
        },
      ],
      "/blog/java/": [
        {
          text: "Java",
          collapsable: false,
          sidebarDepth: 2,
          items: [
            {
              text: "一键翻译并下划线、中划线、驼峰命名",
              link: "/blog/java/translate-name",
            },
            {
              text: "SpringBoot + 对象存储（COS）",
              link: "/blog/java/springboot-cos",
            },
            { text: "SpringBoot + minio", link: "/blog/java/springboot-minio" },
          ],
        },
      ],
      "/blog/onlyoffice/": [
        {
          text: "Onlyoffice",
          collapsable: false,
          sidebarDepth: 2,
          items: [
            { text: "Onlyoffice 源码编译", link: "/blog/onlyoffice/compile" },
            {
              text: "Onlyoffice 编译参数配置",
              link: "/blog/onlyoffice/configure",
            },
          ],
        },
      ],
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2025-present Acheding",
    },
    // 社交链接
    socialLinks: [{ icon: "github", link: "https://github.com/acheding" }],

    // 功能配置
    editLink: {
      pattern:
        "https://github.com/acheding/vitepress-blog/edit/master/docs/:path",
      text: "在 GitHub 上编辑此页",
    },

    lastUpdated: {
      text: "上次更新",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },

    // 启用平滑滚动
    smoothScroll: true,
  },
  // Markdown 扩展配置
  markdown: {
    lineNumbers: true,
    config: (md) => {
      // 可以使用 markdown-it 插件
    },
  },

  // Vite 配置
  vite: {
    plugins: [
      // 添加 Vite 插件
    ],
  },
});
