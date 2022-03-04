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
}

const funcOut = (object: Superclass) => {
  console.log(object.sayHello());
}; 