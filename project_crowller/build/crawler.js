"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const superagent_1 = __importDefault(require("superagent"));
const path_1 = require("path");
const memeAnalysis_1 = __importDefault(require("./memeAnalysis"));
class Crawler {
    constructor(url, analyzer) {
        this.url = url;
        this.analyzer = analyzer;
        this.filePath = (0, path_1.resolve)(__dirname, '../data/data_json.json');
        this.initSpiderProcess();
    }
    initSpiderProcess() {
        return __awaiter(this, void 0, void 0, function* () {
            // 获取html
            const rawHtml = yield this.getRawHtml(this.url);
            // 分析标签，获取内容
            // const newData = this.parseHtml(res)
            // 读取文件中的内容, 这一步可以放在写文件里
            // const data = this.readFile();
            // 写入文件
            // this.writeFile(newData)
            this.analyzer.analyze(rawHtml, this.filePath);
        });
    }
    getRawHtml(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield superagent_1.default.get(url);
            return res.text;
        });
    }
}
const url = 'https://www.fabiaoqing.com/bqb/detail/id/54836.html';
const url2 = 'https://www.fabiaoqing.com/bqb/detail/id/54857.html';
const memeAnalysis = memeAnalysis_1.default.getInstance();
// const crawler = new Crawler(url, memeAnalysis)
const crawler2 = new Crawler(url2, memeAnalysis);
// console.log('hello zhupo')
//
// "dev": "ts-node ./src/crawler.ts",
// "build": "tsc -w",
// "start": "nodemon ./build/crawler.js"
