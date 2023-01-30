
const loaderUtils = require("loader-utils");

module.exports = function( content ) {
  // 命名文件，通过hash
  const interpolatedName = loaderUtils.interpolateName(
    this,
    "[hash].[ext]",
    {
      content
    }
  );

  // 输出文件
  this.emitFile(interpolatedName, content);
  return `module.exports = "${interpolatedName}"`
}

module.exports.raw = true;