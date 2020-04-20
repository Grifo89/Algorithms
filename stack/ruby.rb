require_relative "../linked_list/ruby"

class Stack
  def initialize
    @list = LinkedList.new
    @counter = -1
  end

  def push(number)
    @list.add(number)
    @counter += 1
  end

  def pop
    value = @list.get(@counter)
    @list.remove(@counter)
    @counter -= 1
    return value
  end

  def empty?
    return true if @list.empty?
    return false if !@list.empty?
  end

  def top
    value = @list.get(@counter) if @counter >= 0
    return value
  end
end

stack = Stack.new
# stack.push(3)
# stack.push(5)
# puts stack.empty?
# puts stack.pop
# => 5
# puts stack.empty?
# stack.push(2)
# stack.push(7)
# puts stack.pop
# => 7

# puts stack.pop
# => 2

# puts stack.pop
# => 3
