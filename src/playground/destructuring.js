//
// Object Destrucuring
//
// const person = {
//   name: 'Jon',
//   age: 27,
//   location: {
//     city: 'Philadelpha',
//     temp: 92
//   }
// };

// const { name: firstName = 'Anonymous', age } = person
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     // name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

// Array Destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '32903'];
const [, city, state = 'New York'] = address;
console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];
const [drink, , medium] = item;
console.log(`A medium ${drink} costs ${medium}`);