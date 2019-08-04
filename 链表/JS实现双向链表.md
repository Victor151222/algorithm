

```js
//辅助类 表示要加入链表的项
class Node {
    constructor(element) {
        this.element = element;
        this.next = null; //指向链表中下一个节点项的指针
        this.prev = null; //新####
    }
}
class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null; //新#### 对最后一项的引用

    }

    //向链表尾部添加一个新的项
    append(element) {
        let node = new Node(element),
            current;

        if (this.head === null) { //链表为空，添加到首部
            this.head = node;
            this.tail = node; //新####
        } else {
            current = this.head;
            //循环链表，直到找到最后一项
            while (current.next) {
                current = current.next;
            }
            //找到最后一项，将其next赋为node，建立连接
            current.next = node;
            this.tail = node; //新####
            current.next.prev = current; // 新#### 将新加入的节点的pre指向最后一个节点

        }
        this.length++;
    };

    //向链表特定位置插入一个新的项
    insert(position, element) {
        //检查是否越界
        if (position >= 0 && position <= this.length) {
            let node = new Node(element),
                current = this.head,
                previous,
                index = 0;

            if (position === 0) { //在第一个位置添加
                if (!this.head) { //新#### 
                    this.head = node;
                    this.tail = node;
                } else {
                    node.next = current;
                    current.prev = node; //新#### 
                    this.head = node;
                }
            } else if (position === this.length) { //新#### 最后一项 

                //改变指针，再把node赋值给tail 
                current = tail;
                current.next = node;
                node.prev = current;
                this.tail = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                //通过改变指针，将node链接在previous和current之间
                node.next = current;
                previous.next = node;
                current.prev = node; //新####
                node.prev = previous; //新####
            }
            this.length++;
            return true;
        } else {
            return false;
        }
    };

    //从链表特定位置移除一项
    removeAt(position) {
        //检查是否越界
        if (position > -1 && position < this.length) {
            let current = this.head,
                previous,
                index = 0;

            if (position === 0) { //移除第一项
                this.head = current.next;
                //新#### 如果只有一项，更新tail 
                if (length === 1) {
                    this.tail = null;
                } else {
                    this.head.prev = null;
                }
            } else if (position === this.length - 1) { //新#### 最后一项 
                current = tail;
                this.tail = current.prev;
                this.tail.next = null;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                //将previous与current的下一项链接起来，跳过current，从而移除它
                previous.next = current.next;
                current.next.prev = previous; //新####
            }
            this.length--;
            return current.element;
        } else {
            return null;
        }
    };

    //从链表中移除一项
    remove(element) {
        let index = this.indexOf(element);
        return this.removeAt(index);
    };

    //返回元素在链表中的索引，如果没有则返回-1
    indexOf(element) {
        let current = this.head,
            index = 0;
        while (current) {
            if (current.element === element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };

    //判断链表是否为空
    isEmpty() {
        return this.length === 0;
    };

    //返回链表包含元素个数
    size() {
        return this.length;
    };

    //head是一个私有变量，当需要在类的实现外部循环访问链表时，就可以使用getHead方法获取类的第一个元素
    getHead() {
        return this.head;
    };

    //只输出链表中元素
    toString() {
        let current = this.head,
            string = "";
        while (current) {
            string += "," + current.element;
            current = current.next;
        }
        return string.slice(1);
    };

    //打印元素的值
    print() {
        console.log(this.toString());
    };
}
```

