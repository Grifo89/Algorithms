def hanoi_steps(number_of_discs, start = 1, using = 2, goal = 3, func= 1)
  if number_of_discs > 0
    hanoi_steps(number_of_discs - 1, start, goal, using, 2)
    puts "#{start}->#{goal}--------#{func}"
    hanoi_steps(number_of_discs - 1, using, start, goal, 3)
  end
end

# hanoi_steps(2)
# => 1->2
#    1->3
#    2->3

# hanoi_steps(3)
# => 1->3
#    1->2
#    3->2
#    1->3
#    2->1
#    2->3
#    1->3

hanoi_steps(4)
# => 1->2
#    1->3
#    2->3
#    1->2
#    3->1
#    3->2
#    1->2
#    1->3
#    2->3
#    2->1
#    3->1
#    2->3
#    1->2
#    1->3
#    2->3
