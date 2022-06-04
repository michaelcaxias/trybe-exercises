class Geladeira:
    def __init__(self, cor, preco, marca):
        self.__cor = cor
        self.__ligado = False
        self.__temperatura = 'quente'
        self.preco = preco
        self.marca = marca
    
    def ligar(self):
        self.__ligado = True
        self.__temperatura = 'frio'

    def desligar(self):
        self.__ligado = False
        self.__temperatura = 'quente'

    def esta_ligado(self):
        return self.__ligado


geladeira_eletrolux_azul = Geladeira(cor="Azul", preco=4600, marca="Eletrolux")
