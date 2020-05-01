// 创建字典
function Dictionary(){
    var items = {};

    // 向字典中添加新元素
    this.set = function(key,value){
        items[key] = value;
    }
    // 通过使用键key来从字典中移除键key对应的数据值value
    this.delete = function(key){
        if(this.has(key)){
            delete items[key];
            return true;
        }
        return false;
    }
    // 如果某个键存在于这个字典中，则返回true，反之则返回false
    this.has = function(key){
        return key in items;
    }
    // 通过键key查找特定的数值value并返回
    this.get = function(key){
        return this.has(key) ? items[key] : undefined;
    }
    // 将这个字典中的所有元素全部删除
    this.clear = function(){
        items = {};
    }
    // 返回字典所包含元素的数量
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
    // 将字典所包含的所有键名以数组形式返回
    this.keys = function(){
        return Object.keys(items);
    }
    // 将字典苏包含的所有数值以数组形式返回
    this.values = function(){
        var values = [];
        for(let k in items){
            if(this.has(k)){
                values.push(items[k]);
            }
        }
        return values;
    }
    // 获取items
    this.getItems = function(){
        return items;
    }
}

var dictionary = new Dictionary();
dictionary.set('a','1');
dictionary.set('b','2');
dictionary.set('c','3');
console.log(dictionary.has('b'));//输出为true
console.log(dictionary.size());//输出为3
console.log(dictionary.keys());//输出为a,b,c
console.log(dictionary.values());//输出为1,2,3
console.log(dictionary.get('c'));//输出为3
dictionary.delete('a');
console.log(dictionary.keys());//输出为b,c
console.log(dictionary.values());//输出为2,3
console.log(dictionary.getItems());//输出为{b:'2',c:'3'}


