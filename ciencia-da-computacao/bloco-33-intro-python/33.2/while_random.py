import random

random_number = random.randint(0, 11)

guess = 0

while guess != random_number:
  guess = int(input("Qual o número? "))

print(f"O número era: {random_number}")
