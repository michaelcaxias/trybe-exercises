class Superclass {
  public isSuper: boolean;
  constructor() {
    this.isSuper = true;
  }
  public sayHello() {
   console.log('Olá, mundo!') 
  }
}

class Subclass extends Superclass {
  public sayHello() {
   console.log('Olá, mundo!') 
  }
}