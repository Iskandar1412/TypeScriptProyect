import {IPerson, Person} from "../index"

// let myVariable: type = myVariableValue;
// let myFunc: (param: type) => returnType = (param)=> returnType;

let myName: string = "John";
let myAge: number = 0.99666666;

interface Pet {
  name: string
  legs: number
}

//  "Hola " +  num  -- string concatenation
//  `Hola ${num}`  --template string

// crear un array
let myArray: number[] = [10, 20, 30];
let array: string[] = ["123", "123", "adasd"]
let array2: number[] = [12, 12.00003, 12.009]
let boolArray: boolean[] = [true, false]
let people: IPerson[] = [ 
  Person,
  { name: "Person", age: 155, say: (num)=> `Hola ${num}`} 
]

let mascotas: Pet[] = [ 
  {name: 'Eevee', legs: 6}, 
  {name: 'Piakchu', legs: 99}
]
  

let myFunc: (a: number, b: number)=> number = (a, b)=> a + b;

function Greeting(name: string, age: number): string {
  return `Greetings ${name} with ${age} years old`;
}
