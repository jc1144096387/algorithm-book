// 创建和初始化数组
var daysOfWeek = new Array();
var daysOfWeek = new Array(7);//指定数组长度
var daysOfWeek = new Array('Sunday','Monday');//创建并初始化
console.log(daysOfWeek);
// 以上通过new关键字来创建数组的方式并不是最好的方式，可以直接用中括号[]来创建
// todo: 原因
var daysOfWeek = [];
var daysOfWeek = ['Sunday','Monday'];
console.log(daysOfWeek);

// 访问元素和迭代数组
// 可以通过数组的length属性来获取数组的长度
for(var i = 0; i < daysOfWeek.length; i ++){
    console.log(daysOfWeek[i]);
}

// 添加元素
// 直接添加
daysOfWeek[2] = 'Tuesday';
console.log("直接添加："+daysOfWeek);
// push方法把元素添加到数组末尾
daysOfWeek.push('Wednesday');
console.log("push添加："+daysOfWeek);
// unshift方法把元素插入数组首位，即其他元素向后移一位，新元素变为首位
daysOfWeek.unshift('123');
console.log("unshift添加："+daysOfWeek);

// 删除元素
// pop方法删除数组最后一个元素
daysOfWeek.pop();
console.log("pop删除："+daysOfWeek);
// shift方法删除数组第一个元素，并将数组其他元素往前移一位
daysOfWeek.shift();
console.log("shift删除："+daysOfWeek);

// 在任意位置添加或删除元素
// splice方法
// 第一个参数 表示 想要删除或插入的元素的起始索引值(包含)
// 第二个参数 表示 要删除的元素的个数
// 第三个参数以及后面的参数 表示 要插入的元素
daysOfWeek.splice(1,1,1,2,3);//删除第二个元素，并插入1，2，3
console.log("splice方法："+daysOfWeek);

// 二维和多维数组
var a = [];
a[0] = [1,2,3];
a[1] = [4,5,6];
a[2] = [7,8,9];
console.log("二维数组:",a[0],a[1],a[2]);
// 多维数组与二维数组类似，只是嵌套更多


// JavaScript数组方法
// 数组合并,按照传入参数的顺序连接成数组并返回，参数可以为数组、对象或元素。
var a = [-2,-1,0];
var b = {
    b1: 1,
    b2: 2
}
var c = [3,4,5];
var d = 6;
var result = a.concat(b,c,d);
console.log(result);

// 迭代器函数
var nums = [0,1,2,3,4,5,6,7,8,9];
var isEven = function(x){
    // console.log(x);
    return (x%2==0) ? true : false;
}
// every方法迭代,遍历数组中的每个元素，直到返回false，如果都返回true，则every返回true
console.log("every:"+nums.every(isEven));
// some方法迭代,遍历数组中的每个元素，直至返回true，如果都返回false，则some返回false
console.log("some:"+nums.some(isEven));
// forEach方法迭代,这个方法类似于for循环，这个方法没有返回值
nums.forEach(function(x){
    console.log("forEach:"+(x%2==0));
});
// map方法迭代，会返回一个新数组，这个数组由 传入函数对每一项处理后的返回值 组成
var mapResult = nums.map(isEven);
console.log("map:"+mapResult);
// filter方法迭代，会返回一个新数组，这个数组由 传入函数返回true的元素 组成
var filterResult = nums.filter(isEven);
console.log("filter:" + filterResult);
// reduce方法迭代，此方法的第一个参数为一个回调函数，这个函数有四个参数：previous、current、index和array。第二个可选参数为initialValue，初始值。
// 如果传入了第二个参数initialValue则迭代从数组的第一个元素开始，否则从第二个元素开始
// previous: 初始值或者回调函数返回的值
// current: 当前元素的值
// index: 当前元素的索引
// array: 调用reduce方法的数组
// reduce方法求数组所有元素的和
var reduceResult = nums.reduce(function(previous,current,index,array){
    return previous + current;
})
console.log("reduce:"+reduceResult);

// ES6的数组新功能-迭代器相关
// for...of迭代
for(let n of nums){
    console.log("for...of:"+n);
}
// @@iterator迭代器
let iterator = nums[Symbol.iterator]();
console.log("iterator:"+iterator.next().value);
console.log("iterator:"+iterator.next().value);
console.log("iterator:"+iterator.next().value);
console.log("iterator:"+iterator.next().value);
// entries方法，返回包含键值对的@@iterator，键是数组索引，值是数组元素
let entries = nums.entries();
console.log("entries:"+entries.next().value);
console.log("entries:"+entries.next().value);
console.log("entries:"+entries.next().value);
// keys方法，返回包含键的@@iterator
let keys = nums.keys();
console.log("keys:"+keys.next().value);
console.log("keys:"+keys.next().value);
console.log("keys:"+keys.next().value);
// values方法，返回包含值的@@iterator
let values = nums.values();
console.log("values:"+values.next().value);
console.log("values:"+values.next().value);
console.log("values:"+values.next().value);

