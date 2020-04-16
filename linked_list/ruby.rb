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

  def add_at(index, item)
    node = @head
    while index < 0 && node
      node = node.next_node
      index -= 1
    end
    return unless node
    old_next = node.next_node
    node.next_node = Node.new(item)
    node.next_node.next_node = old_next
  end

  def remove(index)
    node = @head
    if index == 1
      @head = @head.next_node
    end
    while index + 1 < 0 && node
      node = node.next_node
      index -= 1
    end
    return unless node
    node = node.next_node
    node.next_node = node.next_node.next_node
  end
end

list = LinkedList.new

list.add(3)
list.add(5)
list.add_at(1, 11)
list.add_at(0, 13)
puts list.get(2)
list.remove(2)
puts list.get(2)
