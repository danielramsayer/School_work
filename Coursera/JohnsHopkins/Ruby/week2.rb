#Classes File and the various ways of using them.
#Standard introduction to classes
class Person
  def initialize (name, age, pet)
    @name = name
    @age = age
    @pet = pet
  end
  def get_info
    @additional_info = "Participant is: " "Name: #{@name}, age #{@age}, has #{@pet}"
  end
end

person1 = Person.new("Jacob", 12, "cats")
p person1.instance_variables
puts person1.get_info
p person1.instance_variables


#Getter and Setter Access

class Person
  def initialize (name, age, pet)
    @name = name
    @age = age
    @pet = pet
  end
  def name
    @name
  end
  def name=(new_name)
    @name = new_name
  end
end

person1 = Person.new("Jacob", 12, "cats")
puts person1.name
person1.name = "Mike"
puts person1.name
p person1.instance_variables

#Attribute getter and setter methods
class Person2
  attr_accessor :name, :age, :pet
end

person1 = Person2.new
p person1.name
person1.name = "Darius"
person1.age = "18"
person1.pet = "Guinnea Pig"
puts person1.name
puts person1.age
puts person1.pet
person1.pet = "dog"
puts person1.pet


#This section is including self as an option

class Person
  attr_reader :age
  attr_accessor :name

  def initialize (name, ageVar) #This is the constructor bit
    @name = name
    self.age = ageVar #This will be called in the age= method
    puts age
  end
  def age= (new_age)
    @age = new_age unless new_age > 120
  end
end

person1 = Person.new("Earnest", 13)
puts "My age is #{person1.age}"
person1.age = 145
puts person1.age


#Class Inheretence selection

class Person
  attr_reader :age
  attr_accessor :name

  def initialize (name, ageVar) #This is the constructor bit
    @name = name
    self.age = ageVar #This will be called in the age= method
  end
  def age= (new_age)
    @age ||= 5
    @age = new_age unless new_age > 120
  end
end

person1 = Person.new("Ricardo", 65)
puts person1.age
person1.age = 12
puts person1.age
person1.age = 200
puts person1.age


#Class invocation
#@gives you a instance variable and @@ gives a class variable

class MathFunctions
  def self.double(var)
    times_called; var * 2;
  end
  class << self
    def times_called
      @@times_called ||= 0; @@times_called += 1
    end
  end
end
def MathFunctions.triple(var)
  times_called; var * 3
end

#Instance not created
puts MathFunctions.double(5)
puts MathFunctions.triple(3)
puts MathFunctions.times_called

#Modules in Ruby!
module Sports
  class Match
    attr_accessor :score
  end
end

module Patterns
  class Match
    attr_accessor :complete
  end
end

match1 = Sports::Match.new
match1.score = 45; puts match1.score

match2 = Patterns::Match.new
match2.score = true; puts match2.complete
