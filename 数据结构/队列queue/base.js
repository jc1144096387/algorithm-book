// 创建队列
// todo: 为什么这里的_items多个实例会共用,而Queue2不会
var Queue = (function(){
    let _items = [];
    return function(){
        // 向队列添加元素
        this.enqueue = function(e){
            _items.push(e);
        }
        // 从队列移除元素
        this.dequeue = function(){
            return _items.shift();
        }
        // 查看队列头元素
        this.front = function(){
            return _items[0];
        }
        // 检查队列是否为空
        this.isEmpty = function(){
            return _items.length == 0;
        }
        // 获取队列长度
        this.size = function(){
            return _items.length;
        }
        // 清空队列
        this.clear = function(){
            _items = [];
        }
        // 打印队列元素
        this.print = function(){
            console.log(_items.toString());
        }
    }
})();

// 创建队列
var Queue2 = (function(){
    const _items = new WeakMap();
    class Queue2{
        constructor(){
            _items.set(this,[]);
        }
        // 向队列添加元素
        enqueue(e){
            let q = _items.get(this);
            q.push(e);
        }
        // 从队列移除元素
        dequeue(){
            let q = _items.get(this);
            return q.shift();
        }
        // 查看队列头元素
        front(){
            return _items.get(this)[0];
        }
        // 检查队列是否为空
        isEmpty(){
            return _items.get(this).length == 0;
        }
        // 获取队列长度
        size(){
            return _items.get(this).length;
        }
        // 清空队列
        clear(){
            _items.set(this,[]);
        }
        // 打印队列元素
        print(){
            console.log(_items.get(this).toString());
        }
    }
    return Queue2;
})();

var queue = new Queue2();
console.log(queue.isEmpty());//输出为true
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print();//输出为1,2,3
console.log(queue.size());//输出为3
console.log(queue.isEmpty());//输出为false
queue.dequeue();
queue.print();//输出为2,3


// 优先队列
// 最小优先队列(优先级值小的优先级高，排在前面)
var PriorityQueue = (function(){
    let _items = [];
    function QueueElement(e,prio){
        this.e = e;
        this.prio = prio;
    }
    return function(){
        // 向队列添加元素
        this.enqueue = function(e,prio){
            let queueElement = new QueueElement(e,prio);

            for(var i = 0; i < _items.length; i ++){
                if(queueElement.prio < _items[i].prio){
                    _items.splice(i,0,queueElement);
                    break;
                }
            }
            if(i==_items.length){
                _items.push(queueElement);
            }
        }
        // 从队列移除元素
        this.dequeue = function(){
            return _items.shift();
        }
        // 查看队列头元素
        this.front = function(){
            return _items[0];
        }
        // 检查队列是否为空
        this.isEmpty = function(){
            return _items.length == 0;
        }
        // 获取队列长度
        this.size = function(){
            return _items.length;
        }
        // 清空队列
        this.clear = function(){
            _items = [];
        }
        // 打印队列元素
        this.print = function(){
            for(let i = 0; i < _items.length; i ++){
                console.log(`${_items[i].e} - ${_items[i].prio}`);
            }
        }
    }
})();

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue("a",2);
priorityQueue.enqueue("b",1);
priorityQueue.enqueue("c",1);
priorityQueue.print();//输出为b-1 c-1 a-2


// 循环队列-击鼓传花
function hotPotato(nameList, num){
    let queue = new Queue2();
    for(let i = 0; i < nameList.length; i ++){
        queue.enqueue(nameList[i]);
    }
    let eliminated = '';
    while(queue.size() > 1){
        for(let i = 0; i < num; i ++){
            queue.enqueue(queue.dequeue());
        }
        eliminated = queue.dequeue();
        console.log(eliminated + '在击鼓传花游戏中被淘汰。');
    }
    return queue.dequeue();
}
let nameList = ['a','b','c','d','e'];
let winner = hotPotato(nameList,7);
console.log("The winner is: " + winner);

let q1 = new Queue2();
q1.enqueue(1);
q1.print();
let q2 = new Queue2();
q1.print();
q2.print();
q2.enqueue(2);
q1.print();
q2.print();

// todo: JavaScript任务队列