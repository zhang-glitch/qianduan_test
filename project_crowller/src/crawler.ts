import superAgent from 'superagent'
import { resolve } from 'path'
import MemeAnalysis from './memeAnalysis'

interface Items {
  title: string | undefined
  imgUrl: string | undefined
}

class Crawler {
  private filePath = resolve(__dirname, '../data/data_json.json')
  constructor(private url: string, private analyzer: MemeAnalysis) {
    this.initSpiderProcess()
  }
  private async initSpiderProcess() {
    // 获取html
    const rawHtml = await this.getRawHtml(this.url)
    // 分析标签，获取内容
    // const newData = this.parseHtml(res)
    // 读取文件中的内容, 这一步可以放在写文件里
    // const data = this.readFile();
    // 写入文件
    // this.writeFile(newData)
    this.analyzer.analyze(rawHtml, this.filePath)
  }
  async getRawHtml(url: string) {
    const res = await superAgent.get(url)
    return res.text
  }
}

const url = 'https://www.fabiaoqing.com/bqb/detail/id/54836.html'
const url2 = 'https://www.fabiaoqing.com/bqb/detail/id/54857.html'

const memeAnalysis = MemeAnalysis.getInstance()
// const crawler = new Crawler(url, memeAnalysis)
const crawler2 = new Crawler(url2, memeAnalysis)
// console.log('hello zhupo')
//
// "dev": "ts-node ./src/crawler.ts",
// "build": "tsc -w",
// "start": "nodemon ./build/crawler.js"
