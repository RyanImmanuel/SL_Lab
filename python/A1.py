list=[]
n=int(input("enter size of array "))
print("enter elements of array : ")

for i in range(0,n):
    ele=int(input())
    list.append(ele)

print(min(list)," ",max(list))

ins=int(input("enter input"))
pos=int(input("enter pos"))

list.insert(pos,ins)

print(list)
de=int(input("enter de"))

list.remove(de)
print(list)

ele=int(input("enter ele to be searched"))
if ele in list:
    print("element found at ",list.index(ele)+1)
else:
    print("not found")


