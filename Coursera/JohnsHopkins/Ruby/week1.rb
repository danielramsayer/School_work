#Lesson 1



#Lesson 2

a = 5

if a == 4
  puts "a is 4"
elsif a == 5
  puts "a is 5"
else
  puts "a is neither 4 nor 5"
end

times_2 = 2
times_2 *= 2 and puts times_2 while times_2 < 100
puts times_2

File.open("newFile.txt","a") do |file|
  file.puts "Line One"
  file.puts "Line Two"
end
