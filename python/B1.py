arr=[]
class sentence:
    def __init__(self,s) :
        self.s=s
    def reverse(self):
        words=self.s.split(' ')
        words.reverse()
        self.rev=""
        for i in words:
            self.rev=self.rev + i +" "
        return self.rev
    def vowels(self):
        self.v=0
        for i in self.s:
            if i.lower() in "aeiou":
                self.v +=1
        
        tup=(self.v,self.rev)
        arr.append(tup)
        
        return self.v        

for i in range(3):
    obj=sentence(input("enter : "))
    obj.reverse()
    obj.vowels()

arr.sort(reverse=True)
for i in range(3):
    print(arr[i][1])

