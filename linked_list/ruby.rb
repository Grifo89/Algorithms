class Node
  attr_accessor :value, :next_node

  def initialize(value, next_node = nil)
    @value = value
    @next_node = next_node
  end
end

class LinkedList

  def initialize
    @head = nil
  end

  def add(number)
    if @head
      find_tail.next_node = Node.new(number)
    else
      @head = Node.new(number)
    end
  end

  def find_tail
    node = @head
    return node if !node.next_node
    return node if !node.next_node while (node = node.next_node)
  end

  def get(index)
    @list = []
    current_node = @head
    while current_node.next_node != nil
      @list << current_node.value
      current_node = current_node.next_node
    end
    @list << current_node.value
    @list[index]
  end
end

list = LinkedList.new

list.add(3)
list.add(5)
puts list.get(1)