// 创建散列表
function HashTable(){
    var table = [];

    // 散列函数(私有方法)
    var loseloseHashCode = function(key){
        var hash = 0;
        for(var i = 0; i < key.length; i ++){
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    }

    // 向散列表增加一个新的项
    this.put = function(key,value){
        var position = loseloseHashCode(key);
        console.log(position + '-' + key);
        table[position] = value;
    }
    // 根据键key从散列表中移除值value
    this.remove = function(key){
        table[loseloseHashCode(key)] = undefined;
    }
    // 返回根据键key检索到的值value
    this.get = function(key){
        return table[loseloseHashCode(key)];
    }
    // 打印散列表中的数据
    this.print = function(){
        for(var i = 0; i < table.length; i ++){
            if(table[i] != undefined){
                console.log(i + ':' + table[i]);
            }
        }
    }

}

var hash = new HashTable();
hash.put('a','1');
hash.put('b','2');
hash.put('c','3');
console.log(hash.get('a'));
console.log(hash.get('d'));
hash.remove('a');
console.log(hash.get('a'));

// 创建链表(不带头节点)
function LinkedList(){
    let Node = function(e){
        this.e = e;
        this.next = null;
    }
    let length = 0;
    let head = null;

    // 向链表尾部追加元素
    this.append = function(e){
        let node = new Node(e);
        let current;

        if(head == null){
            head = node;
        }else{
            current = head;
            // 遍历链表，直到找到最后一项
            while(current.next){
                current = current.next;
            }
            // 找到最后一项，将其next赋值为node，建立链接
            current.next = node;
        }
        length ++;
    }
    // 在指定位置插入元素
    this.insert = function(pos, e){
        // 检查指定位置是否越界
        if(pos > -1 && pos <= length){
            let node = new Node(e);
            let current = head;
            let previous;
            let index = 0;

            if(pos == 0){
                // 在第一个位置添加
                node.next = current;
                head = node;
            }else{
                while(index < pos){
                    previous = current;
                    current = current.next;
                    index ++;
                }
                node.next = current;
                previous.next = node;
            }
            length ++;
            return true;
        }else{
            // 指定位置越界
            return false;
        }
    }
    // 从链表的指定位置移除一个元素
    this.removeAt = function(pos){
        // 检查指定位置是否越界
        if(pos > -1 && pos < length){
            let current = head;
            let previous;
            let index = 0;

            if(pos == 0){
                //移除第一项
                head = current.next;
            }else{
                while(index<pos){
                    previous = current;
                    current = current.next;
                    index ++;
                }
                // 将previous与current的下一项链接起来，跳过current，从而移除它
                // todo: current元素会被丢弃在计算机内存中，等着被垃圾回收器清除。理解JavaScript垃圾回收器如何工作。
                previous.next = current.next;
            }
            length --;

            return current.e;
        }else{
            //指定位置越界
            return null;
        }
    }
    // 从链表中移除 值与指定值相同 的元素
    this.remove = function(e){
        let index = this.indexOf(e);
        return this.removeAt(index);
    }
    // 查找指定元素在链表中的位置，若不存在则返回-1
    this.indexOf = function(e){
        let current = head;
        let index = 0;

        while(current){
            if(e == current.e){
                return index;
            }
            index ++;
            current = current.next;
        }

        return -1;
    }
    // 检查链表是否为空
    this.isEmpty = function(){
        return length == 0;
    }
    // 获取链表长度
    this.size = function(){
        return length;
    }
    // 获取链表的首元结点（头指针指向的结点）
    this.getHead = function(){
        return head.e;
    }
    // 将LinkedList对象转换成一个字符串
    this.toString = function(){
        let current = head;
        let string = '';
        while(current){
            string += current.e + (current.next ? '-' : '');
            current = current.next;
        }
        return string;
    }

    this.print = function(){
        console.log(this.toString());
    }
}

// 创建散列表 - 分离链接法处理散列表中的冲突
function HashTable2(){
    var table = [];

    // 分离链接辅助类
    var ValuePair = function(key, value){
        this.key = key;
        this.value = value;

        this.toString = function(){
            return '[' + this.key + '-' + this.value + ']';
        }
    }
    // 散列函数(私有方法)
    var loseloseHashCode = function(key){
        var hash = 0;
        for(var i = 0; i < key.length; i ++){
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    }

    // 向散列表增加一个新的项
    this.put = function(key,value){
        var position = loseloseHashCode(key);
        
        if(table[position] == undefined){
            table[position] = new LinkedList();
        }
        table[position].append(new ValuePair(key,value));
    }
    // 根据键key从散列表中移除值value
    this.remove = function(key){
        var position = loseloseHashCode(key);
        if(table[position] != undefined){
            var current = table[position].getHead();
            while(current.next){
                if(current.e.key == key){
                    table[position].remove(current.e);
                    if(table[position].isEmpty()){
                        table[position] = undefined;
                    }
                    return true;
                }
                current = current.next;
            }
            if(current.e.key == key){
                table[position].remove(current.e);
                if(table[position].isEmpty()){
                    table[position] = undefined;
                }
                return true;
            }
        }
        return false;
    }
    // 返回根据键key检索到的值value
    this.get = function(key){
        var position = loseloseHashCode(key);

        if(table[position] != undefined){
            var current = table[position].getHead();
            while(current.next){
                if(current.e.key == key){
                    return current.e.value;
                }
                current = current.next;
            }

            if(current.e.key == key){
                return current.e.value;
            }
        }
        return undefined;
    }
    
}

// 创建散列表 - 线性探测法处理散列表中的冲突
function HashTable3(){
    var table = [];

    // 辅助类
    var ValuePair = function(key, value){
        this.key = key;
        this.value = value;

        this.toString = function(){
            return '[' + this.key + '-' + this.value + ']';
        }
    }
    // 散列函数(私有方法)
    var loseloseHashCode = function(key){
        var hash = 0;
        for(var i = 0; i < key.length; i ++){
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    }

    // 向散列表增加一个新的项
    this.put = function(key,value){
        var position = loseloseHashCode(key);
        
        if(table[position] == undefined){
            table[position] = new ValuePair(key, value);
        }else{
            var index = ++position;
            while( table[index] != undefined){
                index ++;
            }
            table[index] = new ValuePair(key, value);
        }
    }
    // 根据键key从散列表中移除值value
    this.remove = function(key){
        var position = loseloseHashCode(key);

        if(table[position] != undefined){
            if(table[position].key == key){
                table[position] = undefined;
                return true;
            }else{
                var index = ++position;
                while(table[index] == undefined || table[index].key != key){
                    index ++;
                }
                if(table[index].key == key){
                    table[index] = undefined;
                    return true;
                }
            }
        }
        return false;
    }
    // 返回根据键key检索到的值value
    this.get = function(key){
        var position = loseloseHashCode(key);

        if(table[position] != undefined){
            if(table[position].key == key){
                return table[position].value
            }else{
                var index = ++position;
                while(table[index] == undefined || table[index].key != key){
                    index ++;
                }
                if(table[index].key == key){
                    return table[index].value;
                }
            }
        }
        return undefined;
    }
    
}

// 创建更好的散列函数
// 初始化hash变量为一个质数（大多数实现都是用5381）
// 然后遍历key字符串，将hash与33相乘并和当前字符的ASCⅡ码相加
// 最后和一个比散列表大小要大的质数相除取余
var djb2HashCode = function(key){
    var hash = 5381;
    for(var i = 0; i < key.length; i ++){
        hash = hash * 33 + key.charCodeAt(i);
    }
    return hash % 1013;
}