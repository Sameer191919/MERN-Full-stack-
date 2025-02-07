let cars =[ "supra","BMW", "Audi", "Mercedes"];
cars.forEach(car => console.log(car));

cars.push("Lamborghini");
cars.forEach(car => console.log(car));

cars.pop("Lamborghini");
cars.forEach(car => console.log(car));

cars.shift("supra");
cars.forEach(car => console.log(car));

cars.unshift("supra");
cars.forEach(car => console.log(car));

let numbers = [12, 22, 13, 8, 5];
let squared = numbers.map(num => num * num);
squared.forEach(sno => console.log(sno));