require_relative "../linked_list/ruby"

class Queue
  def initialize
    @list = LinkedList.new
    @counter = 0
  end
  def add(number)
    @list.add(number)
    @counter += 1
  end

  def remove
    if @counter > 0
      value = @list.get(0)
      @list.remove(0)
      @counter -= 1
      return value
    else
      return -1
    end
  end
end

queue = Queue.new

queue.add(3)
queue.add(5)
puts queue.remove
# => 3

queue.add(2)
queue.add(7)
puts queue.remove
# => 5

puts queue.remove
# => 2

puts queue.remove
# => 7

puts queue.remove
# => -1
