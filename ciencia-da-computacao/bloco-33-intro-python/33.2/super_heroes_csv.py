import csv

superhero_file = open("superhero_csv.txt", mode="w")

with open("dc-wikia-data.csv") as wikia_data:
  # desconstrução em python, primeira linha = header, restante = superhero_list
  superhero_list = csv.DictReader(wikia_data) # não é possível visualizar todos os elementos de uma vez
  for superhero in superhero_list:
    superhero_file.write(superhero["name"] + "\n")

superhero_file.close()
