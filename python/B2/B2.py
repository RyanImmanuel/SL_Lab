from collections import Counter # Path: test.py
from functools import reduce # Path: test.py

def word_count(fname):
    f=open(fname,"r")
    return Counter(f.read().split())
   
d = word_count("B2\B2.txt") # Path: B2.txt
print("Dictionary containing words with no of occurences:\n",d)
print()

lis = list(d.items()) # convert dictionary to list
print("List of tuples obtained from dictionary:\n",lis)
print()

lis.sort(reverse=True, key=lambda x: x[1]) # sort list by value
print("Ordered list of tuples:\n",lis)
print()

print("\nThe top 10 most occured words are:")
lis2 = []
for i in range(0, 10):
    print(lis[i][0])
print()

for i in range(0, 10):
    lis2.append(len(lis[i][0]))
avg = reduce(lambda a, b: a + b, lis2) / len(lis2) # find average
print("Average length of all words is :", avg) # print average

lis2 = [x * x for x in lis2 if x % 2 != 0] # find square of odd numbers
print("Squares of all odd numbers=",lis2)