// Array.from方法，根据传入的数组和函数创建返回一个新数组
let from1 = Array.from(nums);
let from2 = Array.from(nums,function(x){
    if(x%2==0){
        return x;
    }
})
console.log("from:",from1,from2);
// Array.of方法，根据传入的参数创建一个新数组
let of1 = Array.of(1);
let of2 = Array.of(1,2,3);
let of3 = Array.of(...nums);
console.log("of:",of1,of2,of3);
// fill方法，填充数组，第一个参数为要填充的值，第二个参数为开始位置（包含），第三个参数为结束位置(不包含)
nums.fill(0);
console.log("fill:"+nums);
nums.fill(1,1);
console.log("fill:"+nums);
nums.fill(2,2,4);
console.log("fill:"+nums);
// 该方法常用于创建数组并初始化
let fill1 = Array(6).fill(0);
console.log("fill1:"+fill1);
let fill2 = [];
fill2.length = 10;
fill2.fill(1);
console.log("fill2:"+fill2);
// copyWithin方法，复制数组中的一系列元素到同一数组指定的起始位置。
nums.copyWithin(1,2,3);//将索引为2的元素复制到索引为1的位置
console.log("copyWithin:"+nums);


// 排序
nums = [0,1,2,3,4,5,6,7,8,9,10,11,12];
// reverse方法,逆序
nums.reverse();
console.log("reverse:"+nums);
// sort方法，排序(默认按字符串进行比较，从小到大)
nums.sort();
console.log("sort:"+nums);
nums.sort(function(a,b){
    // 传入自定义函数，来规定排序的原则
    // 返回负数时，sort会将a排在b前面
    // 返回正数时，sort会将a排在b后面
    if(a<b){
        return -1;
    }
    if(a>b){
        return 1;
    }
    return 0;
})
console.log("sort:"+nums);

// 查找
nums.push(3);
// indexOf方法，正向查找
console.log("indexOf:"+nums.indexOf(3));
// lastIndexOf方法，逆向查找
console.log("lastIndexOf:"+nums.lastIndexOf(3));
// ES6 find和findIndex方法,正向查找第一个满足条件的元素，前者返回值，后者返回索引
let findResult = nums.find(function(x){
    if(x == 3){
        return true;
    }
})
let findIndexResult = nums.find(function(x){
    return x == 3;
})
console.log("find和findIndex:",findResult,findIndexResult);

// ES7 includes方法,如果数组里存在此元素，则返回true，否则返回false
console.log("includes:"+nums.includes(122));
console.log("includes:"+nums.includes(2));

// 输出数组为字符串
// toString方法
console.log("toString:"+nums.toString());
// join方法,指定隔开元素的分隔符
console.log("join:"+nums.join("-"));

// 类型数组
// 类型数组用于存储单一类型的数据.
// 类型数组常用于 WebGL API、进行位操作、处理文件和图像。





// JavaScript常用数组方法整理概览
// todo: 补充更新
// concat 连接2个或更多数组，并返回结果

// every 对数组中的每一项运行给定函数，如果该函数对每一项都返回true，则返回true

// filter 对数组中的每一项运行给定函数，返回 该函数会返回true的项组成的数组

// forEach 对数组中的每一项运行给定函数。这个方法没有返回值

// join 将所有的数组元素连接成一个字符串

// indexOf 返回第一个与给定参数相等的数组元素的索引，没有找到则返回-1。可以理解为正向查找

// lastIndexOf 返回在数组中搜索到的与给定参数相等的元素的索引里最大的值。可以理解为逆向查找。

// map 对数组中的每一项运行给定函数，返回 每次函数调用的结果组成的数组。

// reverse 颠倒数组中元素的顺序，原先第一个元素现在变成最后一个，同样原先的最后一个元素变成了现在的第一个。

// slice 传入索引值， 将数组里对应索引范围内的元素作为新数组返回

// some 对数组中的每一项运行给定函数，如果任一项返回true，则返回true

// sort 按照字母顺序对数组排序，支持传入指定排序方法的函数作为参数

// toString 将数组作为字符串返回

// valueOf 和toString类似，将数组作为字符串返回

// todo:概述以下5个方法  push、pop、shift、unshift、splice