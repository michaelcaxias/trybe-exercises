books = 60
bookPrice = (1 - 0.4) * 24.20
logistic = 3 + (books - 1) * 0.75
cost = books * bookPrice + logistic
print(cost)