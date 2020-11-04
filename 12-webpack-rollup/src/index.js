// import { log } from "./logger";
// import messages from "./messages";
// import { name,version} from '../package.json'
// import { camelCase } from 'lodash-es'
// log(messages.hi);
// log(name);
// log(camelCase('hello rollup'));

import('./logger').then(({log})=>{log('code splitting ~ ~')})