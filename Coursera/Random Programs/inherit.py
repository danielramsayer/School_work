class Parent ():
    def __init__(self, eye_color, last_name):
        print ("Parent Constructor Called")
        self.last_name = last_name
        self.eye_color = eye_color

    def show_info(self):
        print("Last name " +self.last_name)
        print("Eye color " +self.last_name)

class Child(Parent):
    def __init__(self, eye_color, last_name, number_of_toys):
        print ("Child Constructor Called")
        Parent.__init__(self, eye_color, last_name)
        self.number_of_toys = number_of_toys

    def show_info(self):
        print("Last name " +self.last_name)
        print("Eye color " +self.last_name)
        print("Number of toys " + str(self.number_of_toys)) 

#billy_cyrus= Parent("Blue", "Cyrus")
#billy_cyrus.show_info()

miley_cyrus = Child("Cyrus", "Blue", 100)
miley_cyrus.show_info()
