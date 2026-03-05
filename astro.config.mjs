// @ts-check
import { defineConfig } from 'astro/config';

import { defineConfig } from 'astro/config';

const REPO_BASE = '/Blog/';  // 仓库名

export default defineConfig({
  site: 'https://JiaXinTang-xiang.github.io',  // GitHub Pages 地址
  base: REPO_BASE,
  trailingSlash: 'always',
  output: 'static',
});