module.exports = function (content) {
  console.log("普通的loader函数=======05")
  return content;
};

module.exports.pitch = function (remainingRequest, precedingRequest, data) {
  console.log("pitch==========05");
};


// 先从左到右加载loader的pitch，然后再从右到左加载loader的普通函数