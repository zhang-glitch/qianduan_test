module.exports = function (content) {
  // return content.replace(/console\.[a-z | A-Z | ( | )]/, "");
  // ? 表示非贪婪模式
  return content.replace(/console\.log\(.*\);?/g, "");
}

