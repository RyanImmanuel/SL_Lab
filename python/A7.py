class student:
    def __init__(self,name,age,marks):
        self.name=name
        self.age=age
        self.marks=marks
    def accept(self):
        self.name=input("enter name :")
        self.age=input("enter age : ")
        self.marks.clear()
        for i in range(3):
            ele=int(input())
            self.marks.append(ele)
    def display(self):
        print(self.name,self.age,self.marks,"\n")

s1 = student('Ganesha',20,[90,80,95])
s1.display()

s2 = student('Hotti',21,[60,82,75])
s2.display()

s2.accept()
s2.display()