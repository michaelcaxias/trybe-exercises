import json

superhero_file = open("superhero.txt", mode="w")

with open('superheroes.json') as superheroes_json: # vai fechar automaticamente
  superheroes_list = json.load(superheroes_json)
  for superhero in superheroes_list:
    superhero_file.write(superhero["superhero"] + "\n")

superhero_file.close()
