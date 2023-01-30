import cheerio from 'cheerio'
import fs from 'fs'

interface Items {
  title: string | undefined
  imgUrl: string | undefined
}

export default class MemeAnalysis {
  private static instance: MemeAnalysis

  private constructor() {}

  static getInstance() {
    if (!MemeAnalysis.instance) {
      MemeAnalysis.instance = new MemeAnalysis()
    }
    return MemeAnalysis.instance
  }

  // 解析html
  private parseHtml(html: string): Items[] {
    const $ = cheerio.load(html)
    const imgs = $('.bqppdiv1')

    const dataJson: Items[] = []
    imgs.map((index, item) => {
      const desc = $(item).find('.lazy')
      const title = desc.attr('title')
      const imgUrl = desc.attr('data-original')
      dataJson.push({ title, imgUrl })
    })
    return dataJson
  }

  private readFile(filePath: string) {
    let data: Items[] = []
    if (fs.existsSync(filePath)) {
      // 判断是不是存在
      const dataJson = fs.readFileSync(filePath, 'utf-8') || '[]'

      data = JSON.parse(dataJson)
    }
    return data
  }

  private writeFile(newData: Items[], filePath: string) {
    const data = this.readFile(filePath)
    fs.writeFileSync(filePath, JSON.stringify([...data, ...newData]))
  }

  public analyze(html: string, filePath: string) {
    const dataJson = this.parseHtml(html)
    this.writeFile(dataJson, filePath)
  }
}
