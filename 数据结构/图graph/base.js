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
// 创建队列
function Queue(){
    var _items = [];
    // 向队列添加元素
    this.enqueue = function(e){
        let q = _items;
        q.push(e);
    }
    // 从队列移除元素
    this.dequeue = function(){
        let q = _items;
        return q.shift();
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
        console.log("queue: "+_items.toString());
    }
};

// 创建Graph类(邻接表)
function Graph(){
    var vertices = [];
    var adjList = new Dictionary();

    // 初始化点的颜色，用于标记顶点是否被搜索
    // white表示未被访问，grey表示被发现（进入队列或出队列），black表示已被探索（邻接顶点已被加入队列）
    var initializeColor = function(){
        var color = [];
        for(var i = 0; i < vertices.length; i ++){
            color[vertices[i]] = 'white';
        }
        return color;
    }

    // 添加顶点
    this.addVertex = function(v){
        vertices.push(v);
        adjList.set(v,[]);
    }
    // 添加顶点之间的边
    this.addEdge = function(v,w){
        adjList.get(v).push(w);
        adjList.get(w).push(v);
    }
    // 将图中的数据转化为字符串
    this.toString = function(){
        var s = '';
        for(var i = 0; i < vertices.length; i ++){
            s += vertices[i] + ' -> ';
            var neighbors = adjList.get(vertices[i]);
            for(var j = 0; j < neighbors.length; j ++){
                s += neighbors[j] + ' ';
            }
            s += '\n';
        }
        return s;
    }
    // 广度优先搜索
    this.bfs = function(v,callback){
        let color = initializeColor();
        let queue = new Queue();
        queue.enqueue(v);
        
        while(!queue.isEmpty()){
            var u = queue.dequeue();
            var neighbors = adjList.get(u);
            color[u] = 'grey';
            for(var i = 0; i < neighbors.length; i++){
                var w = neighbors[i];
                if(color[w] == 'white'){
                    color[w] = 'grey';
                    queue.enqueue(w);
                }
            }
            color[u] = 'black';
            if(callback){
                callback(u);
            }
        }
    }
    // 使用BFS寻找最短路径
    this.BFS = function(v){
        let color = initializeColor();
        let queue = new Queue();
        var d = [];
        var pred = [];
        queue.enqueue(v);
        queue.print();
        for(var i = 0; i < vertices.length; i ++){
            d[vertices[i]] = 0;
            pred[vertices[i]] = null;
        }
        while(!queue.isEmpty()){
            queue.print();
            var u = queue.dequeue();
            var neighbors = adjList.get(u);
            color[u] = 'grey';
            for(i = 0; i < neighbors.length; i ++){
                var w = neighbors[i];
                if(color[w] == 'white'){
                    color[w] = 'grey';
                    d[w] = d[u] + 1;
                    pred[w] = u;
                    queue.enqueue(w);
                }
            }
            color[u] = 'black';
        }
        return{
            distances: d,
            predecessors: pred
        }
    }
    // 深度优先搜索
    this.dfs = function(callback){
        
    }
}

// 测试Graph类
var graph = new Graph();
var myVertices = ['A','B','C','D','E','F','G','H','I'];
for(var i = 0; i < myVertices.length; i ++){
    graph.addVertex(myVertices[i]);
}
graph.addEdge('A','B');
graph.addEdge('A','C');
graph.addEdge('A','D');
graph.addEdge('B','E');
graph.addEdge('B','F');
graph.addEdge('C','D');
graph.addEdge('C','G');
graph.addEdge('D','G');
graph.addEdge('D','H');
graph.addEdge('E','I');
console.log(graph.toString());

// 广度优先搜索
function printNode(value){
    console.log('Visited vertex: ' + value);
}
graph.bfs(myVertices[0], printNode);

// 广度优先搜索求 未加权图 的 最短路径
var shortestPathA = graph.BFS(myVertices[0]);
for(let i = 0; i < myVertices.length; i ++){
    console.log(myVertices[i]+":"+shortestPathA.distances[myVertices[i]],shortestPathA.predecessors[myVertices[i]])
}
var fromVertex = myVertices[0];
for(var i = 1; i < myVertices.length; i++){
    var toVertex = myVertices[i];
    var path = new Stack();
    for(var v = toVertex; v !== fromVertex; v = shortestPathA.predecessors[v]){
        path.push(v);
    }
    path.push(fromVertex);
    var s = path.pop();
    while(!path.isEmpty()){
        s += ' - ' + path.pop();
    }
    console.log(s);
}

// 深度优先搜索

