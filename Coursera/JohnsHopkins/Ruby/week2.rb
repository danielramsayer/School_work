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
