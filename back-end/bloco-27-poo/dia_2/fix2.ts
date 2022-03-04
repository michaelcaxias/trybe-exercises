interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) {
    this.myNumber = myNumber;
  }
  myFunc(myParam: number): string {
    const { myNumber } = this;
    return String(myNumber + myParam);
  }
}

const myFuncOut = (object: MyClass) => {
  console.log(object.myFunc(5));
};

const myClass = new MyClass(5);

myFuncOut(myClass);
