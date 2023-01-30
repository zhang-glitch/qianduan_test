console.log('index page');
class P1 {
    constructor(info){
        this.info = info;
    }
    // 这里为什么可以使用Person1[T]
    getInfoByKey(key) {
        return this.info[key];
    }
}
const p1 = new P1({
    name: 'zh',
    age: 24,
    gender: 'male'
});
const infoName = p1.getInfoByKey('name');
console.log(infoName);

//# sourceMappingURL=index.722e5cca.js.map
