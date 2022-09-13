/**
 * prototypes are the mechanism by which javaScript
 * object inherit features from on another
 *
 * # All javsScript object inherit properties and methods frorm prototype.
 */

let myHeros = ["thor", "spiderman"];

let heropower = {
  thor: "hammer",
  spiderman: "Sling",

  getSpiderPower: function () {
    console.log(` spidy power is ${this.spiderman}`);
  },
};

/**question :- I am defining a library in which anybody
 *  define's any method or object he should be geting the
 * function my default "shivam" and it should print out shivam
 * available in all the objects
 *
 *
 */
Object.prototype.shivam = function () {
  console.log(`shivam is present in all object `);
};

myHeros.shivam();

/**
 * Question :- i want to add heyarray method and it should
 * print out total element in no
 */

// Object.prototype.Heyarry= function(){
//     this.constructor{
//         this.array = array;
//     }
//     console.log(`the total element in array :- ${this.array}`);
// }

Array.prototype.HeyArray = () => {
  console.log(` Total element are ${this.length}`);
};

//Inheritance
/**
 *
 */

const User = {
  name: "Top Name",
  Email: "example@gmail.com",
};

const Teacher = {
  makeVideos: true,
};

// Teacher.__proto__ = User;

// Teacher.prototype = User;
//                     object, prototype

console.log(Teacher);

const TeacheringSupport = {
  isAvaiable: false,
};

const TSAssistant = {
  makeAssignment: "js Assignment",
  fullTime: true,
  __proto__: TeacheringSupport,
};

Object.setPrototypeOf(Teacher, User);
Object.setPrototypeOf(TeacheringSupport, Teacher);

/**
 * #challange
 */
String.prototype.truelenght = function () {
  const newString = this.trim();
  return newString.length;
};

console.log("hitesh".length);
console.log("hitesh  ".truelenght());

// String.prototype.truelenght = function () {
//   const newString = this.trim();
//   return newString.length;
// };

/**
 * Event and loop in javaScript
 */

const UserOne = () => {
  console.log("hellow I am user One");
};

const UserTwo = () => {
  setTimeout(() => {
    console.log("hello I am inside user two");
  }, 1000);
  console.log("hello I am user two");
};

const UserThree = () => {
  console.log("hello I am user Three");
};

UserOne();
UserTwo();
UserThree();

// Promise { Callbakc , promise cans { then Catch },}

const MakePromise = new Promise((resolve, resject) => {
  setTimeout(() => {
    const arrOne = ["userOne", "userTwo", "userThree"];
    if (arrOne.length > 5) {
      resolve("Yes, the user exist");
    } else {
      resject("No found");
    }
  });
}, 2500);

MakePromise.then((result) => {
  console.log(result);
}).catch((error) => console.log(error));

// const MakeNewPromise = new Promise(username, function (resolve, reject) {
//   if (username) {
//     resolve("yes, the user Exist");
//   } else {
//     reject("no user is not exist");
//   }
// });

// MakeNewPromise("shivam")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const some_function = (username, password) => {
  return new Promise((resolve, reject) => {
    if (username && password) {
      resolve(" yes User Exist");
    } else {
      reject(" No User dosn't exist");
    }
  });
};

some_function("shivam", "test")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

//Async and await

const Userone = () => {
  return " I am UserOne";
};

const Usertwo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I am done, and user Found");
    }, 1500);
  });
};

const Userthree = () => {
  return " I am Userthree";
};

const wait = async () => {
  let GuestOne = Userone();
  console.log(GuestOne);

  let Guesttwo = await Usertwo();
  console.log(Guesttwo);

  let Guestthree = Userthree();
  console.log(Guestthree);
};

wait();
