from geladeira import Geladeira
from geladeira import geladeira_eletrolux_azul

class Pessoa:
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade
        self.geladeira = False
        self.notebook = True
        self.dinheiro = 10000
      
    def comprar_geladeira(self, geladeira: Geladeira):
        if (geladeira.preco < self.dinheiro):
            self.dinheiro -= geladeira.preco
            self.geladeira = True
            return f"""
              Compra de geladeira efetuada com sucesso!
              Agora você tem R$ {self.dinheiro} em conta.
            """
        else:
            return "Você não tem dinheiro suficiente"


    def __str__(self):
        return f"""
          - Nome: {self.nome}
          - Idade: {self.idade}
          - Geladeira: {self.geladeira}
          - Notebook: {self.notebook}
          - Dinheiro: R$ {self.dinheiro}
        """

michael = Pessoa(nome='Michael Caxias', idade=19)
print('Antes:')
print(michael)
print('Ato:')
print(michael.comprar_geladeira(geladeira=geladeira_eletrolux_azul))
print('Depois:')
print(michael)
