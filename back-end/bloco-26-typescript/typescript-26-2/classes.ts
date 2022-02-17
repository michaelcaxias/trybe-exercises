import Colors from "./Colors";
import Doors from "./Doors";

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
    console.log("Abrindo porta");
  }
}