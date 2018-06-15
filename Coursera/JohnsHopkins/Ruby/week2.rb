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
