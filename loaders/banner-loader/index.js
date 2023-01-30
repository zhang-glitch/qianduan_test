// module.exports = function(content) {

//   const options = this.getOptions();
//   const bannerText = `
//     /**
//      * 
//      * author: ${options.author}
//      * time: ${options.time}
//      * */
//   `

//   return bannerText + content;
// }

const schema = require("./schema.json");

module.exports = function (content) {
  // 获取loader的options，同时对options内容进行校验
  // schema是options的校验规则（符合 JSON schema 规则）
  const options = this.getOptions(schema);

  const prefix = `
    /*
    * Author: ${options.author || "zh"}
    */
  `;

  return `${prefix} \n ${content}`;
};