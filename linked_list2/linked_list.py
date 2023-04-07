from typing import Any, Union, List

class Node:
    def __init__(self, data: Any) -> None:
        self.data = data
        self.next: Union[Node, None] = None
        self.prev: Union[Node, None] = None

class DoublyLinkedList:
    def __init__(self):
        self.head: Union[Node, None] = None

    def push(self, data: Any) -> Node:
        """Insert a new node at the first position
        """
        node = Node(data)

        if self.head is None:
            self.head = node
        else:
            node.next = self.head
            self.head.prev = node
            self.head = node

        return node
    
    def append(self, data: Any) -> Node: 
        """Insert a new node at the last position
        """
        node = Node(data)

        if self.head is None:
            self.head = node
        else:
            def get_last(node: Node):
                if node.next is not None:
                    return get_last(node.next)
                else:
                    return node
            
            lastNode = get_last(self.head)
            lastNode.next = node
            node.prev = lastNode

        return node
    
    def traverse(self) -> List[Any]:
        array: List[Any] = []
        current = self.head

        if self.head is None:
            return array
        
        while current is not None:
            array.append(current.data)
            current = current.next
        
        return array
    
    def delete(self, node: Node) -> None:
        if node.prev is None:
            self.head = node.next
        else: 
            prevNode = node.prev
            nextNode = node.next
            prevNode.next = node.next 
            nextNode.prev = prevNode
        
if __name__ == "__main__":
  llist = DoublyLinkedList()
  
  # Insert 6. So the list becomes 6->None
  llist.append(6)
  
  # Insert 7 at the beginning.
  # So linked list becomes 7->6->None
  llist.push(7)
  
  # Insert 1 at the beginning.
  # So linked list becomes 1->7->6->None
  llist.push(1)
  
  # Insert 4 at the end.
  # So linked list becomes 1->7->6->4->None
  llist.append(4)

  print(llist.traverse())