interface Person{
    name: string;
    age: number;
};
   
function greet(person: Person): string {
  return "Hello " + person.name;
}