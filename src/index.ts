export interface IPerson {
    name: string,
    age: number
    say: (num: number) => string
}


export const Person: IPerson = {
    name: "Juan",
    age: 20,
    say: (num: number) => "hello" + num.toString()
}

console.log(Person)