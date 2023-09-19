import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
require('yopta');

const text = `
ассо (жЫ data, deep, require есть) внатурепизже жЫ
    отвечаю data нахуй
есть
`;
const translated = global.yopta(text, 'ys');
console.log(translated);