characters_file = open("personagens.txt", mode="w") # ao abrir um arquivo para escrita, um novo arquivo é criado mesmo que ele já exista, sobrescrevendo o antigo

characters_file.write("Wanda")

print("\nDoctor Strange", file=characters_file)

more_characters = ["\nReed Richards", "\nProfessor Xavier"]

characters_file.writelines(more_characters)

characters_file.close() #importante
