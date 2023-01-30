

// 编码和解码的方式不同，解码会出现乱码。
const buf = Buffer.from("张昊", 'utf16le');

// 对于utf-8编码的汉字而言，一个汉字等于3字节，对于utf16le编码的汉字而言，一个汉字等于2字节
console.log(buf)

console.log(buf.toString("utf16le"))// 指定编码