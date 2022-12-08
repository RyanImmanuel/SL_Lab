def AD():

    ad = {"C":"Carbon","B":"Boron","N":"Nitrogen","S":"Sulphur"}
    print(ad)
    k= input("enter a key: ")
    v= input("enter a value: ")
    if k in ad.keys():
        print("key exists and being replaced ")
    else:
        print("key added ")
    ad[k]=v
    print(ad)
    print("length of ad = ",len(ad))
    user=input("search key! ")
    if user in ad.keys():
        print("value is ",ad[user])
    else:
        print("key does not exist ")

