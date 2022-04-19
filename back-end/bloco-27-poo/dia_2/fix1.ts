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
  constructor() {
    super()
    this.isSuper = false;
  }
}

const funcOut = (object: Superclass) => {
  object.sayHello();
  const isSuper =  object.isSuper ? 'Super!' : 'Sub!'
  console.log(isSuper);
  
}; 

const superClass = new Superclass;
const subClass = new Subclass;

funcOut(superClass);
funcOut(subClass);