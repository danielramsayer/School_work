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
