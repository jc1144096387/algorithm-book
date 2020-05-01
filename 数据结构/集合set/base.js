// 创建集合
function Set(){
    let items = {};

    // 向集合添加一个新的项
    this.add = function(value){
        if(!this.has(value)){
            items[value] = value;
            return true;
        }
        return false;
    }
    // 从集合中移除一个值
    this.remove = function(value){
        if(this.has(value)){
            delete items[value];
            return true;
        }
        return false;
    }
    // 判断值是否在集合中
    this.has = function(value){
        // todo: in、hasOwnProperty...的区别
        // return value in items;
        return items.hasOwnProperty(value);
    }
    // 移除集合中的所有项
    this.clear = function(){
        items = {};
    }
    // 返回集合所包含元素的数量
    this.size = function(){
        // return Object.keys(items).length;
        let count = 0;
        for(let key in items){
            if(items.hasOwnProperty(key)){
                count ++;
            }
        }
        return count;
    }
    // 返回一个包含集合中所有值的数组
    this.values = function(){
        let values = [];
        for(let key in items){
            if(items.hasOwnProperty(key)){
                values.push(items[key]);
            }
        }
        return values;
    }

    // 并集
    this.union = function(otherSet){
        let unionSet = new Set();

        let values = this.values();
        for(let i = 0; i < values.length; i ++){
            unionSet.add(values[i]);
        }
        values = otherSet.values();
        for(let i = 0; i < values.length; i ++){
            unionSet.add(values[i]);
        }
        return unionSet;
    }
    // 交集
    this.intersection = function(otherSet){
        let intersectionSet = new Set();
        let values = this.values();
        for(let i = 0; i < values.length; i ++){
            if(otherSet.has(values[i])){
                intersectionSet.add(values[i]);
            }
        }
        return intersectionSet;
    }
    // 差集
    this.difference = function(otherSet){
        let differenceSet = new Set();
        let values = this.values();
        for(let i = 0; i < values.length; i ++){
            if(!otherSet.has(values[i])){
                differenceSet.add(values[i]);
            }
        }
        return differenceSet;
    }
    // 子集
    this.subset = function(otherSet){
        if(this.size() > otherSet.size){
            return false;
        }else{
            let values = this.values();
            for(let i = 0; i < values.length; i ++){
                if(!otherSet.has(values[i])){
                    return false;
                }
            }
            return true;
        }
    }
}

let set = new Set();

set.add(1);
console.log(set.values());
console.log(set.has(1));
console.log(set.size());
set.add(2);
console.log(set.values());
console.log(set.has(2));
console.log(set.size());
set.remove(1);
console.log(set.values());
set.remove(2);
console.log(set.values());

let set1 = new Set();
let set2 = new Set();
set1.add(1);
set1.add(2);
set1.add(3);
set2.add(2);
set2.add(3);
set2.add(4);
let unionSet = set1.union(set2);
console.log(unionSet.values());
let intersectionSet = set1.intersection(set2);
console.log(intersectionSet.values());
let differenceSet = set1.difference(set2);
console.log(differenceSet.values());

console.log(set1.subset(set2));
set2.add(1);
console.log(set1.subset(set2));

// todo: ES6-Set类实现细节