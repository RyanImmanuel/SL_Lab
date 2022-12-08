#tuples are immutable as opposed to lists which are mutable
history=[]
def kel_to_cel(temp):
    c = temp - 273.15
    print(f"{c} celsius")  # formula to convert kelvin to celsius
    tup=(temp,c,"kel to cel")
    history.append(tup)


def cel_to_kel(temp):
    c = temp + 273.15
    print(f"{c} kelvin")  # formula to convert celsius to kelvin
    tup=(temp,c,"cel to kel")
    history.append(tup)

print("1. kel to cel \n2. cel to kel\n3. History\n4. Exit\n")
while True:
    n=int(input("enter choice "))
    if (n==1):
        temp = float(input("Enter the temp in kelvin "))
        kel_to_cel(temp)
    elif (n == 2):
        temp = float(input("Enter the temp in celsius "))
        cel_to_kel(temp)
    elif(n==3):
        print(history)
    else:
        break #exit()