fruits = ["orange", "apple", "grape", "pineapple"] 

print(fruits[0])  # acessa o index de uma lista

print(fruits[-1])  # acessa o ultimo index de uma lista

fruits.append("banana")  # adicionando uma nova fruta

print(fruits)

fruits.remove("pineapple")  # removendo uma fruta

print(fruits)

fruits.extend(["pear", "melon", "kiwi"])  # acrescenta uma lista de frutas a lista original, parecido com o concat

print(fruits)

print(fruits.index("apple")) # retorna o índice onde a fruta está localizada, neste caso 1 em seu programa

fruits.sort()  # ordena a lista de frutas em ordem alfabetica ou numerica

print(fruits)

trybeCourse = ["Introdução", "Front-end", "Back-end"]

print(trybeCourse)

trybeCourse[0] = 'Fundamentos'

print(trybeCourse)

trybeCourse.append("Ciência da Computação")

print(trybeCourse)