const myObj ={
  name: 'Aleksandr',

  doSmt() {
    // this === myObj
    console.log(this);
  }
};

myObj.doSmt();



// <!-- Example of Call -->
// 1. We coudn't use default value Bye:`text?: string = 'Bye' with unnecessary params === ?`
// 2. But we could use default value`Bye: `text: string = 'Bye'` with necessary params
function sayHi(text?: string): void {
  console.log(`${this.name} say ${text ? text : 'Bye'}`); // if text => text, else 'Bye'
}
sayHi.call(myObj, 'Hi'); // Aleksandr say Hi
sayHi.call(myObj); // Aleksandr say Bye



// <!-- Example of Bind -->

const myFunction = sayHi.bind(myObj, 'Hello');
myFunction(); // Aleksandr say Hello

