import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
require('yopta');

const text = 'чётко';
const translated = global.yopta(text, 'ys');
console.log(translated);