function greeter(person: string) {
  return "Hello, " + person;
}

let user = ["Jane User", "John Smith"];

console.log(greeter(user)); //This will cause an error because the function expects a string but receives an array of strings. 