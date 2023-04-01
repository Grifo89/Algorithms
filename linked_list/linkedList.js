class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const head = Symbol("head")

class LinkedList {
  constructor() {
    this[head] = null
  }

  add(data){
    // create a new node
    const newNode = new LinkedListNode(data)

    // special case: no items in the list yet
    if (this[head] === null) {
      // just set the head to the new node
      this[head] = newNode
    } else {
      // start out by looking at the first Node
      let current = this[head]
      // follow `next` links until you reach the end
      while(current.next !== null){
        current = current.next
      }
      // assign the node into the `next` pointer
      current.next = newNode
    }
  }

  get(index){
    if (index > -1) {

      // the pointer to use for traversal
      let current = this[head]

      // used to keep track of where in the list you are
      let i = 0;

      // treverse the list until you reach either the end or the index
      while ((current !== null) && (i < index)) {
        current = current.next;
        i++;
      }

      // return the data if `current` isn't null
      return current !== null? current.data : undefined;
    } else {
      return undefined;
    }
  }
}

let list = new LinkedList
list.add(2)
list.add(5)
console.log(list.get(1))
