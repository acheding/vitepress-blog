import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Lominosity Blog",
  ignoreDeadLinks: true,
  base: process.env.VITE_BASE_PATH || "/",
  themeConfig: {
    logo: "/favicon.ico",
    nav: [
      { text: "Home", link: "/" },
      {
        text: "前端",
        items: [
          { text: "CSS", link: "/css/anchor" },
          { text: "VUE", link: "/vue/gtt" },
          { text: "微前端", link: "/micro/introduce" },
        ],
      },
      {
        text: "后端",
        items: [
          { text: "Java", link: "/java/translate-name" },
          { text: "Python", link: "/python/save-file-faster" },
          { text: "服务器", link: "/server/website" },
        ],
      },

      {
        text: "服务器",
        link: "/server/website",
      },
      {
        text: "小程序",
        link: "/vxmp/vxmp-register",
      },
      {
        text: "其他",
        items: [{ text: "Onlyoffice", link: "/onlyoffice/compile" }],
      },
    ],
    sidebar: {
      "/css/": [
        {
          text: "CSS",
          collapsable: false,
          collapsed: true,
          items: [
            { text: "吸顶效果和锚点定位", link: "/css/anchor" },
            { text: "Landscape animation", link: "/css/animation" },
            { text: "伪元素实现菜单动画", link: "/css/pseudo-elements" },
          ],
        },
      ],
      "/vue/": [
        {
          text: "VUE",
          collapsable: false,
          items: [
            { text: "如何使用 ECharts 绘制甘特图", link: "/vue/gtt" },
            { text: "Vue3 父子、兄弟组件通信", link: "/vue/vue3" },
            {
              text: "el-table 表头插入 tooltip 及更换背景色",
              link: "/vue/slot-tooltip",
            },
            { text: "如何向日历中添加日程", link: "/vue/calendar" },
            { text: "Vue 动态切换 PC 端与移动端", link: "/vue/pc-ph" },
            {
              text: "Vue3 ：require is not defined",
              link: "/vue/require-not-defined",
            },
            {
              text: "Vue2 自定义指令监听是否点击元素外部",
              link: "/vue/directive-outside",
            },
            {
              text: "Vite+Vue3 加载速度优化",
              link: "/vue/load-optimization",
            },
            { text: "Vue 实现 PDF 导出功能", link: "/vue/pdf-export" },
            {
              text: "如何使用 GoGoCode 一键 Vue2 转换 Vue3",
              link: "/vue/gogocode",
            },
            {
              text: "如何使用 VuePress 搭建博客网站并 Vercel 部署",
              link: "/vue/vuepress",
            },
            { text: "Markdown 常用语法", link: "/vue/markdown" },
          ],
        },
      ],
      "/micro/": [
        {
          text: "微前端",
          collapsable: false,
          items: [
            { text: "微前端介绍", link: "/micro/introduce" },
            { text: "乾坤（qiankun）", link: "/micro/qiankun" },
            {
              text: "无界（wujie）",
              link: "/micro/wujie",
            },
          ],
        },
      ],
      "/server/": [
        {
          text: "服务器",
          collapsable: false,
          items: [
            { text: "如何搭建自己的网站", link: "/server/website" },
            { text: "如何搭建自己的网站（二）", link: "/server/website2" },
            { text: "开源接口", link: "/server/interface" },
            { text: "Nginx 服务器 SSL 证书安装部署", link: "/server/ssl" },
            { text: "Vite+Vue3+IIS 报错 404", link: "/server/IIS-404" },
            {
              text: "如何在 Ubuntu 上搭建 minio",
              link: "/server/ubuntu-minio",
            },
            { text: "minio 实现 https 访问", link: "/server/minio-https" },
            {
              text: "Ubuntu 重启 MySQL 后无法远程连接",
              link: "/server/mysql-connect",
            },
            {
              text: "WinSCP 脚本实现将 jar 包一键上传 Ubuntu 并 docker 部署",
              link: "/server/winscp-script",
            },
            {
              text: "虚拟机 CentOS7 配置网络 ​",
              link: "/server/virtual-machine-network",
            },
            { text: "Ubuntu 服务器代理", link: "/server/clash-for-linux" },
          ],
        },
      ],
      "/vxmp/": [
        {
          text: "小程序",
          collapsable: false, // 左上角大标题“小程序”是否可展开
          items: [
            { text: "如何注册微信小程序", link: "/vxmp/vxmp-register" },
            { text: "如何开发微信小程序", link: "/vxmp/vxmp-develop" },
            { text: "微信小程序随机头像与昵称", link: "/vxmp/random" },
          ],
        },
      ],
      "/python/": [
        {
          text: "Python",
          collapsable: false,
          items: [
            {
              text: "Python 爬虫保存文件竟能这么快！",
              link: "/python/save-file-faster",
            },
            {
              text: "Python 爬虫验证码识别",
              link: "/python/spider-captcha",
            },
          ],
        },
      ],
      "/java/": [
        {
          text: "Java",
          collapsable: false,
          items: [
            {
              text: "一键翻译并下划线、中划线、驼峰命名",
              link: "/java/translate-name",
            },
            {
              text: "SpringBoot + 对象存储（COS）",
              link: "/java/springboot-cos",
            },
            { text: "SpringBoot + minio", link: "/java/springboot-minio" },
          ],
        },
      ],
      "/onlyoffice/": [
        {
          text: "Onlyoffice",
          collapsable: false,
          items: [
            { text: "Onlyoffice 源码编译", link: "/onlyoffice/compile" },
            {
              text: "Onlyoffice 编译参数配置",
              link: "/onlyoffice/configure",
            },
          ],
        },
      ],
    },

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2025-present Acheding",
    },

    socialLinks: [{ icon: "github", link: "https://github.com/acheding" }],

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
    // outlineTitle: "本页目录",
    outline: {
      level: [2, 4],
      label: "本页目录",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
  },
});
