// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://JiaXinTang-xiang.github.io',
  base: '/Blog/',
  trailingSlash: 'always',
  output: 'static'
  // ❌ 完全删除 experimental 配置块
});