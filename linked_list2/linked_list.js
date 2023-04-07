// This class is a Node class tha has three atributes: next, prev and data. 
var Node2 = /** @class */ (function () {
    function Node2(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
    return Node2;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        // head node is supposed to be first node, it's declare as a class variable.
        this.head = null;
    }
    // FUNCTION insertInBegin function inserts a node at the beginning of the list.
    LinkedList.prototype.insertInBegin = function (data) {
        // 1. it creates a new node
        var node = new Node2(data);
        // 2. checks if the list is empty, if it's empty assings the new node to the head of the list.
        if (!this.head) {
            this.head = node;
        }
        else {
            // 3. If the list is not empty the current head should be the second node, so this step assigns to be the previous node the created node (now the first ), the current head it'll be the created node next and the new head will be the created node. 
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        // returns the created node, now the first and the head of the list.
        return node;
    };
    // FUNCTION instertAtEnd: This function inserts at the end of the list the a new node. 
    LinkedList.prototype.insertAtEnd = function (data) {
        // 1. Creates a new node to be inserted at the end of the list. 
        var node = new Node2(data);
        // 2. checks if the list is empty.
        if (!this.head) {
            this.head = node;
        }
        else {
            // 3. if it's not empty, creates a recursive function FUNCTION getLast that iterates from the begenning the list to get the last node 
            var getLast_1 = function (node) {
                return node.next ? getLast_1(node.next) : node;
            };
            // 4. Get the last node using the created fucntion getLast
            var lastNode = getLast_1(this.head);
            // 5. Now assigns the last node to be the previous of the created node
            node.prev = lastNode;
            // 6. And because the created node should be the last node now is the next node of the one which was the last node before. 
            lastNode.next = node;
        }
        // 7. Returns a node. 
        return node;
    };
    // FUNCTION deleteNode: This function delete a node from the list. 
    LinkedList.prototype.deleteNode = function (node) {
        // 1. Checks if the node is the first one, that's mean if it's the head node. if it's the first node assigns to be the head the next node after of the current first node. 
        if (!node.prev) {
            this.head = node.next;
        }
        else {
            // 2. Use a temporary variable to store the previous node. 
            var prevNode = node.prev;
            // 3. Assigns to be the next node of the prevNode to the one to delete the next to the one to delete. 
            prevNode.next = node.next;
        }
    };
    // FUNCTION traverse: This function traverses the array. 
    LinkedList.prototype.traverse = function () {
        var array = [];
        if (!this.head) {
            return array;
        }
        ;
        var addToArray = function (node) {
            array.push(node.data);
            return node.next ? addToArray(node.next) : array;
        };
        return addToArray(this.head);
    };
    LinkedList.prototype.size = function () {
        return this.traverse().length;
    };
    LinkedList.prototype.search = function (comparator) {
        var checkNext = function (node) {
            if (comparator(node.data)) {
                return node;
            }
            ;
            return node.next ? checkNext(node.next) : null;
        };
        return this.head ? checkNext(this.head) : null;
    };
    return LinkedList;
}());
var linkedList = new LinkedList();
linkedList.traverse(); // [];
linkedList.insertAtEnd({ title: "Post A" });
linkedList.insertAtEnd({ title: "Post B" });
linkedList.insertInBegin({ title: "Post C" });
linkedList.insertInBegin({ title: "Post D" });
linkedList.traverse(); // [{ title : "Post D" }, { title : "Post C" }, { title : "Post A" }, { title : "Post B" }];
linkedList.search(function (_a) {
    var title = _a.title;
    return title === "Post A";
}); // Node { data: { title: "Post A" }, prev: Node, next: Node};
