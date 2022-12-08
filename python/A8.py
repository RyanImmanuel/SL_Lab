from functools import reduce
l=[1,2,3,4,5,6]
print(l)
l2=[3*x for x in l]
print(l2)
sum1=reduce(lambda x,y:x+y,l)
sum2=reduce(lambda x,y:x+y,l2)
print(sum1,sum2)