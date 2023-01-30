module.exports = function (content, map, meta) {
  const callback = this.async();
  // 异步操作只能放在异步的callback调用
  setTimeout(() => {
    console.log("loader-async 异步loader")
    callback(null, content, map, meta);
  }, 1000);
};
