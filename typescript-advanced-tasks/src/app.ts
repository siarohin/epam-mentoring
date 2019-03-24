function doSmt() {
  // this === window
  console.log(this);
}

doSmt();


const myObj ={
  doSmt() {
    // this === myObj
    console.log(this);
  }
};

myObj.doSmt();


class myClass {
  name: string;
  constructor(name) {
    this.name = name;
  }
  doSmt() {
    // this === new Instance
    console.log(this.name);
  }
}

const myInstance = new myClass('myName');

myInstance.doSmt();