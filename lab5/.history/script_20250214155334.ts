interface Person{
    name: string;
    age: number;
};
   
function greet(person: Person): string {
  return "Hello " + person.name;
}

let p: Person = {
    name: "gLEB",
    age: 100
}
console.log(greet(p))