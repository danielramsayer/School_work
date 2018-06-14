=begin
This program is a word counter and sorter meant to read a file in and count the frequency of words and return to you the words sorted by their frequency, highest to lowest.
=end

def intro()
  puts "Hello, please enter the pathway of the file you would like to check for word usage. "
  pathway = gets.strip
  fileExists(pathway)
end

def fileExists(checking)
  if File.exist?(checking) === true
    puts "That is a real place!"
  else
    intro()
  end
end

def fileReader()
  File.open()


def counter()
  word_frequency = Hash.new(0)
  to_check = $FileContents
  to_check.split.each do |word|
    word_frequency[word.downcase] += 1
end


intro()
