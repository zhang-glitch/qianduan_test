"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cheerio_1 = __importDefault(require("cheerio"));
const fs_1 = __importDefault(require("fs"));
class MemeAnalysis {
    constructor() { }
    static getInstance() {
        if (!MemeAnalysis.instance) {
            MemeAnalysis.instance = new MemeAnalysis();
        }
        return MemeAnalysis.instance;
    }
    // 解析html
    parseHtml(html) {
        const $ = cheerio_1.default.load(html);
        const imgs = $('.bqppdiv1');
        const dataJson = [];
        imgs.map((index, item) => {
            const desc = $(item).find('.lazy');
            const title = desc.attr('title');
            const imgUrl = desc.attr('data-original');
            dataJson.push({ title, imgUrl });
        });
        return dataJson;
    }
    readFile(filePath) {
        let data = [];
        if (fs_1.default.existsSync(filePath)) {
            // 判断是不是存在
            const dataJson = fs_1.default.readFileSync(filePath, 'utf-8') || '[]';
            data = JSON.parse(dataJson);
        }
        return data;
    }
    writeFile(newData, filePath) {
        const data = this.readFile(filePath);
        fs_1.default.writeFileSync(filePath, JSON.stringify([...data, ...newData]));
    }
    analyze(html, filePath) {
        const dataJson = this.parseHtml(html);
        this.writeFile(dataJson, filePath);
    }
}
exports.default = MemeAnalysis;
