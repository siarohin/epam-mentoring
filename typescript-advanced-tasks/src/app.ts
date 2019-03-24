class myClass {
  doSmth() {
    // myClass
    console.log(this);

    // window
    setTimeout(function() {
      console.log(this);
    }, 0);

    // myClass
    setTimeout(() => {
      console.log(this);
    }, 100);
  }
}

const myInstance = new myClass();
myInstance.doSmth();