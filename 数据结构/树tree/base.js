// 二叉树中的节点最多只能有两个子节点。         
// 二叉搜索树（BST）是二叉树的一种，但是它只允许你在左侧节点存储比父节点小的值，再右侧节点存储大于等于父节点的值。
// 创建BinarySearchTree类
function BinarySearchTre(){
    var Node = function(key){
        this.key = key;
        this.left = null;
        this.right = null;
    }
    var root = null;
    // 插入节点方法的辅助函数
    var insertNode = function(node, newNode){
        if(newNode.key < node.key){
            if(node.left == null){
                node.left = newNode;
            }else{
                insertNode(node.left,newNode);
            }
        }else{
            if(node.right == null){
                node.right = newNode;
            }else{
                insertNode(node.right, newNode);
            }
        }
    }
    // 中序遍历方法的辅助函数
    var inOrderTraverseNode = function(node,callback){
        if(node != null){
            inOrderTraverseNode(node.left,callback);
            callback(node.key);
            inOrderTraverseNode(node.right,callback);
        }
    }
    // 先序遍历方法的辅助函数
    var preOrderTraverseNode = function(node,callback){
        if(node != null){
            callback(node.key);
            preOrderTraverseNode(node.left,callback);
            preOrderTraverseNode(node.right,callback);
        }
    }
    // 后序遍历方法的辅助函数
    var postOrderTraverseNode = function(node,callback){
        if(node != null){
            postOrderTraverseNode(node.left,callback);
            postOrderTraverseNode(node.right,callback);
            callback(node.key);
        }
    }
    // 求最小值辅助函数
    var minNode = function(node){
        if(node){
            while(node && node.left != null){
                node = node.left;
            }
            return node.key;
        }
        return null;
    }
    // 求最大值辅助函数
    var maxNode = function(node){
        if(node){
            while(node && node.right != null){
                node = node.right;
            }
            return node.key;
        }
        return null;
    }
    // 搜索节点辅助函数
    var searchNode = function(node, key){
        if(node == null){
            return false;
        }
        if(key < node.key){
            return searchNode(node.left, key);
        }else if(key > node.key){
            return searchNode(node.right, key);
        }else{
            return true;
        }
    }
    // 移除节点辅助函数
    var removeNode = function(node, key){
        if(node == null){
            return null;
        }
        if(key < node.key){
            node.left = removeNode(node.left, key);
            return node;
        }else if(key > node.key){
            node.right = removeNode(node.right, key);
            return node;
        }else{
            if(node.left == null && node.right == null){
                node = null;
                return node;
            }
            if(node.left == null){
                node = node.right;
                return node;
            }
            if(node.right == null){
                node = node.left;
                return node;
            }
            var aux = findMinNode(node.right);
            node.key = aux.key;
            node.right = removeNode(node.right, aux.key);
            return node;
        }
    }
    var findMinNode = function(node){
        while(node && node.left != null){
            node = node.left;
        }
        return node;
    }

    // 向树中插入一个新的节点
    this.insert = function(key){
        var newNode = new Node(key);
        if(root == null){
            root = newNode;
        }else{
            insertNode(root,newNode);
        }
    }
    // 中序、先序、后序，这里的顺序是针对根节点来说的。
    // 中序遍历:左侧子节点、根节点、右侧子节点
    this.inOrderTraverse = function(callback){
        inOrderTraverseNode(root, callback);
    }
    // 先序遍历:根节点、左侧子节点、右侧子节点
    this.preOrderTraverse = function(){
        preOrderTraverseNode(root, callback);
    }
    // 后序遍历:左侧子节点、右侧子节点、根节点
    this.postOrderTraverse = function(){
        postOrderTraverseNode(root, callback);
    }

    // 在树中查找一个节点，如果存在则返回true，否则返回false
    this.search = function(key){
        return searchNode(root, key);
    }
    // 返回树中最小的值
    this.min = function(){
        return minNode(root);
    }
    // 返回树中最大的值
    this.max = function(){
        return maxNode(root);
    }
    // 从树中移除某个节点
    // todo: 详细分析一下
    this.remove = function(key){
        root = removeNode(root,key);
    }
}

// todo: AVL树
// todo: 红黑树
// todo: 堆积树

