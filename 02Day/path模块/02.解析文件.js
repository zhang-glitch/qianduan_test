/**
 * 
 * - dirname：获取文件的父文件夹； 
- basename：获取文件名； 
- extname：获取文件扩展名；
 */

const path = require("path")

const url = "c:/zh/study/nodejs/index.js";

console.log(path.dirname(url))// c:/zh/study/nodejs 
console.log(path.basename(url))// index.js
console.log(path.extname(url))//.js

