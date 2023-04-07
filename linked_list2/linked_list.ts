
// This class is a Node class tha has three atributes: next, prev and data. 
class Node2<T> {
    public next: Node2<T> | null = null;
    public prev: Node2<T> | null = null;
    constructor(public data: T) {}
}

interface ILinkedList<T> {
    insertInBegin(data: T): Node2<T>;
    insertAtEnd(data: T): Node2<T>;
    deleteNode(node: Node2<T>);
    traverse(): T[];
    size(): number;
    search(comparator: (data: T) => boolean): Node2<T> | null
}

class LinkedList<T> implements ILinkedList<T> {
    // head node is supposed to be first node, it's declare as a class variable.
    private head: Node2<T> | null = null
    // FUNCTION insertInBegin function inserts a node at the beginning of the list.
    public insertInBegin(data: T): Node2<T> {
        // 1. it creates a new node
        const node = new Node2(data)
        // 2. checks if the list is empty, if it's empty assings the new node to the head of the list.
        if (!this.head) {
            this.head = node;
        } else {
            // 3. If the list is not empty the current head should be the second node, so this step assigns to be the previous node the created node (now the first ), the current head it'll be the created node next and the new head will be the created node. 
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        // returns the created node, now the first and the head of the list.
        return node;
    }
    // FUNCTION instertAtEnd: This function inserts at the end of the list the a new node. 
    public insertAtEnd(data: T): Node2<T> {
        // 1. Creates a new node to be inserted at the end of the list. 
        const node = new Node2(data)
        // 2. checks if the list is empty.
        if (!this.head) {
            this.head = node;
        } else {
            // 3. if it's not empty, creates a recursive function FUNCTION getLast that iterates from the begenning the list to get the last node 
            const getLast = (node: Node2<T>): Node2<T> => {
                return node.next ? getLast(node.next) : node;
            };
            // 4. Get the last node using the created fucntion getLast
            const lastNode = getLast(this.head);
            // 5. Now assigns the last node to be the previous of the created node
            node.prev = lastNode;
            // 6. And because the created node should be the last node now is the next node of the one which was the last node before. 
            lastNode.next = node;
        };
        // 7. Returns a node. 
        return node;
    };
    // FUNCTION deleteNode: This function delete a node from the list. 
    public deleteNode(node: Node2<T>) {
        // 1. Checks if the node is the first one, that's mean if it's the head node. if it's the first node assigns to be the head the next node after of the current first node. 
        if (!node.prev) {
            this.head = node.next;
        } else {
            // 2. Use a temporary variable to store the previous node. 
            const prevNode = node.prev;
            // 3. Assigns to be the next node of the prevNode to the one to delete the next to the one to delete. 
            prevNode.next = node.next;
        }
    };
    // FUNCTION traverse: This function traverses the array. 
    traverse(): T[] {
        // 1. Creates an empty array
        const array: T[] = [];
        // 2. if the list is empty return the empty array
        if (!this.head) {
            return array;
        };
        // 3. Creates a helper recursive function that traverses the list from the beginning to the end append the data from each node to the created array until it finishes and returns the array with the list data. 
        const addToArray = (node: Node2<T>): T[] => {
            array.push(node.data);
            return node.next ? addToArray(node.next) : array;
        };
        // 4. Call the helper array passing in the head node as the argument. 
        return addToArray(this.head)
    };
    // FUNCTION size: This function returns the size of the list. 
    size(): number {
        // 1. Calls the traverse method to "transform" the list to an array and get the length of that array. 
        return this.traverse().length
    }
    // FUNCTION search: This function search a node based on a callback that returns a boolean value. 
    search(comparator: (data: T) => boolean): Node2<T> | null {
        // 1. Creates a helper recursive function, FUNCTION checkNext which iterates over the list checking the callback condition with each node. 
        const checkNext = (node: Node2<T>): Node2<T> | null => {
            // 2. Checks if the condition is true for the first node, if it's true returns the first node. 
            if (comparator(node.data)) {
                return node
            };
            // 3. Iterates over the list recursively checking the callback condition.  
            return node.next ? checkNext(node.next): null;
        };
        // 4. If the list is not empty apply the recursive helper function checkNext, else return null. 
        return this.head ? checkNext(this.head) : null;
    }
    
}

interface Post {
    title: string;
}

const linkedList = new LinkedList<Post>();

linkedList.traverse() // [];

linkedList.insertAtEnd({ title: "Post A" });
linkedList.insertAtEnd({ title: "Post B" });
linkedList.insertInBegin({ title: "Post C" });
linkedList.insertInBegin({ title: "Post D" });

linkedList.traverse() // [{ title : "Post D" }, { title : "Post C" }, { title : "Post A" }, { title : "Post B" }];
linkedList.search(({ title }) => title === "Post A") // Node { data: { title: "Post A" }, prev: Node, next: Node};