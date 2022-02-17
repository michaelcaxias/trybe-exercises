import Colors from "./Colors";
import Doors from "./Doors";
import Directions from "./Directions";

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