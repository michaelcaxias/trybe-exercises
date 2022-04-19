import Colors from "./enums/Colors";
import Doors from "./enums/Doors";
import Directions from "./enums/Directions";

class Car {
  brand: string;
  color: Colors;
  doors: number;
  constructor(brand: string, color: Colors, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk(): void {
    console.log("Beep!");
  }

  openTheDoor(door: Doors): void {
    console.log(`Abrindo porta ${door}`);
  }

  closeTheDoor(door: Doors): void {
    console.log(`Fechando porta ${door}`);
  }

  turnOn(): void {
    console.log("Ligando o carro");
  }

  turnOff(): void {
    console.log("Desligando o carro");
  }

  speedUp(): void {
    console.log("Acelerando o carro");
  }

  speedDown(): void {
    console.log("Desacelerando o carro");
  }

  stop(): void {
    console.log("Parando o carro");
  }

  turn(directions: Directions): void {
    console.log(`Virando o carro para ${directions}`);
  }
}

const ferrari = new Car("Ferrari", Colors.Vermelha, 4);

ferrari.turnOn();
ferrari.speedUp();
ferrari.turn(Directions.ESQUERDA);
ferrari.turn(Directions.DIREITA);
ferrari.speedUp();
ferrari.turn(Directions.DIREITA);
ferrari.turn(Directions.DIREITA);
ferrari.speedUp();
ferrari.stop();
ferrari.turnOff();