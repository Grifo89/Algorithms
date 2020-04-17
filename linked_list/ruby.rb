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
    if @head.nil?
      @head = Node.new(item)
    end
    if index == 0
      node = Node.new(item, @head)
      @head = node
    end
    if index > 0
      node = get_node(index - 1)
      old_next = node.next_node
      node.next_node = Node.new(item)
      node.next_node.next_node = old_next
    end
  end

  def remove(index)
    if @head.nil?
      puts "The storage is empty"
    end
    if index == 0
      @head = @head.next_node
    end
    if index > 0
      node = get_node(index - 1)
      node.next_node = node.next_node.next_node
    end
  end

  private

  def get_node(index)
    node = @head
    index.times do
      node = node.next_node
    end
    return node
  end
end

list = LinkedList.new

list.add(8)
list.add(3)
list.add_at(1, 5)
# list.add_at(2, 4)
# puts list.get(2)
# list.remove(1)
puts list.get(0)
puts list.get(1)
puts list.get(2)
# puts list.get(3)
# [8, 4, 3]
