# 字典与散列表
集合、字典和散列表都可以用来存储不重复的值。集合中存储的是元素值，而字典和散列表以键值对[key,value]的形式来存储数据。           
字典Dictionary也称作映射，存储[key,value]形式的数据，并用key来查询value。           
散列表HashTable或HashMap，是Dictionary类的一种散列实现方式。散列表在查找数据时使用了散列算法，不必遍历整个数据结构，优化了检索。                     

base.js中的Dictionary类是模拟ES6的Map类实现的。

## 字典与散列表基础（base.js）
- 字典
- 散列表
    + 创建散列表
    + 处理散列表中的冲突
        - 分离链接
        - 线性探查
    + 创建更好的散列函数
- ES6-Map类 todo
- ES6-WeakMap类和WeakSet类 todo
