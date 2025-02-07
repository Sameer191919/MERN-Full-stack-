let person = {
    name: "Kohli",
    age:35,
    occupation: "Cricketer",
    greet: function(name) {
        return `Hello, my name is ${this.name}`;
    },
};
console.log(person.name);
console.log(person.greet("Kohli"));
console.log(person.occupation);
console.log(person.age);