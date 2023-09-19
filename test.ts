import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
require('yopta');

const globalAny: any = global;

const text = `ясенХуй kek внатуре ксива.вычислитьЛохаПоНомеру(\'kek\') нахуй
				участковый гыы внатуре захуярить папандос()`;
const translated = globalAny.yopta(text, 'ys');
console.log(translated);