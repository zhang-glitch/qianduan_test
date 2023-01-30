class LRU {
  constructor(capacity) {
    // 缓存的最大数量
    this.capacity = capacity
    // 缓存容器
    this.cache = new Map()
  }

  // 获取缓存的数据
  get(key) {
    // 先查找看其是否有
    if (this.cache.has(key)) {
      // 取出这个数据
      const cur = this.cache.get(key)
      // 删除这个数据
      this.cache.delete(key)
      // 将当前数据插入到最后。因为我们最后超出容量是删除最久未使用的元素
      this.cache.set(key, cur)
      return cur
    }
    return -1
  }

  // 设置缓存数据
  put(key, value) {
    if (this.cache.has(key)) {
      // 先删除，再将其添加到最后
      this.cache.delete(key)
    } else if (this.capacity < this.cache.size) {
      // 删除cache中的第一个元素
      this.cache.delete(this.cache.keys().next().value)
    }
    // 然后添加
    this.cache.set(key, value)
  }

  toString() {
    console.table(this.cache)
  }
}

const list = new LRU(4)
list.put(2, 2) // 入 2，剩余容量3
list.put(3, 3) // 入 3，剩余容量2
list.put(4, 4) // 入 4，剩余容量1
list.put(5, 5) // 入 5，已满    从头至尾         2-3-4-5
list.put(4, 4) // 入4，已存在 ——> 置队尾         2-3-5-4
list.put(1, 1) // 入1，不存在 ——> 删除队首 插入1  3-5-4-1
list.get(3) // 获取3，刷新3——> 置队尾         5-4-1-3
list.toString()
