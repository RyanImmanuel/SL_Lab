#The self parameter is a reference to the current instance of the class, and is used to access variables that belongs to the class.
class rectangle:
    def __init__(self):
        self.l=int(input("enter l: "))
        self.b=int(input("enter b: "))
    def area(self):
        print("area = ",self.l*self.b)

obj=rectangle()
obj.area()