require_relative "../stack/ruby"

def balanced_brackets?(string)
  stack = Stack.new
  arr = string.split("")
  arr.each do |a|
    if a == "(" || a == "[" || a == "{"
      stack.push(a)
    end
    case a
    when ")"
      if stack.top != "(" || stack.empty?
        return false
      end
      stack.pop
    when "]"
      if stack.top != "[" || stack.empty?
        return false
      end
      stack.pop
    when "}"
      if stack.top != "{" || stack.empty?
        return false
      end
      stack.pop
    end
  end
  return false if !stack.empty?
  return true
end

puts balanced_brackets?('(hello)[world]')
# => true

puts balanced_brackets?('([)]')
# => false

puts balanced_brackets?('[({}{}{})([])]')
# => true

puts balanced_brackets?('(hello))')

puts balanced_brackets?('(hello')
