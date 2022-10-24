//problem 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [randomCar] = cars
const [,otherRandomCar] = cars
//predict the output

console.log(randomCar)
console.log(otherRandomCar)
//output = Tesla, Mercedes


//problem 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const {name: otherName} = employee;
//predict output

console.log(name);
console.log(otherName);
//output = ReferenceError: name is not defined

//problem 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const {password: hashedPassword} = person;
//predict output

console.log(password);
console.log(hashedPassword);
//output = '12345' , undefined

//problem 4
const numbers = [8,2,3,5,6,1,67,12,2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//predict output

console.log(first == second);
console.log(first == third);
//output = false, true

//problem 5
const lastTest = {
    key: 'value',
    secondKey: [1,5,1,8,3,3]
}
const {key} = lastTest;
const {secondKey} = lastTest;
const [,willThisWork] = secondKey
//predict output

console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
//output = value, [1,5,1,8,3,3], 1, 5