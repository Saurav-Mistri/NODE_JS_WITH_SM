// const simple2 = require("./02_module_second.mjs")
// simple2()

// import {simpleMjs} from "./02_module_second.mjs"
// simpleMjs()
// import {simpleMjs, simpleMjs2 as simple} from "./02_module_second.mjs"
// simple()
// import simpleMjsDefault from "./02_module_second.mjs"
// simpleMjsDefault()

import * as simpleFunction from "./02_module_second.mjs"
console.log(simpleFunction.simpleMjs());