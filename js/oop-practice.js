// STEP 1
// class Cat {
//     constructor(name) {
//         this.name = name;
//     }
// }

// const Dog = class {
//     constructor(name) {
//         this.name = name;
//     }
// };

// STEP 2
// const myCat = new Cat("Kitty");
// const myDog = new Dog("Rufus");

// STEP 3
// class Animal {
//     createAnimal() {
//         console.log("The Animal has been created");
//     }
// }
// const myAnimal = new Animal();
// myAnimal.createAnimal();

// STEP 4
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
  
//     createAnimal() {
//         console.log(`The ${this.name} has been created`);
//     }
// }
  
// const myAnimal = new Animal("dog");
// myAnimal.createAnimal();
  
// STEP 5
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type   = type;
//         this.breed  = breed;
//         this.color  = color;
//         this.height = height;
//         this.length = length;
//     }
// }
// const myAnimal = new Animal("dog", "Shetland Sheepdog", "Sable", "15 inches", "30 inches");
// console.log(`Type: ${myAnimal.type}`);
// console.log(`Breed: ${myAnimal.breed}`);
// console.log(`Color: ${myAnimal.color}`);
// console.log(`Height: ${myAnimal.height}`);
// console.log(`Length: ${myAnimal.length}`);

// STEP 6
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length = length;
//     }
// }
// const myAnimal = new Animal("cat", "Siamese", "Black", "10 inches", "20 inches");
  
// for (let property in myAnimal) {
//     console.log(`${property}: ${myAnimal[property]}`);
// }
  
// STEP 7
// class Animal {
//     constructor(type, breed, color, height, length) {
//       this.type = type;
//       this.breed = breed;
//       this.color = color;
//       this.height = height;
//       this.length = length;
//     }
  
//     speak() {
//         if (this.type === "dog") {
//             console.log(`The ${this.color} ${this.type} is barking!`);
//         } else if (this.type === "cat") {
//             console.log(`The ${this.color} ${this.type} is meowing!`);
//         }
//     }
// }
// const myAnimal = new Animal("dog", "Shetland Sheepdog", "Sable", "15 inches", "30 inches");
// myAnimal.speak();

// STEP 8
// class Animal {
//     constructor(type, breed, color, height, length) {
//         let _type = type;
//         let _breed = breed;
//         let _color = color;
//         let _height = height;
//         let _length = length;
  
//         this.checkType = function() {
//             return _type === "dog" ? "dog" : "cat";
//         };

//         this.speak = function() {
//             return `The ${this.checkType()} has made a noise!`;
//         };
//     }
// }
// const myAnimal = new Animal("dog", "Shetland Sheepdog", "Sable", "15 inches", "30 inches");
// console.log(myAnimal.speak());
  
// STEP 9
// String.prototype.findWords = function(word) {
//     const regex = new RegExp(`\\b${word}\\b`, 'gi');
//     const match = this.match(regex);
//     const count = match ? match.length : 0;
//     alert(`The word "${word}" appears ${count} times in the paragraph.`);
// };

// const paragraph = 'Mary had a little lamb, little lamb, little lamb. Mary had a little lamb, Its fleece was white as snow.';
// paragraph.findWords('lamb');