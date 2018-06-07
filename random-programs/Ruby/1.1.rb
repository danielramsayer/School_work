#Is a year a leap year? Because the actual length of a year is 365.25635 and not a round number, every 4 years instead of 365 days we have 366. This program is designed to determine if an entry year is a lead year or not.
puts "Please enter a year that you are looking to check if "
year_to_check = gets.to_i

if (year_to_check % 4 == 0) && (year_to_check % 100 == 0) && (year_to_check % 400 == 0)
  print year_to_check.to_s + " is infact a leap year. "
  puts (year_to_check + 4).to_s + " is the next leap year."
else
  print year_to_check.to_s + " is not a leapyear. "
  year_to_check2 = year_to_check
  loop do
    year_to_check2 += 1
    next unless ((year_to_check2 % 4 == 0) && (year_to_check2 % 100 == 0) && (year_to_check2 % 400 == 0)) == 0
    puts year_to_check2.to_s + " is the next leap year."
    break if year_to_check2 >= year_to_check+4
  end
end
