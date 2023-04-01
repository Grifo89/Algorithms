require_relative "../linked_list/ruby"

class Stack
  def initialize
    @list = LinkedList.new
    @counter = -1
    @min = []
  end

  def push(number)
    @list.add(number)
    @counter += 1
    @min << number
  end

  def pop
    value = @list.get(@counter)
    @list.remove(@counter)
    @counter -= 1
    @min.pop()
    return value
  end

  def min
    return @min.sort()[0]
  end
end

stack = Stack.new
stack.push(3)
stack.push(5)
puts stack.min
# => 3

stack.pop
stack.push(7)
puts stack.min
# => 3

stack.push(2)
puts stack.min
# => 2

stack.pop
puts stack.min
# => 3
