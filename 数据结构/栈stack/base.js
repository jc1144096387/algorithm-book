// 创建栈
function Stack(){
    var _items = [];
    // 向栈中添加元素
    this.push = function(e){
        _items.push(e);
    }
    // 从栈中移除元素
    this.pop = function(){
        return _items.pop();
    }
    // 查看栈顶元素
    this.peek = function(){
        return _items[_items.length-1];
    }
    // 检查栈是否为空
    this.isEmpty = function(){
        return _items.length == 0;
    }
    // 获得栈的长度
    this.size = function(){
        return _items.length;
    }
    // 清空栈元素
    this.clear = function(){
        _items = [];
    }
    // 打印栈元素
    this.print = function(){
        console.log(_items.toString());
    }
}

// 多个示例共用_items
var Stack1 = (function(){
    var _items = [];
    return function(){
        // 向栈中添加元素
        this.push = function(e){
            _items.push(e);
        }
        // 从栈中移除元素
        this.pop = function(){
            return _items.pop();
        }
        // 查看栈顶元素
        this.peek = function(){
            return _items[_items.length-1];
        }
        // 检查栈是否为空
        this.isEmpty = function(){
            return _items.length == 0;
        }
        // 获得栈的长度
        this.size = function(){
            return _items.length;
        }
        // 清空栈元素
        this.clear = function(){
            _items = [];
        }
        // 打印栈元素
        this.print = function(){
            console.log(_items.toString());
        }
    }
})();

// let items = [];
let stack = new Stack1();
console.log(stack.isEmpty());//输出为true
stack.push(5);
stack.push(8);
console.log(stack.peek());//输出为8
stack.push(11);
console.log(stack.size());//输出为3
console.log(stack.isEmpty());//输出为false
stack.push(15);
stack.print();//输出为[5,8,11,15]
stack.pop();
stack.pop();
console.log(stack.size());//输出为2
stack.print();//输出为[5,8]

function baseConverter(decNumber, base){
    var remStack = new Stack1();
    remStack.clear();
    var rem;
    var baseString = '';
    var digits = '0123456789ABCDEF';

    while(decNumber>0){
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber/base);
    }
    while(!remStack.isEmpty()){
        baseString += digits[remStack.pop()];
    }

    return baseString;
}

console.log(baseConverter(10,2));
console.log(baseConverter(100345,8));
console.log(baseConverter(100345,16));