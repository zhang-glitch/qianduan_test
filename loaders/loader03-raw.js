module.exports = function (content) {
  console.log(content)
  // content是一个Buffer数据
  return content;
};
module.exports.raw = true; // 开启 Raw Loader