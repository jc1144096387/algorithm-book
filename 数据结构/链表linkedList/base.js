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

let list = new LinkedList();
list.append(1);
list.append(2);
list.print();//输出为1-2
list.insert(1,3);
list.print();//输出为1-3-2
list.removeAt(0);
list.removeAt(1);
list.print();//输出为3
list.append(2);
list.append(3);
list.remove(3);
list.print();//输出为2-3
console.log(list.getHead());//输出为2
console.log(list.size());//输出为2
console.log(list.isEmpty());//输出为false


