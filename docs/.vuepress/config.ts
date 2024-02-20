import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme(),
  base: '/vue-press/',
  lang: 'zh-CN',
  title: 'Hello，这是我的第一个 VuePress 站点',
  pagePatterns: ['**/*.md', '!node_modules'],  
});
